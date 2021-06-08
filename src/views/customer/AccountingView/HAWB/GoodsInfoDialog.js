import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer, TableHead, TableRow,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Paper, Typography,
  Drawer, FormControlLabel
} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { InputLabelCustom } from 'src/components/custom/inputtxt';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
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
const length = [
  {
    value: 'cm',
    label: 'cm'
  },
  {
    value: 'm',
    label: 'm'
  },
  {
    value: 'ft',
    label: 'ft'
  }
];
const kg = [
  {
    value: 'kg',
    label: 'kg'
  },
  {
    value: 'lb',
    label: 'lg'
  }
];
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
    width: 85,
    fontFamily: 'sans-serif',
    fontSize: 12,
    justifyContent: "flex-end",
    paddingLeft: 5,
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
  },
  table: {
    minWidth: 650,
  },
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




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const GoodsInfoDialog = ({ className, type, item, ...rest }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [opendialog, setOpendialog] = React.useState(false);
  const [opensides, setopenside] = useState(false);

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
   //   onClick={setopenside(false)}
   //   onKeyDown={setopenside(false)}
    >
      <GoodsInfoDialog />
    </div>
  );

  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });
  // alert(item.customerId);

  const handleChangecheck = (event) => {
    setChecked(!checked);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const [valuez, setValuez] = useState("");

  return (
    <div className={classes.root} style={{ padding: 10 }}>
      <Button
        style={{ fontSize: 12, marginTop: 10, color: 'white', backgroundColor: '#3f51b5', paddingTop: 15 }}
        color="primary"
        variant="contained"
        onClick={() => {}}
      >
        SAVE
      </Button> 
      <Divider style={{ fontSize: 16, marginTop: 10, color: 'black' }} />
      <Grid container spacing={1} justify="center" alignItems="center">        
        <Grid item xs={6} style={{ backgroundColor: '', borderRadius: 4 }}>        
          <Grid item xs={12} style={{ height: 450, backgroundColor: '', paddingTop: 10, borderRadius: 4 }}>
            <h5 style={styles.boxTitle}>Goods Information</h5>

            <Grid item xs={12} style={{ border: '1px solid ', padding: 50, backgroundColor: 'white', height: 420, borderRadius: 4 }}>
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography className={classes.formControlLabel}>Pieces</Typography>}
                style={{ backgroundColor: '', paddingLeft: 0, paddingRight: 550 }}
                labelPlacement="start"
                control={(
                  <TextField
                    size="small"
                    style={{ width: 100 }}
                    InputProps={{ style: { fontSize: 13 } }}
                    // InputLabelProps={{ style: { fontSize: 14 } }}
                    // label="CW"
                    name="country"
                    onChange={handleChange}
                    requi
                    value="KE3612"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography className={classes.formControlLabel}>Gross Weight</Typography>}
                style={{ backgroundColor: '', paddingLeft: 0, paddingRight: 10 }}
                labelPlacement="start"
                control={(
                  <TextField
                    size="small"
                    style={{ width: 100 }}
                    InputProps={{ style: { fontSize: 13 } }}
                    // InputLabelProps={{ style: { fontSize: 14 } }}
                    // label="CW"
                    name="country"
                    onChange={handleChange}
                    requi
                    value="KE3612"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 10, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{ margin: 5, marginRight: 50 }}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {kg.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
                        
              <InputLabelCustom label={'Item number'} value={valuez} onChange={e => {setValuez(e.target.value);}} 
                customstyle={{ width: 200, marginLeft: 10 }} multiline={false} rowsMax={1} />              
              <InputLabelCustom label={'Chargeable Weight'} value={valuez} onChange={e => {setValuez(e.target.value);}} 
                customstyle={{ width: 100, marginLeft: 10 }} multiline={false} rowsMax={1} />              
              <InputLabelCustom label={'Rate/Charge'} value={valuez} onChange={e => {setValuez(e.target.value);}} 
                customstyle={{ width: 100, marginLeft: 10 }} multiline={false} rowsMax={1} />              
              <InputLabelCustom label={'Total'} value={valuez} onChange={e => {setValuez(e.target.value);}} 
                customstyle={{ width: 150, marginLeft: 10 }} multiline={false} rowsMax={1} />       
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} style={{ backgroundColor: '', borderRadius: 4 }}>    
          <Grid item xs={12} style={{ height: 450, backgroundColor: '', paddingTop: 10, borderRadius: 4 }}>
            <h5 style={styles.boxTitle}>Nature and quantity of goods</h5>
            <Grid item xs={12} style={{ border: '1px solid ', padding: 1, backgroundColor: 'white', height: 420, borderRadius: 4 }}>
              <InputLabelCustom label={'Nature and quantity'} value={valuez} onChange={e => {setValuez(e.target.value);}} 
                customstyle={{ width: 1200 }} multiline={true} rows={6} />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 10, width: 85, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Length&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Width&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Height&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>}
                style={{ backgroundColor: '', margin: 5, }}
                labelPlacement="start"
                control={(
                  <h6>&nbsp;</h6>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 10, width: 85, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pieces&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weight&nbsp;&nbsp;</Typography>}
                style={{ margin: 5, }}
                labelPlacement="start"
                control={(
                  <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                )}
              /> 
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 10, width: 100, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>}
                style={{ backgroundColor: '' }}
                labelPlacement="start"
                control={(
                  <TextField
                    size="small"
                    style={{ width: 50 }}
                    InputProps={{ style: { fontSize: 13 } }}
                    // InputLabelProps={{ style: { fontSize: 14 } }}
                    // label="CW"
                    name="country"
                    onChange={handleChange}
                    requi
                    value="KE3612"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {length.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="b"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {kg.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 10, width: 100, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>}
                style={{ backgroundColor: '' }}
                labelPlacement="start"
                control={(
                  <TextField
                    size="small"
                    style={{ width: 50 }}
                    InputProps={{ style: { fontSize: 13 } }}
                    // InputLabelProps={{ style: { fontSize: 14 } }}
                    // label="CW"
                    name="country"
                    onChange={handleChange}
                    requi
                    value="KE3612"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {length.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="b"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {kg.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 10, width: 100, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>Dimension</Typography>}
                style={{ backgroundColor: '' }}
                labelPlacement="start"
                control={(
                  <TextField
                    size="small"
                    style={{ width: 50 }}
                    InputProps={{ style: { fontSize: 13 } }}
                    // InputLabelProps={{ style: { fontSize: 14 } }}
                    // label="CW"
                    name="country"
                    onChange={handleChange}
                    requi
                    value="KE3612"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {length.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="b"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {kg.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 10, width: 100, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>}
                style={{ backgroundColor: '' }}
                labelPlacement="start"
                control={(
                  <TextField
                    size="small"
                    style={{ width: 50 }}
                    InputProps={{ style: { fontSize: 13 } }}
                    // InputLabelProps={{ style: { fontSize: 14 } }}
                    // label="CW"
                    name="country"
                    onChange={handleChange}
                    requi
                    value="KE3612"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {length.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="b"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {kg.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 10, width: 100, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>}
                style={{ backgroundColor: '' }}
                labelPlacement="start"
                control={(
                  <TextField
                    size="small"
                    style={{ width: 50 }}
                    InputProps={{ style: { fontSize: 13 } }}
                    // InputLabelProps={{ style: { fontSize: 14 } }}
                    // label="CW"
                    name="country"
                    onChange={handleChange}
                    requi
                    value="KE3612"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {length.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="b"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {kg.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 10, width: 100, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>}
                style={{ backgroundColor: '' }}
                labelPlacement="start"
                control={(
                  <TextField
                    size="small"
                    style={{ width: 50 }}
                    InputProps={{ style: { fontSize: 13 } }}
                    // InputLabelProps={{ style: { fontSize: 14 } }}
                    // label="CW"
                    name="country"
                    onChange={handleChange}
                    requi
                    value="KE3612"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {length.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="a"
                    variant="outlined"
                  />
                )}
              />
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 50 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="b"
                    variant="outlined"
                  />
                )}
              />
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 0, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>&nbsp;</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 70 }}
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {kg.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />             
            </Grid>
          </Grid>    
         

        </Grid>

        <Grid item xs={12} style={{ backgroundColor: '', borderRadius: 4 }}> 
          <Grid item xs={12} style={{ height: 150, backgroundColor: '', paddingTop: 10, borderRadius: 4 }}>
            <h5 style={styles.boxTitle}>Extra description</h5>
            <Grid item xs={12} style={{ border: '1px solid ', padding: 1, backgroundColor: 'white', height: 110, borderRadius: 4 }}>
              
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 100, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>Description</Typography>}
                style={{}}
                labelPlacement="start"
                control={(
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 900 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    onChange={{}}
                    required
                    value="b"
                    variant="outlined"
                    multiline
                    rows={5}
                  />
                )}
              />
                      
            </Grid>            
          </Grid> 
        </Grid>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {}}
        >
          Save
        </Button>
       

      </Grid>

      {//----------------------------------
      }

      
    </div>
  );
};

GoodsInfoDialog.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  item: PropTypes.object
};

export default GoodsInfoDialog;
