import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewProduct from './components/ViewProduct';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';  // Corrected import

const App = () => {
  return (
    <Router>
      <div className="details">
        <div className="detailsPart1">Free Shipping on orders above 999/-</div>
        <div className="detailsPart2">Call us on: +91 98768 05120</div>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />  
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
