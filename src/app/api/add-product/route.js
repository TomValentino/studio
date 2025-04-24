// app/api/add-product/route.js
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("VYBE");
    const collection = db.collection("products");

    const body = await request.json();
    const { name } = body;

    if (!name) {
      return new Response(JSON.stringify({ message: "Product name is required" }), {
        status: 400,
      });
    }

    const result = await collection.insertOne({ name });

    return new Response(
      JSON.stringify({ message: "Product added successfully", productId: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Add product error:", error);
    return new Response(JSON.stringify({ message: "Failed to add product" }), {
      status: 500,
    });
  }
}
