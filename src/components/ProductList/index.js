import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Modal from '../Modal'; 

const products = [
  { id: 1, name: 'Monsterra', image: '/images/plant1.png', price: 299, originalPrice: 359 },
  { id: 2, name: 'Snake Plant', image: '/images/plant2.png', price: 199, originalPrice: 259 },
  { id: 3, name: 'Aloe Vera', image: '/images/plant3.png', price: 159, originalPrice: 189 },
  { id: 4, name: 'Peace Lily', image: '/images/plant1.png', price: 249, originalPrice: 289 },
  { id: 5, name: 'Fern', image: '/images/plant2.png', price: 179, originalPrice: 229 },
  { id: 6, name: 'Cactus', image: '/images/plant3.png', price: 149, originalPrice: 189 },
  { id: 7, name: 'Spider Plant', image: '/images/plant1.png', price: 139, originalPrice: 169 },
  { id: 8, name: 'ZZ Plant', image: '/images/plant2.png', price: 229, originalPrice: 269 },
  { id: 9, name: 'Jade Plant', image: '/images/plant3.png', price: 189, originalPrice: 239 },
  { id: 10, name: 'Pothos', image: '/images/plant1.png', price: 129, originalPrice: 169 },
  { id: 11, name: 'Philodendron', image: '/images/plant2.png', price: 199, originalPrice: 249 },
  { id: 12, name: 'Bamboo', image: '/images/plant3.png', price: 109, originalPrice: 149 },
  { id: 13, name: 'Rubber Plant', image: '/images/plant1.png', price: 279, originalPrice: 329 },
  { id: 14, name: 'Ficus', image: '/images/plant2.png', price: 149, originalPrice: 199 },
  { id: 15, name: 'Areca Palm', image: '/images/plant3.png', price: 239, originalPrice: 289 },
  { id: 16, name: 'Monsterra', image: '/images/plant1.png', price: 299, originalPrice: 359 },
  { id: 17, name: 'Snake Plant', image: '/images/plant2.png', price: 199, originalPrice: 259 },
  { id: 18, name: 'Aloe Vera', image: '/images/plant3.png', price: 159, originalPrice: 189 },
  { id: 19, name: 'Peace Lily', image: '/images/plant1.png', price: 249, originalPrice: 289 },
  { id: 20, name: 'Fern', image: '/images/plant2.png', price: 179, originalPrice: 229 },
  { id: 21, name: 'Cactus', image: '/images/plant3.png', price: 149, originalPrice: 189 },
  { id: 22, name: 'Spider Plant', image: '/images/plant1.png', price: 139, originalPrice: 169 },
  { id: 23, name: 'ZZ Plant', image: '/images/plant2.png', price: 229, originalPrice: 269 },
  { id: 24, name: 'Jade Plant', image: '/images/plant3.png', price: 189, originalPrice: 239 },
  { id: 25, name: 'Pothos', image: '/images/plant1.png', price: 129, originalPrice: 169 },
  { id: 26, name: 'Philodendron', image: '/images/plant2.png', price: 199, originalPrice: 249 },
  { id: 27, name: 'Bamboo', image: '/images/plant3.png', price: 109, originalPrice: 149 },
  { id: 28, name: 'Rubber Plant', image: '/images/plant1.png', price: 279, originalPrice: 329 },
  { id: 29, name: 'Ficus', image: '/images/plant2.png', price: 149, originalPrice: 199 },
  { id: 30, name: 'Areca Palm', image: '/images/plant3.png', price: 239, originalPrice: 289 },
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [likedProducts, setLikedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);  // State to handle modal open/close
  const productsPerPage = 9;

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Toggle heart icon
  const toggleHeart = (id) => {
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter(productId => productId !== id));
    } else {
      setLikedProducts([...likedProducts, id]);
    }
  };

  // Handle Add to Cart button click
  const handleAddToCart = () => {
    setIsModalOpen(true);  // Show the modal
  };

  return (
    <div>
      <div className="product-grid">
        {currentProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <span
                className={`heart-icon ${likedProducts.includes(product.id) ? 'liked' : ''}`}
                onClick={() => toggleHeart(product.id)}
              >
                {likedProducts.includes(product.id) ? '❤️' : <img src="/images/wishlist.png" alt="wishlist" />}
              </span>
              <Link to={`/product/${product.id}`} className="view-product">
                View Product
              </Link>
            </div>
            <div className="product-details">
              <h2>{product.name}</h2>
              <small className="product-description">Indoor Plant, Low maintenance</small>
              <small className="rating">⭐⭐⭐⭐⭐ 4.9</small>
              <p>
                <small><span className="overline">₹ {product.originalPrice}</span></small> ₹ {product.price}
              </p>
              <div className="product-actions">
                <button className="add-to-cart" onClick={handleAddToCart}>- Add to cart +</button>
                <button className="buy-rent">Buy on Rent</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? 'active-page' : ''}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProductList;

