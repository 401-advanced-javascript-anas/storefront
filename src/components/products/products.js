import React from 'react';
import { connect } from 'react-redux';


const Products = props => {
    return (
        <>
        <div >
	    <h1 >{props.productState.categoriesObj}</h1>
	    <h3>Products:</h3>
	    </div>
        
        <section className="products">
	        {props.productState.products.map((cate, idx)=>
		    
			<p key={idx}>Product's Name: <span>{cate.name}</span> | Category: {cate.category} | InStock: {cate.inStock}  | Price: {cate.price}$ </p>
		
		)}
	    </section>
        </>
    );
};


const mapStateToProps = state => ({
    productState: state.product
});

export default connect(mapStateToProps)(Products);


