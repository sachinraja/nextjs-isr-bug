import { unstable_cache } from "next/cache";

export async function generateStaticParams() {
	return [{ tag: "1" }];
}

export default async function TagPage({
	params,
}: {
	params: Promise<{ tag: string }>;
}) {
	const { tag } = await params;
	const getTime = unstable_cache(
		async () => new Date().toISOString(),
		["time"],
		{
			tags: [tag],
			revalidate: 60,
		},
	);

	const time = await getTime();
	return <div>[time]: {time}</div>;
}
