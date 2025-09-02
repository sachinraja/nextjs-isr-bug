export const revalidate = 5;

export default function Home() {
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
			<div>[param]: STATIC</div>
			<div>[time]: {new Date().toLocaleTimeString()}</div>
		</div>
	);
}
