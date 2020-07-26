import React from 'react';
import { connect } from 'react-redux';

import {  Button } from '@material-ui/core';
import './cart.scss';





const SimpleCart = props => {


  return (
    <>
      <h5>Cart({props.cart.status ? 0 :props.cart.payload.length}) </h5>

      <div id="cart">
        {props.cart.status ? '' :props.cart.payload.map((products,idx) =>
          
          <Button  key={idx}> {products} </Button> )}   
      </div>
      
    </>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(SimpleCart);