import React, { useEffect, useState } from 'react';
import Product from '../product/Product';

function Products() {
  const [products, setProducts] = useState([]);

  async function getData() {
    try {
      const res = await fetch('https://dummyapi.online/api/todos');
      const userData = await res.json();
      setProducts(userData);
    } catch (error) {
      console.error('Error while fetching data: ', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="product-list row justify-content-center flex-wrap">
      {products.map((product) => (
        <Product key={product.id} product={product} showAddToCart={true} />
      ))}
    </div>
  );
}

export default Products;
