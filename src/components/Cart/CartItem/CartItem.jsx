import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';

import useStyles from './style';

const CartItem = ({item, onUpdateCartQty, onRemoveCart}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.url_img} alt={item.name} className={classes.media}></CardMedia>
            <CardContent className={classes.CardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.name}</Typography>

            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id_cart, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id_cart, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={()=>onRemoveCart(item.id_cart)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
