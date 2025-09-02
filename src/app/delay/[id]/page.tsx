export const revalidate = 5;

export async function generateStaticParams() {
	return [{ id: "1" }];
}

export default async function Home({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	await new Promise((resolve) => setTimeout(resolve, 5000));
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<div>[param]: {id}</div>
			<div>[time]: {new Date().toLocaleTimeString()}</div>
		</div>
	);
}
