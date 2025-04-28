import { fetchAllProducts, createNewProduct } from "./server";

// Fetch products
export const handleFetchAllProducts = async () => {
  const { success, products, message } = await fetchAllProducts();
  if (success) return JSON.parse(products);
  console.error("Error fetching products:", message);
};



// Create new product
export const handleCreateNewProduct = async (productData) => {
  const { success, message } = await createNewProduct(productData);
  if (success) console.log('Product added successfully:', message);
  else console.error("Error adding product:", message);
};
