import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/categories/categories';
import Products from './components/products/products';


function App () {
    return(
        <>
        <Header />

        <main className='main-content'>
        <Categories />
        <Products />
        </main>
         
        <Footer />
        </>
    );
}

export default App;
