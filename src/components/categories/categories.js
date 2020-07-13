import React from 'react';
import { connect } from 'react-redux';

import { categoriesType } from '../../store/actions.js';

const Categories = (props) =>{

    return(
        <section className="cate">
            <ul>
                {props.cateState.categories.map( (data, idx) => 
                    <li key={idx} onClick={()=> props.categoriesType(data.name)} > {data.name}</li>
                )}
            </ul>
            
        </section>
    )
}

const mapStateToProps = state => ({
    cateState: state.product
});

const mapDispatchToProps = { categoriesType };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);