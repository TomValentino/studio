import clientPromise from "@/lib/mongodb";

// Fetch slugs for static generation
export async function generateStaticParams() {
  const client = await clientPromise;
  const db = client.db('VYBE');
  
  // Get all slugs for products
  const products = await db.collection('products').find().toArray();
  const slugs = products.map(product => ({
    slug: product.slug,
  }));

  // Return slugs for static generation
  return slugs.map(slug => ({ slug: slug.slug }));
}


export default async function ProductPage({ params }) {
  const { slug } = params;

  // Fetch product data based on the slug
  const client = await clientPromise;
  const db = client.db('VYBE');
  const product = await db.collection('products').findOne({ slug });

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
