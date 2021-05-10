import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './style'
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({ cart, handleEmptyCart, handleRemoveCart, handleUpdateCartQty}) => {
    const isEmpty = !cart.length;
    const classes = useStyles();
    console.log(cart);

    const EmptyCart = () => (
        <Typography variant="subtitle1"> You Have no items in your Shopping cart,
            <Link to="/" className={classes.link}>start adding some</Link>
         </Typography>
    )

    const FilledCart = () =>(
        <>
            <Grid container spacing={3}>
                {cart.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}> 
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveCart={handleRemoveCart}></CartItem>
                    </Grid>
                ))}
            </Grid>  
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {}</Typography>
                <div>  
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button omponent={Link} to="/checkout" className={classes.checkoutButton} size='large' type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>   
        </>
    )

    if(!cart.length) return 'Loading ...';

    return (
        <Container>
            <div className={classes.toolbar}>
                <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
                {isEmpty ? <EmptyCart/> : <FilledCart />}
            </div>
        </Container>
    )
}

export default Cart
