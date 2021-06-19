import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Drawer,
  Button,
  IconButton,
  makeStyles,
  Snackbar,
  Divider
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Page from 'src/components/Page';
import { GET, POST } from 'src/utils/api/method';
import { LinkApi } from 'src/utils/api/api-link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Results from './Results';
import AddCustomerView from '../AddCustomerView';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  backButton: {
    padding: theme.spacing(1)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers, setCustomers] = React.useState([]);
  const [editCustomer, setEditCustomer] = React.useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [actionSuccess, setActionSuccess] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [openDrawer, setOpenDrawer] = React.useState(false);

  // const handleOpenDrawer = open => event => {
  //   if (
  //     event.type === 'keydown' &&
  //     (event.key === 'Tab' || event.key === 'Shift')
  //   ) {
  //     return;
  //   }
  //   setOpenDrawer(open);
  // };

  const getCustomers = async () => {
    let res = await GET(LinkApi.customers_getall);
    console.log(res);
    if (res !== null) {
      setCustomers(res);
    }
  };

  const addCustomer = async customer => {
    console.log('addCustomer:');
    await POST(LinkApi.customer_add, customer)
      .then(response => {
        console.log(response);
        setActionSuccess(true);
        setSnackMessage('Thêm khách hàng thành công!');
        getCustomers();
        setOpenSnackbar(true);
      })
      .catch(error => {
        console.log(error);
        setActionSuccess(false);
        setSnackMessage('Lỗi, Thêm khách hàng không thành công!');
        setOpenSnackbar(true);
      });
  };

  const updateCustomer = async customer => {
    console.log('addCustomer:');
    await POST(LinkApi.customer_update, customer)
      .then(response => {
        console.log(response);
        setActionSuccess(true);
        setSnackMessage('Cập nhật khách hàng thành công!');
        getCustomers();
        setOpenSnackbar(true);
      })
      .catch(error => {
        console.log(error);
        setActionSuccess(false);
        setSnackMessage('Lỗi, Cập nhật khách hàng không thành công!');
        setOpenSnackbar(true);
      });
  };

  const deleteCustomer = async id => {
    await GET(LinkApi.customer_del + id)
      .then(response => {
        console.log(response);
        if (response === 'SUCCESS') {
          setActionSuccess(true);
          getCustomers();
          setSnackMessage('Xóa thành công!');
        } else {
          setActionSuccess(false);
          setSnackMessage('Lỗi, Xóa không thành công!');
        }
        setOpenSnackbar(true);
      })
      .catch(error => {
        console.log(error);
        setActionSuccess(false);
        setSnackMessage('Lỗi, Xóa không thành công!');
        setOpenSnackbar(true);
      });
  };

  useEffect(() => {
    getCustomers();
  }, []);

  const onDeleteCustomer = customer => {
    console.log('onDeleteCustomer');
    console.log(customer);
    deleteCustomer(customer.ID);
  };

  const onAddCustomer = customer => {
    console.log('onAddCustomer');
    console.log(customer);
    setOpenDrawer(false);
    if (customer.ID && customer.ID !== '') updateCustomer(customer);
    else addCustomer(customer);
  };

  const onEditCustomer = customer => {
    console.log('onEditCustomer');
    console.log(customer);
    setEditCustomer(customer);
    setOpenDrawer(true);
    // addCustomer(newCustomer);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Page className={classes.root} title="Customer">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={actionSuccess ? 'success' : 'error'}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
      <Container maxWidth={false}>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setEditCustomer({});
              setOpenDrawer(true);
            }}
          >
            Thêm khách hàng
          </Button>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={() => {
              setOpenDrawer(false);
            }}
          >
            <Box
              display="flex"
              justifyContent="flex-start"
              className={classes.backButton}
            >
              <IconButton
                onClick={() => {
                  setOpenDrawer(false);
                }}
                aria-label="back"
              >
                <ArrowBackIcon />
              </IconButton>
            </Box>
            <Divider light />
            <AddCustomerView
              editCustomer={editCustomer}
              onAddCustomer={customer => {
                onAddCustomer(customer);
              }}
            />
          </Drawer>
        </Box>
        <Box mt={3}>
          <Results
            data={customers}
            onDeleteCustomer={customer => {
              onDeleteCustomer(customer);
            }}
            onEditCustomer={customer => {
              onEditCustomer(customer);
            }}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
