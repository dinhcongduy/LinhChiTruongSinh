import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  List,
  ListItem,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import { POST } from 'src/utils/api/method';
import { LinkApi } from 'src/utils/api/api-link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    width: 400
  }
}));

export default function AddCustomerView({ onAddCustomer, editCustomer }) {
  const classes = useStyles();
  const [customer, setCustomer] = useState({
    ID: '',
    Code: '',
    Name: '',
    Phone: '',
    Address: ''
  });
  const [emptyMessage, setEmptyMessage] = useState('');

  useEffect(() => {
    if (editCustomer) setCustomer(editCustomer);
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

  const handleAddCustomer = () => {
    console.log(customer);
    if (
      customer.Name === '' ||
      customer.Phone === '' ||
      customer.Address === ''
    ) {
      setEmptyMessage('*Vui lòng nhập đầy thủ thông tin!');
      return;
    }
    setEmptyMessage('');
    onAddCustomer(customer);
    setCustomer(prevState => ({
      ...prevState,
      Name: '',
      Phone: '',
      Address: ''
    }));
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" gutterBottom>
        Nhập thông tin khách hàng
      </Typography>
      <List component="nav" aria-label="add customer listview">
        <ListItem>
          <TextField
            onChange={handleTextChange}
            fullWidth
            margin="normal"
            id="tf_name"
            label="Họ và tên"
            type="text"
            autoComplete="FullName"
            variant="outlined"
            size="small"
            value={customer.Name}
          />
        </ListItem>
        <ListItem>
          <TextField
            onChange={handleTextChange}
            fullWidth
            margin="normal"
            id="tf_phone"
            label="Số điện thoại"
            type="tel"
            autoComplete="Phone"
            variant="outlined"
            size="small"
            value={customer.Phone}
          />
        </ListItem>
        <ListItem>
          <TextField
            onChange={handleTextChange}
            fullWidth
            margin="normal"
            id="tf_address"
            label="Địa chỉ"
            type="text"
            autoComplete="Address"
            variant="outlined"
            size="small"
            value={customer.Address}
          />
        </ListItem>
      </List>
      <Typography variant="body1" color="error" gutterBottom>
        {emptyMessage}
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={handleAddCustomer} variant="contained" color="primary">
          {editCustomer.ID && editCustomer.ID !== '' ? 'Cập nhật' : 'Thêm'}
        </Button>
      </Box>
    </Box>
  );
}

AddCustomerView.propTypes = {
  onAddCustomer: PropTypes.func,
  editCustomer: PropTypes.object
};
