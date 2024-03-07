
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Cart from './Cart';
import ProductDitails from './ProductDitails';
import { BASE_URL } from './Untils';
import axios from 'axios';



function App() {
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const addToCart = (ProductDitails) => {

    const exist = cartItem.find((x) => {
      return x.id === ProductDitails.id;
    })
    if (exist) {
      alert("This Product is allready added")
    } else {
      setCartItem([...cartItem, { ...ProductDitails, quantity: 1 }])
      setCartCount(cartCount + 1);
    }

    console.log(cartItem);
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}products`);
        setData(response.data.products); //Set data to the fetched array
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });




  return (
    <>
      <BrowserRouter>
        <div className="index">
          <Navbar cartCount={cartCount} setCartCount={setCartCount} handleSearchChange={handleSearchChange} searchTerm={searchTerm} />
          <div className="d-flex  flex-grow-1">

            <Sidebar />

            <Routes>
              <Route path="/" element={<Dashboard filteredData={filteredData} error={error} loading={loading} />} />
              <Route path="productDitails/:id" element={<ProductDitails addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart addToCart={addToCart} cartItem={cartItem} setCartItem={setCartItem} cartCount={cartCount} setCartCount={setCartCount} />} />
            </Routes>

          </div>
        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
//style={{ overflowY: '100vh', maxHeight: '100vh' }}