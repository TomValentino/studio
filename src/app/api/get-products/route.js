import clientPromise from "@/lib/mongodb";

export async function GET(req) {
  const client = await clientPromise;
  const db = client.db("VYBE");
  const products = await db.collection("products").find({}).toArray();
  console.log('PRODUCTS', products)

  return new Response(JSON.stringify(products), { status: 200 });
}
