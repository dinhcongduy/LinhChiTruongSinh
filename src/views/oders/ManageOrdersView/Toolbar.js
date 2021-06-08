import React, { useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Drawer,
  Typography,
  FormControlLabel
} from '@material-ui/core';
import moment from 'moment';
import { Search as SearchIcon } from 'react-feather';
import MAWB from './MAWB';

let Connection = require('tedious').Connection;

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));



const Toolbar = ({ className, handleAddOrderToindexJS, handleSearch, ...rest }) => {
  const classes = useStyles();
  const [opensides, setopenside] = useState(false);
  const [searchDate, setsearchDate] = useState('');
  
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
   //   onClick={setopenside(false)}
   //   onKeyDown={setopenside(false)}
    >
      <MAWB type={'newMAWB'} handleAddOrder={handleAddOrder} />
    </div>
  );
  const handleAddOrder = (item) => {
    handleAddOrderToindexJS(item);
  }



  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Drawer anchor="right" open={opensides} onClose={() => setopenside(false)}>
        {list('')}
      </Drawer>
      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Typography style={{ fontSize: 20, fontWeight: 'bold', color: 'green'}}>&nbsp;</Typography>
        <Button
          color="primary"
          variant="contained"
          //onClick={() => setopenside(true)}
          onClick={() => setopenside(true)}
        >
          Thêm đơn hàng
        </Button>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
