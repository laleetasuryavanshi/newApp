import React from 'react';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import AddEnquiry from './components/AddEnquiry';
import ProductList from './components/ProductList';
import './App.css'; // Import CSS for styling

function App() {
  return (
      <div className="App">
        <header>
          <h1>Company Name</h1>
          <nav>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#enquiry">Add Enquiry</a>
            <a href="#products">Products</a>
          </nav>
        </header>
        <main>
          <AboutUs />
          <ContactUs />
          <AddEnquiry />
          <ProductList />
        </main>
        <footer>
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </footer>
      </div>
  );
}

export default App;
