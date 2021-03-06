import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  makeStyles,
  IconButton,
  Paper,
  Divider,
  Select,
  MenuItem,
  Grid
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
    //width:
  },
  info_view: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  table: {},
  payment_box: {
    marginLeft: 16,
    height: '100%',
    maxWidth: 350,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
}));

export default function NewOrderView({ onNewOrder }) {
  const classes = useStyles();
  const [oderProducts, setOderProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [emptyMessage, setEmptyMessage] = useState('');
  const [subTotal, setSubTotal] = useState(0);
  const [moneyPaid, setMoneyPaid] = useState(0);
  const [customer, setCustomer] = useState({
    ID: '',
    Code: '',
    Name: '',
    Phone: '',
    Address: ''
  });

  useEffect(() => {
    setOderProducts(products);
  }, []);

  const handleTextChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    setCustomer(prevState => ({
      ...prevState,
      Name: id === 'tf_name' ? value : prevState.Name,
      Phone: id === 'tf_phone' ? value : prevState.Phone,
      Address: id === 'tf_address' ? value : prevState.Address
    }));
  };

  const handleAddProduct = (quantity, code) => {
    let index = oderProducts.findIndex(obj => obj.code === code);
    setSubTotal(subTotal + oderProducts[index].price * quantity);
    oderProducts[index].quantity += quantity;
    setOderProducts([...oderProducts]);
  };

  const handleAddOrder = () => {
    onNewOder();
  };

  const emptyRows = oderProducts.filter(product => product.quantity === 0)
    .length;
  console.log('emptyRows: ' + emptyRows);
  return (
    <Box className={classes.root} flexDirection="row" display="flex">
      <Box mr={2}>
        <Typography variant="h6">Nh???p th??ng tin kh??ch h??ng</Typography>
        <Box
          className={classes.info_view}
          justifyContent="space_between"
          flexDirection="row"
          flexWrap="nowrap"
          display="flex"
        >
          <TextField
            component="div"
            display="inline"
            onChange={handleTextChange}
            fullWidth
            margin="normal"
            id="tf_name"
            label="H??? v?? t??n"
            type="text"
            autoComplete="FullName"
            variant="outlined"
            size="small"
            value={customer.Name}
          />
          <TextField
            component="div"
            display="inline"
            onChange={handleTextChange}
            fullWidth
            margin="normal"
            id="tf_phone"
            label="S??? ??i???n tho???i"
            type="tel"
            autoComplete="Phone"
            variant="outlined"
            size="small"
            value={customer.Phone}
          />
          <TextField
            component="div"
            display="inline"
            onChange={handleTextChange}
            fullWidth
            margin="normal"
            id="tf_address"
            label="?????a ch???"
            type="text"
            autoComplete="Address"
            variant="outlined"
            size="small"
            value={customer.Address}
          />
          <Typography variant="body1" color="error" gutterBottom>
            {emptyMessage}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">Nh???p th??ng tin ????n h??ng</Typography>
          <Box
            className={classes.info_view}
            justifyContent="flex_start"
            flexDirection="row"
            flexWrap="nowrap"
            display="flex"
          >
            <Autocomplete
              onChange={(event, value) => setSelectedProduct(value)}
              id="product_select"
              style={{ width: 300 }}
              options={products}
              autoHighlight
              getOptionLabel={option => option.name}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Ch???n s???n ph???m"
                  variant="outlined"
                  size="small"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password' // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <Button
              onClick={() => {
                if (selectedProduct && selectedProduct.code) {
                  handleAddProduct(1, selectedProduct.code);
                }
              }}
              variant="contained"
              color="primary"
            >
              Th??m
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="oder table">
              <TableHead>
                <TableRow>
                  <TableCell width="20">STT</TableCell>
                  <TableCell>T??n s???n ph???m</TableCell>
                  <TableCell align="right">S??? l?????ng</TableCell>
                  <TableCell align="right">????n gi??</TableCell>
                  <TableCell align="right">Th??nh ti???n</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {oderProducts
                  .filter(product => product.quantity > 0)
                  .map((product, index) => (
                    <TableRow>
                      <TableCell width="20" component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => {
                            handleAddProduct(-1, product.code);
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        {product.quantity}
                        <IconButton
                          onClick={() => {
                            handleAddProduct(1, product.code);
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        {product.price.toLocaleString('vi-VN', {
                          maximumFractionDigits: 2
                        })}{' '}
                        ??
                      </TableCell>
                      <TableCell align="right">
                        {(product.price * product.quantity).toLocaleString(
                          'vi-VN',
                          {
                            maximumFractionDigits: 2
                          }
                        )}{' '}
                        ??
                      </TableCell>
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 76 * emptyRows }}>
                    <TableCell colSpan={5} align="center">
                      {emptyRows === 4 && 'Ch??a c?? s???n ph???m n??o.'}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box p={1} justifyContent="flex-end">
          <Typography align="right" variant="subtitle2">
            T???m t??nh:{' '}
            {subTotal.toLocaleString('vi-VN', { maximumFractionDigits: 2 })} ??
          </Typography>
          <Typography align="right" variant="subtitle2">
            VAT(10%):{' '}
            {((subTotal * 10) / 100).toLocaleString('vi-VN', {
              maximumFractionDigits: 2
            })}{' '}
            ??
          </Typography>
          <Typography align="right" variant="subtitle2">
            Ph?? ship:{' '}
            {(subTotal > 0 ? 15000 : 0).toLocaleString('vi-VN', {
              maximumFractionDigits: 2
            })}{' '}
            ??
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            <Divider light width={200} height={3} orientation="horizontal" />
          </Box>
          <Typography align="right" variant="h5">
            T???ng ti???n:{' '}
            {(
              subTotal +
              (subTotal * 10) / 100 +
              (subTotal > 0 ? 15000 : 0)
            ).toLocaleString('vi-VN', { maximumFractionDigits: 2 })}{' '}
            ??
          </Typography>
        </Box>
      </Box>
      <Divider light width={3} orientation="vertical" />
      <Box className={classes.payment_box}>
        <Box>
          <Typography variant="h6">Thanh to??n</Typography>
          <Grid container spacing={1} style={{ marginTop: 16 }}>
            <Grid item xs={6}>
              <Typography align="left" variant="subtitle1">
                S??? ti???n thanh to??n
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="tf_pay"
                type="number"
                variant="outlined"
                size="small"
                margin="none"
                fullWidth
                value={moneyPaid}
                onChange={event => {
                  setMoneyPaid(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography align="left" variant="subtitle1">
                Lo???i thanh to??n
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Select
                defaultValue={0}
                variant="outlined"
                size="small"
                margin="none"
                fullWidth
              >
                <MenuItem value={0}>Ti???n m???t</MenuItem>
                <MenuItem value={1}>Chuy???n kho???n</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Typography align="left" variant="subtitle1">
                Kh??ch n???
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                align="right"
                variant="subtitle1"
                style={{ color: '#ff0000' }}
              >
                {(
                  subTotal +
                  (subTotal * 10) / 100 +
                  (subTotal > 0 ? 15000 : 0) -
                  moneyPaid
                ).toLocaleString('vi-VN', { maximumFractionDigits: 2 })}{' '}
                ??
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={onNewOrder} variant="contained" color="primary">
            L??u
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

NewOrderView.propTypes = {
  onNewOrder: PropTypes.func
};

const products = [
  { code: 1, name: 'H???p b??o t??? ph??c th???', quantity: 0, price: 300000 },
  { code: 2, name: 'H???p n???m an b??nh', quantity: 0, price: 550000 },
  { code: 3, name: 'H???p n???m an khang', quantity: 0, price: 980000 },
  { code: 4, name: 'H???p n???m y??u th????ng', quantity: 0, price: 250000 }
];
