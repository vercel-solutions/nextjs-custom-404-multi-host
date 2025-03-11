import { notFound } from "next/navigation";

export default function NotFoundCatchAll() {
	// Call the notFound function to trigger the local not-found page.
	notFound();
}
