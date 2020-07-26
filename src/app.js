import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/categories/categories';
import Products from './components/products/products';
import SimpleCart from './components/simpleCart/simpleCart';

function App () {
  return(
    <>
      <Header />

      <Categories />
      <SimpleCart />
      <Products />
         
      <Footer />
    </>
  );
}

export default App;
