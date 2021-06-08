import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Checkbox, FormControlLabel
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const airline = [
  { title: 'TK', year: 2008 },
  { title: 'EK', year: 2008 },
  { title: 'VN', year: 2008 },
  { title: 'KA', year: 1957 },
];
const top100Films = [
  { title: 'BIEN XANH FASHION SEW COMPANY LIMITED  29/22/7 NGUYEN VAN QUA STREET, QUARTER 6, TAN HUNG THUAN WARD, 12 DISTRICT, HOCHIMINH CITY, VIETNAM TEL: 84-8-6256 9774 FAX: 84-8-6256 97712121', year: 1972 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'XANH FASHION SEW COMPANY LIMITED  29/22/7 NGUYEN VAN QUA STREET, QUARTER 6, TAN HUNG THUBIEN XANH FASHION SEW COMPANY LIMITED  29/22/7 NGUYEN VAN QUA STREET, QUARTER 6, TAN HUNG THUAN WARD, 12 DISTRICT, HOCHIMINH CITY, VIETNAM TEL: 84-8-6256 9774 FAX: 84-8-6256 97712121AN WARD, 12 DISTRICT, HOCHIMINH CITY, VIETNAM TEL: 84-8-6256 9774 FAX: 84-8-6256 97712121 BIEN XANH FASHION SEW COMPANY LIMITED  29/22/7 NGUYEN VAN QUA STREET, QUARTER 6, TAN HUNG THUAN WARD, 12 DISTRICT, HOCHIMINH CITY, VIETNAM TEL: 84-8-6256 9774 FAX: 84-8-6256 97712121', year: 1974 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const useStyles = makeStyles(() => ({
  inputRoot: {
    color: 'green',
    fontSize: 12,
    height: 120
  },
  root: {},
  resize: {
    fontSize: 13
  },
  label: {
    fontSize: 4
  }
}));
const useStyles1 = makeStyles(() => ({
  inputRoot: {
    color: 'green',
    fontSize: 12
  },
  root: {},
  resize: {
    fontSize: 13
  },
  label: {
    fontSize: 4
  }
}));
const HAWB = ({ mawb, save, className, ...rest }) => {
  const classes = useStyles();
  const classes1 = useStyles1();
  const [checked, setChecked] = React.useState(false);
  const [flightNo, setflightNo] = React.useState('');
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  if (save === true) {
    alert(mawb);
  }

  const handleChangecheck = (event) => {
    setChecked(!checked);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card style={{ backgroundColor: 'white', padding: 5, flexDirection: 'row' }}>
        <Grid
          container
          spacing={3}
          style={{ paddingTop: 5, paddingLeft: 20, backgroundColor: 'rgb(247, 247, 247)', borderRadius: 4, alignItems: 'center', flexDirection: 'row' }}
        >
          <Grid item md={2} xs={12}>
            <TextField
              size="small"
              fullWidth
              // helperText="Please specify the first name"
              label="MAWB No."
              InputProps={{ style: { fontSize: 13, fontWeight: 'bold' } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              name="firstName"
              variant="outlined"
              onChange={(value) => setflightNo(value)}
              required
              value={mawb}
            />
          </Grid>
          <Grid item md={2} xs={12}>
            <TextField
              size="small"
              fullWidth
              // helperText="Please specify the first name"
              label="HAWB No."
              InputProps={{ style: { fontSize: 13, fontWeight: 'bold' } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              name="firstName"
              variant="outlined"
              onChange={(value) => setflightNo(value)}
              required
              value={flightNo}
            />
          </Grid>
          <Grid item md={2} xs={12}>
            <TextField
              size="small"
              fullWidth
              // helperText="Please specify the first name"
              label="HAWB Type"
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              name="firstName"
              variant="outlined"
              onChange={(value) => setflightNo(value)}
              required
              value={flightNo}
            />
          </Grid>
          <Grid item md={2} xs={12}>
            <TextField
              size="small"
              fullWidth
              // helperText="Please specify the first name"
              label="Issued By"
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              name="firstName"
              variant="outlined"
              onChange={(value) => setflightNo(value)}
              required
              value={flightNo}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              size="small"
              fullWidth
              // helperText="Please specify the first name"
              label="Handling Information"
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              name="firstName"
              variant="outlined"
              onChange={(value) => setflightNo(value)}
              required
              value={flightNo}
            />
          </Grid>
        </Grid>
      </Card>
      <h4 style={{ marginTop: 5, marginLeft: 5, color: 'green' }}>GENERAL: </h4>
      <Card style={{ backgroundColor: '#efeff5', padding: 5 }}>
        <Grid
          container
          spacing={3}
          style={{ backgroundColor: '#efeff5', borderRadius: 4, alignItems: 'center', flexDirection: 'row', margin: 5 }}
        >
          <Grid
            md={5}
            container
            spacing={3}
            style={{ backgroundColor: 'white', borderRadius: 4, alignItems: 'center', flexDirection: 'row', margin: 5 }}
          >
            <Grid item md={12} xs={12}>
              <Autocomplete
                id="combo-box-demo"
                classes={classes}
                ListboxProps={{ style: { maxHeight: '150px', border: '1px solid grey', backgroundColor: '#efeff5' } }}
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ borderWidth: 1, borderColor: 'grey' }}
                renderInput={(params) => <TextField {...params} multiline rowsMax={6} label="Shipper" variant="outlined" />}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Autocomplete
                id="combo-box-demo"
                classes={classes}
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ borderWidth: 1, borderColor: 'red' }}
                renderInput={(params) => <TextField {...params} multiline rowsMax={6} label="Consignee" variant="outlined" />}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Autocomplete
                id="combo-box-demo"
                classes={classes}
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ borderWidth: 1, borderColor: 'grey' }}
                renderInput={(params) => <TextField {...params} multiline rowsMax={6} label="Notify" variant="outlined" />}
              />
            </Grid>
          </Grid>
          <Grid
            md={6}
            container
            spacing={2}
            style={{ backgroundColor: 'white', borderRadius: 4, alignItems: 'center', flexDirection: 'row', margin: 5 }}
          >
            <Grid item md={2} xs={12}>
              <Autocomplete
                size="small"
                classes={classes1}
                id="combo-box-demo"
                options={airline}
                getOptionLabel={(option) => option.title}
                style={{ }}
                renderInput={(params) => <TextField {...params} InputLabelProps={{ style: { fontSize: 12 } }} label="Airline" variant="outlined" />}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Flight No."
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                label="Airport of Departure"
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
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                label="To"
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
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                label="By"
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
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                label="To"
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
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                label="By"
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
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                label="To"
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
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                label="By"
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
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                label="Airport of Destination"
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
            <Grid item md={2} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Connecting Flight"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Date"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid
              md={12}
              container
              spacing={2}
              style={{ backgroundColor: 'white', borderTop: 1, borderRadius: 4, alignItems: 'center', flexDirection: 'row', margin: 5, marginTop: 20, marginBottom: 20 }}
            >
              <Grid item md={12} xs={12}>
                <Autocomplete
                  id="combo-box-demo"
                  classes={classes1}
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  style={{ }}
                  renderInput={(params) => <TextField {...params} multiline rowsMax={6} label="Agent" variant="outlined" />}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Agent's IATA code"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  name="firstName"
                  variant="outlined"
                  onChange={(value) => setflightNo(value)}
                  required
                  value={flightNo}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Account No."
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  name="firstName"
                  variant="outlined"
                  onChange={(value) => setflightNo(value)}
                  required
                  value={flightNo}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
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
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  label="CHGS"
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
              <Grid item md={3} xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  label="WT/VAL"
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
              <Grid item md={3} xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  label="Other"
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
              <Grid item md={2} xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Ddr"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  name="firstName"
                  variant="outlined"
                  onChange={(value) => setflightNo(value)}
                  required
                  value={flightNo}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Ddr"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  name="firstName"
                  variant="outlined"
                  onChange={(value) => setflightNo(value)}
                  required
                  value={flightNo}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Insurance Amount"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  name="firstName"
                  variant="outlined"
                  onChange={(value) => setflightNo(value)}
                  required
                  value={flightNo}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Reference Number"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  name="firstName"
                  variant="outlined"
                  onChange={(value) => setflightNo(value)}
                  required
                  value={flightNo}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Other Shipping Information"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  name="firstName"
                  variant="outlined"
                  onChange={(value) => setflightNo(value)}
                  required
                  value={flightNo}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Connecting Flight"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  name="firstName"
                  variant="outlined"
                  onChange={(value) => setflightNo(value)}
                  required
                  value={flightNo}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  // helperText="Please specify the first name"
                  label="Date"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  name="firstName"
                  variant="outlined"
                  onChange={(value) => setflightNo(value)}
                  required
                  value={flightNo}
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  InputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  label="SCI"
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
            </Grid>
          </Grid>
          <h4 style={{ marginTop: 5, marginLeft: 5, color: 'green' }}>GOODS INFORMATION: </h4>
          <Grid
            md={12}
            container
            spacing={2}
            style={{ backgroundColor: 'white', borderRadius: 4, alignItems: 'center', flexDirection: 'row', margin: 5 }}
          >
            <Grid item md={3} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Nature and Quantity of Goods (include Dimension or Volume)"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="No. of Pieces"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="GW"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="CW"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Kg lb"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Class Rate"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Commodity Item No."
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Rate/Charge"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <FormControlLabel
                control={<Checkbox checked={false} size="small" onChange={handleChangecheck} name="checkedA" />}
                label="Min"
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Total"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Dimension or Volume CW Cal."
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                size="small"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                label="Sea-Air Charge"
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
            <Grid item md={3} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Shipping Mark"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
          </Grid>
          <h4 style={{ marginTop: 5, marginLeft: 5, color: 'green' }}>PREPAID: </h4>
          <Grid
            label={'KKK'}
            md={12}
            container
            spacing={2}
            style={{ backgroundColor: 'white', borderRadius: 4, alignItems: 'center', flexDirection: 'row', margin: 5 }}
          >
            <Grid item md={3} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Weight Charge"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Valuation Charge"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Tax"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <Autocomplete
                multiple
                size="small"
                classes={classes1}
                id="combo-box-demo"
                options={airline}
                getOptionLabel={(option) => option.title}
                style={{ }}
                renderInput={(params) => <TextField {...params} InputLabelProps={{ style: { fontSize: 12 } }} label="Other Charge" variant="outlined" />}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Total Due Agent"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Total Due Carrier"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Total"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
          </Grid>
          <h4 style={{ marginTop: 5, marginLeft: 5, color: 'green' }}>COLLECT: </h4>
          <Grid
            label={'KKK'}
            md={12}
            container
            spacing={2}
            style={{ backgroundColor: 'white', borderRadius: 4, alignItems: 'center', flexDirection: 'row', margin: 5 }}
          >
            <Grid item md={3} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Weight Charge"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Valuation Charge"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Tax"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <Autocomplete
                multiple
                size="small"
                classes={classes1}
                id="combo-box-demo"
                options={airline}
                getOptionLabel={(option) => option.title}
                style={{ }}
                renderInput={(params) => <TextField {...params} InputLabelProps={{ style: { fontSize: 12 } }} label="Other Charge" variant="outlined" />}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Total Due Agent"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Total Due Carrier"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Total"
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="firstName"
                variant="outlined"
                onChange={(value) => setflightNo(value)}
                required
                value={flightNo}
              />
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <CardContent style={{ marginTop: 10 }}>
          <Grid
            container
            spacing={3}
          >
            <Grid item md={2} xs={12}>
              <TextField
                size="small"
                fullWidth
                // helperText="Please specify the first name"
                label="Place of Issue"
                name="firstName"
                variant="outlined"
                onChange={handleChange}
                required
                value="180-786654454"
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                size="small"
                fullWidth
                helperText="Please specify the first name"
                label="Date of Issued"
                name="firstName"
                variant="outlined"
                onChange={handleChange}
                required
                value="180-786654454"
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                size="small"
                fullWidth
                helperText="Please specify the first name"
                label="Currency Conversion Rate"
                name="firstName"
                variant="outlined"
                onChange={handleChange}
                required
                value="180-786654454"
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                size="small"
                fullWidth
                helperText="Please specify the first name"
                label="CC Charge at Destination"
                name="firstName"
                variant="outlined"
                onChange={handleChange}
                required
                value="180-786654454"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};

HAWB.propTypes = {
  className: PropTypes.string,
  mawb: PropTypes.string,
  save: PropTypes.bool
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
    margin: 100,
  },
  resize: {
    fontSize: 50
  },
};

export default HAWB;
