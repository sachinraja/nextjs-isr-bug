export const revalidate = 5;

export default async function Home({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <div>[param]: {id}</div>
      <div>[time]: {new Date().toLocaleTimeString()}</div>
      </div>
  );
}
