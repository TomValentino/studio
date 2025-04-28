// app/products/[handle]/page.tsx

import { fetchProductById } from '@/lib/server';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {

  const params2 = await params
  const product = await fetchProductById(params2.packageId);

  if (!product) return notFound();

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const params2 = await params
  const { product } = await fetchProductById(params2.packageId);
  if (!product) return notFound();
  console.log('product', product)

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}
