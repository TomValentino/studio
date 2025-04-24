// pages/api/products.js
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("VYBE"); // use your DB name
  const products = await db.collection("products").find({}).toArray();

  res.status(200).json(products);
}
