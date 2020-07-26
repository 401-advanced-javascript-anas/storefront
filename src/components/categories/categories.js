import React from 'react';
import { connect } from 'react-redux';
import { CardContent, Button, Typography} from '@material-ui/core';
import { categoriesType } from '../../store/actions.js';
import { makeStyles } from '@material-ui/core/styles';
import './cat.scss';


const useStyles = makeStyles({

  
  btn:{
    maxWidth : 20,
    margin:5,
    padding:58,
  },
});


const Categories = (props) =>{
  const classes = useStyles();

  return(
    <section>
		
  
      <CardContent> 
        <Typography gutterBottom variant="h5" component="h2">
        		
        </Typography>
	         </CardContent>
      <ul id="cat-ul">
        {props.cateState.categories.map((val,idx)=>		
          <Button key={idx} onClick={()=>props.categoriesType(val.name)} className={classes.btn} variant="outlined" color="primary">
  	{val.name}
          </Button>,
        )}
      </ul>


		
    </section>
  );
};



const mapStateToProps = state => ({
  cateState: state.product,
});

const mapDispatchToProps = { categoriesType };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);