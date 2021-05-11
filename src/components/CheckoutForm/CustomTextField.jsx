
import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
          name={name}
          render={({ field }) => (
            <TextField 
              label={label}
              required>  
            </TextField>
          )}
        control={control}
        name="select"
        defaultValue={10}
      />
    </Grid>
  );
}

export default FormInput;