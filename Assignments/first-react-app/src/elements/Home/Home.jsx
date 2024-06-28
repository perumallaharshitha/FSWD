import React, { useEffect, useState, useContext } from 'react';
import Product from '../product/Product';
import { userLoginContext } from '../contexts/userLoginContext';
import Products from '../products/Products';

function Home() {
  const { userLoginStatus, currentUser } = useContext(userLoginContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('https://dummyapi.online/api/todos');
        const userData = await res.json();
        console.log('data: ', userData);
        setProducts(userData);
      } catch (error) {
        console.error('Error-data is being fetched:', error);
      }
    }

    getData();
  }, []);

  return (
    <div>
      {userLoginStatus ? (
        <div className="text-center">
          <h3 className="m-4">Welcome {currentUser?.username}</h3>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="m-4 mb-3">Welcome Guest</h3>
          
        </div>
      )}
      <Products />
    </div>
  );
}

export default Home;
