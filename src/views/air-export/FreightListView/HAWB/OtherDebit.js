import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
  Grid,
  makeStyles
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const columns = [
  {
    field: 'fullName',
    headerName: 'Payee/Payer',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) => `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
  { field: 'GW', headerName: 'GW', width: 90, },
  { field: 'Quantity', headerName: 'Qty', width: 70, },
  { field: 'Unit', headerName: 'Unit', width: 80 },
  { field: 'Price', headerName: 'Price', width: 110 },
  {
    field: 'age',
    headerName: 'Cur',
    type: 'number',
    width: 70,
  },
  { field: 'Tax', headerName: 'Tax', width: 70 },
  { field: 'Total', headerName: 'Total', width: 110 },
  { field: 'CLL', headerName: 'KB', width: 70 },
  { field: 'Note', headerName: 'Description', width: 80 },
  { field: 'OBH', headerName: 'OBH', width: 110 },
  { field: 'Account Reference', headerName: 'Account Reference', width: 170 },
  { field: 'Docs', headerName: 'Docs', width: 110 }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 'USD' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'green',
    fontSize: 14
  },
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const handleChange = (event) => {

};

const states = [
  {
    value: 'alabama',
    label: 'Kgs'
  },
  {
    value: 'new-york',
    label: 'BAG'
  },
  {
    value: 'san-francisco',
    label: 'Litre'
  }
];

export default function OtherDebit() {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChangecheck = (event) => {
    setChecked(!checked);
  };

  return (
    <div style={{ height: 400, width: '100%', justifyContent: 'center' }}>
      <Grid
        container
        spacing={3}
        style={{ paddingTop: 5, paddingLeft: 20, backgroundColor: 'white', borderRadius: 4, alignItems: 'center', flexDirection: 'row' }}
      >
        <Grid item md={2} xs={12}>
          <Autocomplete
            size="small"
            id="combo-box-demo"
            classes={classes}
            options={rows}
            getOptionLabel={(option) => option.lastName}
            style={{ }}
            renderInput={(params) => <TextField {...params} label="Payee" InputLabelProps={{ style: { fontSize: 14 } }} variant="outlined" />}
          />
        </Grid>
        <Grid item md={1} xs={12}>
          <TextField
            fullWidth
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            // helperText="Please specify the first name"
            label="Quantity"
            name="firstName"
            onChange={handleChange}
            required
            value="5"
            variant="outlined"
          />
        </Grid>
        <Grid item md={1} xs={12}>
          <TextField
            fullWidth
            size="small"
            label="Unit"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            name="state"
            onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            value={values.state}
            variant="outlined"
          >
            {states.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item md={1} xs={12}>
          <TextField
            fullWidth
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            label="Currency"
            name="state"
            onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            value={values.state}
            variant="outlined"
          >
            {states.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>

        <Grid item md={1} xs={12}>
          <TextField
            fullWidth
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            // helperText="Please specify the first name"
            label="Price"
            name="firstName"
            onChange={handleChange}
            required
            value="5"
            variant="outlined"
          />
        </Grid>
        <Grid item md={1} xs={12}>
          <TextField
            fullWidth
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            // helperText="Please specify the first name"
            label="Tax"
            name="firstName"
            onChange={handleChange}
            required
            value="5"
            variant="outlined"
          />
        </Grid>
        <Grid item md={1} xs={12}>
          <TextField
            fullWidth
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            // helperText="Please specify the first name"
            label="Description"
            name="firstName"
            onChange={handleChange}
            required
            value="5"
            variant="outlined"
          />
        </Grid>
        <Grid item md={2} xs={12}>
          <Autocomplete
            id="combo-box-demo"
            size="small"
            classes={classes}
            options={rows}
            getOptionLabel={(option) => option.lastName}
            style={{ }}
            renderInput={(params) => <TextField {...params} label="Thu hộ (OBH)" variant="outlined" />}
          />
        </Grid>
        <Grid item md={1} xs={12}>
          <TextField
            fullWidth
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            // helperText="Please specify the first name"
            label="Account Ref"
            name="firstName"
            onChange={handleChange}
            required
            value="5"
            variant="outlined"
          />
        </Grid>
        <Grid item md={1} xs={12}>
          <TextField
            fullWidth
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            // helperText="Please specify the first name"
            label="Docs"
            name="firstName"
            onChange={handleChange}
            required
            value="5"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <div item md={1} span={4} xs={12} style={{ flexDirection: 'column', alignSelf: 'center' }}>
        <FormControlLabel
          size="large"
          control={<Checkbox checked={false} onChange={handleChangecheck} name="checkedA" />}
          label="Gross Weight"
        />
        <FormControlLabel
          size="small"
          control={<Checkbox checked={false} onChange={handleChangecheck} name="checkedA" />}
          label="No Invoice"
        />
        <FormControlLabel
          size="small"
          control={<Checkbox checked={false} onChange={handleChangecheck} name="checkedA" />}
          label="KB"
        />
      </div>
      <Box
        display="flex"
        justifyContent="center"
      >
        <h4 style={{ marginBottom: 10, marginRight: 10, alignSelf: 'center' }}>Total 1024$</h4>
        <Button
          color="primary"
          variant="contained"
          alignSelf="center"
          style={{ marginBottom: 10, alignSelf: 'center' }}
          onClick={() => {}}
        >
          Add new Fee
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
      >
        <Button
          color="primary"
          variant="contained"
          alignSelf="center"
          style={{ marginBottom: 10, alignSelf: 'center' }}
          onClick={() => {}}
        >
          Delete
        </Button>
      </Box>
      <DataGrid disableColumnMenu options={{ rowStyle: { fontSize: 1 } }} style={{ backgroundColor: 'gray' }} rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
