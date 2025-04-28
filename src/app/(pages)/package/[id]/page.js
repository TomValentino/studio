import clientPromise from "@/lib/mongodb";

// Fetch slugs for static generation
export async function generateStaticParams() {
  const client = await clientPromise;
  const db = client.db('VYBE');
  
  // Get all slugs for products
  const products = await db.collection('products').find().toArray();
  const ids = products.map(product => ({
    id: product.id,
  }));

  console.log('products', products)
  console.log('ids', ids)

  // Return slugs for static generation
  return ids.map(id => ({ id: id.id }));
}


export default async function ProductPage({ params }) {
  const { id } = params; // no need for "await" here
  
  console.log('ID', id); // correct log

  const client = await clientPromise;
  const db = client.db('VYBE');
  
  // Fetch product by ID, not slug
  const product = await db.collection('products').findOne({ id });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}


// Revalidation: Regenerate page after 60 seconds
export const revalidate = 60; // Page will regenerate every 60 seconds
