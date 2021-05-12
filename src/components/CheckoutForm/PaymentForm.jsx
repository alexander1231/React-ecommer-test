import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStrip} from '@stripe/stripe-js';

import Review from './Review'

const PaymentForm = ({shippingData, nextStep2 , backStep}) => {


    const handleSubmit  = (event) => {
        event.preventDefault();
        nextStep2();
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>            
            <form onSubmit={(e) => handleSubmit(e)}>            
                <Button type="submit" variant="contained"  color="primary">
                    Pay 
                </Button>                
            </form>                      
        </div>
    )
}

export default PaymentForm
