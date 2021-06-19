import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ManageOrdersView = () => {
  const classes = useStyles();
  const [customers] = useState(data);
  const [neworeder, setNewOrder] = useState(null);
  const [searchDate, setsearchDate] = useState('');
  const [isSear, setisSear] = useState(false);

  const handleAddOrderToindexJS = (item) => {
    setNewOrder(item);
  }

  const handleSearch = (isSearch, date) => {
    setisSear(isSearch)
    setsearchDate(date)
    };

  return (
    <Page
      className={classes.root}
      title="Quản lý đơn hàng"
    >
      <Container maxWidth={false}>
        <Toolbar handleAddOrderToindexJS={handleAddOrderToindexJS} handleSearch={handleSearch} />
        <Box mt={3}>
          <Results customers={customers} newaddedOrder={neworeder} />
        </Box>
      </Container>
    </Page>
  );
};

export default ManageOrdersView;
