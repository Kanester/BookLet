/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

const CACHE = `booklet_cache_${version}`;
const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
	self.skipWaiting();
	event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
	self.clients.claim();
	event.waitUntil(
		caches
			.keys()
			.then((keys) => Promise.all(keys.map((key) => key !== CACHE && caches.delete(key))))
	);
});

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;

	event.respondWith(
		(async () => {
			const cache = await caches.open(CACHE);
			const url = new URL(event.request.url);

			if (ASSETS.includes(url.pathname)) {
				const cached = await cache.match(url.pathname);
				if (cached) return cached;
			}

			if (event.request.mode === 'navigate') {
				try {
					const network = await fetch(event.request);
					if (network.ok) return network;
				} catch {
					const fallback = await cache.match('/');
					if (fallback) return fallback;
				}
			}

			try {
				const response = await fetch(event.request);
				if (response.ok) cache.put(event.request, response.clone());
				return response;
			} catch {
				const cached = await cache.match(event.request);
				if (cached) return cached;
				throw new Error('Network and cache both failed');
			}
		})()
	);
});
