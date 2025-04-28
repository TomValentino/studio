'use server'

import clientPromise from "@/lib/mongodb";




// Fetch a single product by ID
export const fetchProductById = async (productId) => {
  try {
    console.log('productId', productId)
    const client = await clientPromise;
    const db = client.db("VYBE");
    
    // Fetch a single product by its ID
    const product = await db.collection("products").findOne({ id: productId });

    if (!product) {
      throw new Error('Product not found');
    }

    return {
      success: true,
      message: "Product fetched successfully",
      product: product,  // Return the product data
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to fetch product",
      error: error.message,
    };
  }
};



// Fetch All products
export const fetchAllProducts = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("VYBE");
    const products = await db.collection("products").find({}).toArray();

    if (!products || products.length === 0) {
      throw new Error('No products found');
    }

    return {
      success: true,
      message: "Products fetched successfully",
      products: JSON.stringify(products),
    };

  } 
  catch (error) {
    return {
      success: false,
      message: error.message || "Failed to fetch products",
      error: error.message,
    };
  }
};



// Create new product
export async function createNewProduct(productData) {
  try {
    console.log('Adding product to database');
    
    const client = await clientPromise;
    const db = client.db("VYBE");
    const collection = db.collection("products");

    const result = await collection.insertOne(productData);

    if (result.acknowledged) {
      return {
        success: true,
        message: "Product added successfully",
      };
    } 
    else {
      throw new Error("Failed to add product");
    }
    
  } 
  catch (error) {
    return {
      success: false,
      message: error.message || "Failed to add product",
      error: error.message,
    };
  }
}






