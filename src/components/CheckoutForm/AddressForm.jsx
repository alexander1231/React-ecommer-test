import React, {useState, useEffect} from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import {Link}  from 'react-router-dom';

import FormInput from './CustomTextField';

const AddressForm = ({checkoutToken, next}) => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')
    const methods = useForm();


    return (
        <>
          <Typography variant="h6" gutterBottom></Typography>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data)=>next({...data}))}>
              <Grid container spacing={3}>
                  <FormInput required name='firstName' label='First Name' />
                  <FormInput required name='lastName' label='Last Name' />
                  <FormInput required name='address1' label='Address' />
                  <FormInput required name='email' label='Email' />
                  <FormInput required name='city' label='City' />
                  <FormInput required name='zip' label='zip / Postal Code' />                  
                  {/*<Grid Item xs={12} sm={6}>
                    <InputLabel>Shipping Country</InputLabel>
                    <Select value='' fullWidth onChange=''>
                        <MenuItem key='' value=''>
                          Select Me
                        </MenuItem>
                    </Select>
                  </Grid>
                  <Grid Item xs={12} sm={6}>
                    <InputLabel>Shipping Subdivision</InputLabel>
                    <Select value='' fullWidth onChange=''>
                        <MenuItem key='' value=''>
                          Select Me
                        </MenuItem>
                    </Select>
                  </Grid>
                  <Grid Item xs={12} sm={6}>
                    <InputLabel>Shipping Options</InputLabel>
                    <Select value='' fullWidth onChange=''>
                        <MenuItem key='' value=''>
                          Select Me
                        </MenuItem>
                    </Select>
                  </Grid>*/}
                </Grid>
                <br/>
                <div style={{ display:'flex', justifyContent:'space-between'}}>
                    <Button component={Link} to="/cart" variant="outlined"> Back To Cart</Button>
                    <Button type="submit" variant="contained" color="primary"> Next</Button>
                </div>
            </form>
          </FormProvider>
        </>
    )
}

export default AddressForm;
