import Image from "next/image";

export default async function Home( { params }) {
    const { packageName } = await params;
  return (
    <div>
      <h1>Welcome to my pacakge {packageName} ??</h1>
    </div>
  );
}
