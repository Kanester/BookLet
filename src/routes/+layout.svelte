<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>BookLet</title>
	<meta name="title" content="BookLet — Offline Accounting Practice App for Students" />
	<meta
		name="description"
		content="BookLet is a lightweight offline Android app for learning and practicing accounting concepts — perfect for ABM strand students, self-learners, and beginners. Work with journals, ledgers, trial balances, and simple reports without internet or logins."
	/>
	<meta
		name="keywords"
		content="BookLet, accounting app, ABM strand, accounting practice, offline learning, Android accounting, trial balance, journalizing, ledger, balance sheet, accounting workbook, student project"
	/>
	<meta name="author" content="Kanester/Xiov" />
	<meta property="og:title" content="BookLet — Offline Accounting Practice App for Students" />
	<meta
		property="og:description"
		content="Learn accounting concepts offline with BookLet — a portable, interactive workbook for ABM students and beginners."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/icons/cover.png" />
	<meta property="og:url" content="" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="BookLet — Offline Accounting Practice App" />
	<meta
		name="twitter:description"
		content="Practice journalizing, ledgers, trial balances, and more — all offline."
	/>
	<meta name="twitter:image" content="/icons/cover.png" />
	<link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
	<link rel="shortcut icon" href="/icons/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="BookLet" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="stylesheet" href="/normalize.min.css" />
</svelte:head>

{@render children?.()}
