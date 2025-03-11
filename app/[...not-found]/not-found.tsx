import { headers } from "next/headers";

export default async function NotFound() {
	const headersList = await headers();
	// You can use the host header to customize the 404 page.
	const host = headersList.get("host");

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-4xl font-bold">Custom 404</h1>
			<p className="text-lg">This page could not be found.</p>
			<p className="text-lg">Host: {host}</p>
		</div>
	);
}
