import React, { useEffect, useState, useContext } from 'react';
import Product from '../Product/Product.jsx';
import { userLoginContext } from '../contexts/userLoginContext';
import Products from '../Products/Products.jsx'
import image from '../../assets/shopimg!.jpg'


function Home() {
  const { userLoginStatus, currentUser } = useContext(userLoginContext);
  const [products, setProducts] = useState([]);

  return (
    <div>
      {userLoginStatus ? (
        <div className="text-center">
          <h3 className="m-4">Welcome {currentUser?.username}</h3>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="m-4 mb-3">Welcome to SubtleShop</h3>
          <div className="m-2 m-sm-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center">
          <img  src={image} alt=" " className="img img-fluid mb-4" />
        </div>
        <div className="col-12 col-md-10">
          <p className="justify-content-center">
            SubtleShop is an E-commerce website that operates in different types of market segments and can be conducted over computers, tablets, smartphones, and other smart devices.

            Providing goods and services isn't as easy as it may seem. It requires a lot of research about the products and services you wish to sell, the market, audience, competition, as well as expected business costs.

            SubtleShop offers advantage to consumers :
            Convenience, Increased Selection, Potentially Lower Start-up Cost, International Sales, Easier to Retarget Customers. A more capital-intensive approach to e-commerce, wholesaling entails maintaining quantities of inventory, keeping track of customer orders, maintaining customer shipping information, and typically having ownership of the warehouse space to house products.
          </p>
        </div>
      </div>
    </div>
          
        </div>
      )}
      <Products />
    </div>
  );
}

export default Home;
