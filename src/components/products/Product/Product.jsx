import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typograpgy, IconBotton, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'



import useStyles from './styles';

const Product = ({product, onAddToCart}) => {
    const classes = useStyles();
    return (
       <Card className={classes.root}>
           <CardMedia className={classes.media} image={product.url_img} title={product.name}/>
           <CardContent>
               <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>   
                    <Typography variant="h5" gutterBottom>
                        {product.price}
                    </Typography>   
               </div>
               <Typography variant="body2" color="textSecondary">{product.description}</Typography>
           </CardContent>
           <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id_product, 1)}>
                    <AddShoppingCart />
                </IconButton>
           </CardActions>
       </Card>
    )
}

export default Product
