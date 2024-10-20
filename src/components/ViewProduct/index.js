import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

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

const ViewProduct = () => {
  const { id } = useParams();  // Get the product id from URL
  const product = products.find(p => p.id === parseInt(id));  // Find the product by id

  if (!product) {
    return <div className="notFound">Product not found</div>;
  }

  return (
    <div>
      <div className="view-product-page">
        <h1>Thank You for Viewing {product.name}</h1>
        <div className="product-details-view">
          <img src={product.image} alt={product.name} />
          <div>
            <h2>{product.name}</h2>
            <p>{`Price: ₹${product.price}`}</p>
            <p>{`Original Price: ₹${product.originalPrice}`}</p>
            <p>{`Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
