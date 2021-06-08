import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Checkbox, FormControlLabel
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(() => ({
  root: { 
    width: 1150,
    backgroundColor: 'rgb(240, 240, 240)',
  },
  inputRoot: {
    color: 'green',
    fontSize: 12,
    height: 120
  },
  paper: {
    padding: 2,
    textAlign: 'center',
    color: 'gray',
  },
  formControlLabel: {
    width: 120,
    fontFamily: 'sans-serif',
    fontSize: 12,
    alignSelf: "flex-start",
    paddingLeft: 11,
    textAlign: 'start',
    backgroundColor: ''
  },
  formControl: {
    width: 530,
    margin: 5,
    fontFamily: 'sans-serif',
    fontSize: 13,
    justifyContent: "flex-end",
    backgroundColor: ''
  }
}));

const styles = {
  textInput: {
    width: 450,
    marginLeft: 10
  },
  boxTitle: {
    fontSize: 16,
    marginTop: 0,
    color: 'green'
  },
  autocomlete: {
    marginLeft: 10,
    width: 400,
    backgroundColor: ''
  },
};

const InputTXT = ({ label, value, onChange, customstyle}) => {    
  return (
    <TextField
      size="small"
      fullWidth
      // helperText="Please specify the first name"
      label={label}
      InputProps={
        customstyle=== null 
          ?{ style: { fontSize: 13 } }
          :{ style: customstyle }
        }
      InputLabelProps={{ style: { fontSize: 13 } }}
      name="firstName"
      variant="outlined"
      onChange={onChange}
      required
      value={value}
    />
  );
};

const InputLabelCustom = ({ label, value, onChange, type, customstyle, multiline, rows, rowsMax}) => {    
  const classes = useStyles();
  return (
    <FormControlLabel
      fullWidth
      className={classes.formControl}
      label={<Typography className={classes.formControlLabel}>{label}</Typography>}
      style={{ backgroundColor: '' }}
      labelPlacement="start"
      control={(
        <TextField
          size="small"
          autoComplete="off"
          type={type}
          style={ 
          customstyle=== null 
            ?styles.textInput
            :customstyle
          }
          InputProps={{ style: { fontSize: 13 } }}
          // InputLabelProps={{ style: { fontSize: 14 } }}
          // label="CW"
          name="country"
          onChange={onChange}
          required
          value={value}
          variant="outlined"         
          multiline={multiline}
          rowsMax={rowsMax}
          rows={rows}
        />
      )}
    />
  );
};
const SelectItem = ({ value, label, data, onChange, customstyle}) => {    
  return (
    <TextField
      fullWidth
      size="small"
      InputProps={
        customstyle=== null 
          ?{ style: { fontSize: 13, fontWeight: 'bold' } }
          :{ style: customstyle }
        }
      InputLabelProps={{ style: { fontSize: 13 } }}
      label={label}
      name="state"
      onChange={onChange}
      required
      select
      SelectProps={{ native: true }}
      value={value}
      variant="outlined"
    >
      {data.map((option) => (
        <option
          key={option.value}
          value={option}
        >
          {option.label}
        </option>
      ))}
    </TextField>
  );
};


export { InputTXT, SelectItem, InputLabelCustom };
