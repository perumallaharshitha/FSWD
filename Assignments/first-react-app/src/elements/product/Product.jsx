// Product.jsx
import React, { useContext } from 'react';
import './Product.css';
import { userLoginContext } from '../contexts/userLoginContext';

function Product({ product }) {
  const { currentUser, userLoginStatus } = useContext(userLoginContext);

  async function addToCart(product) {
    product.username = currentUser.username;

    try {
      let res = await fetch('https://dummyapi.online/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if (res.ok) {
        console.log('Product added to cart');
        // Optionally, you can notify the user or update local state/context
      } else {
        const errorText = await res.text();
        console.error('Failed to add product to cart:', res.status, errorText);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  }

  return (
    <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
      <div className="card h-100">
        <div className="card-body text-center">
          <h5 className="card-title text-center">{product.title}</h5>
          <p className="card-text mt-2 mb-2"><strong>Status:</strong> {product.completed}</p>
          <p className="card-text"><strong>Priority:</strong> {product.priority}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          {userLoginStatus && (
            <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
