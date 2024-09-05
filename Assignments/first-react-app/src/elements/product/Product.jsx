// Product.jsx
import React, { useContext, useState } from 'react';
import './Product.css';
import { userLoginContext } from '../contexts/userLoginContext';

function Product({ product }) {
  const { currentUser, userLoginStatus } = useContext(userLoginContext);
  const [completedStatus, setCompletedStatus] = useState(product.completed);

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
          <h5 className="card-title">{product.title}</h5>
          {/* Displaying completed status */}
          <p className="card-text m-2"><strong>Status:</strong> {String(completedStatus)}</p>
          <p className="card-text"><strong>Priority:</strong> {product.priority}</p>
        </div>
        <div className="d-flex justify-content-center">
          {/* <button type='submit' className='btn btn-success'>Add to Cart</button> */}
          {userLoginStatus && (
            <button type="submit" className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
