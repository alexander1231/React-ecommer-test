import React, { useState, useEffect } from 'react'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

import useStyles from './style'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm'

const steps = ['Shipping address', 'Payment details'];


const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({})
    const classes = useStyles();


    const Confirmation = () =>(
        <div>
            Confirmation
        </div>
    )

    const nextstep = () =>setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backstep = () =>setActiveStep((prevActiveStep) => prevActiveStep + 1)

    const next = (data) => {
        console.log(activeStep);
        setShippingData(data);

        nextstep();
    }

    const next2 = () => {
        nextstep();
    }

    const Form = () => (activeStep === 0
        ? <AddressForm  checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm  shippingData={shippingData} nextStep2={next2} backStep={backstep}/>);


    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> :  <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout
