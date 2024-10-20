import React from 'react';
import SearchBar from '../SearchBar';
import Slider from '../Slider';
import Filter from '../Filter';
import ProductList from '../ProductList';

import './index.css';

function Home() {
  return (
    <>
    <div className="mainClass">
      <SearchBar/>
      <div className="buttons">
         <button type="button" className="plantCss">Plants</button>
         <button type="button" className="potsCss">Pots</button>
      </div>
      <div className="aboutContent">
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
      </div>
      <div>
        <h1 className="heading">Nursery</h1>
        <Slider/>
      </div>
      <div className="mainContent">
        <div>
          <Filter/>
        </div>
        <div>
          <div className="product-sorting">
            <p>300 products</p>
            <select className="sort-dropdown" name="sort-by">
              <option value="">SORT BY</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
          <div>
            <ProductList/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;