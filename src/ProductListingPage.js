import React from 'react';
import { useSelector } from 'react-redux'; // if using Redux to manage state
import ProductCard from './components/ProductCard'; // assuming you have a ProductCard component

function ProductListingPage() {
  // Example of using Redux to get products from the store
  const products = useSelector((state) => state.products);

  return (
    <div className="product-listing-page">
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
