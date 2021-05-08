import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './style'

const Cart = ({ cart }) => {
    const isEmpty = !cart.length;
    const classes = useStyles();
    console.log(cart);

    const EmptyCart = () => (
        <Typography variant="subtitle1"> You Have no items in your Shopping cart, start adding some!</Typography>
    )

    const FilledCart = () =>(
        <>
            <Grid container spacing={3}>
                {cart.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}> 
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>  
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {}</Typography>
                <div>  
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size='large' type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>   
        </>
    )

    if(!cart.length) return 'Loading ...';

    return (
        <Container>
            <div className={classes.toolbar}>
                <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
                {isEmpty ? <EmptyCart/> : <FilledCart />}
            </div>
        </Container>
    )
}

export default Cart
