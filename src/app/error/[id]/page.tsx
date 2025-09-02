import { getCache } from "@vercel/functions";

export const revalidate = 60;

export async function generateStaticParams() {
	return [{ id: "1" }];
}

export default async function ErrorPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const cache = getCache();
	const result = (await cache.get(id)) as { error: boolean } | undefined;
	if (result?.error) {
		cache.set(id, { error: false });
		throw new Error("error");
	}

	return (
		<div>
			revalidated {id} at {Date.now().toString()}
		</div>
	);
}
