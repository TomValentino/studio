


  export default function Layout({ children }) {
    return (
        <>{children}</>
  
    )
  }
  


  // Metadata Generation for SEO
  export async function generateMetadata({ params }) {
    const products = await handleFetchAllProducts();
    const { packageId } = await params;
    const product = products.find((p) => p.id === packageId);
  
    if (!product) { 
      return {
        title: 'Product not found',
        description: 'This product is unavailable.',
        metadataBase: new URL('https://yourwebsite.com'), // Set your base URL here
      };
    }
  
    return {
      title: `${product.name} | VYBE Marketing`,
      description: product.description || 'No description available.',
      metadataBase: new URL('https://yourwebsite.com'), // Set your base URL here
      openGraph: {
        title: product.title,
        description: product.description || 'No description available.',
        images: product.images.map(img => img.src) || [],
      },
    };
  }
  
  