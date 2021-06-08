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
  makeStyles, Grid, Container,
  Drawer
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import Budget from 'src/views/reports/DashboardView/Budget';
import TotalCustomers from 'src/views/reports/DashboardView/TotalCustomers';
import TasksProgress from 'src/views/reports/DashboardView/TasksProgress';
import TotalProfit from 'src/views/reports/DashboardView/TotalProfit';
import Tongthutrongngay from './Tongthutrongngay';
import Tongchitrongngay from './Tongchitrongngay';
import TongBanGiao from './Tongbangiao';
import Khoanchimoi from './Khoanchimoi';

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



const Toolbar = ({ className, handleAddOrderToindexJS, ...rest }) => {
  const classes = useStyles();
  const [opensides, setopenside] = useState(false);
  const [tongthu, settongthu] = useState(null);
  const [tongchi, settongchi] = useState(null);
  const [searchinput, setsearchinput] = useState(null);
  
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
   //   onClick={setopenside(false)}
   //   onKeyDown={setopenside(false)}
      //style={{ backgroundColor: 'green', alignItems: 'center' }}
    >
      <Khoanchimoi type={'newMAWB'} handleAddOrder={handleAddOrder} />
    </div>
  );
  const handleAddOrder = (item) => {
    handleAddOrderToindexJS(item);
  }
  const handleTongChi = (propTongChi) => {
    settongchi(propTongChi)
  }
  const handleTongThu = (propTongThu) => {
    settongthu(propTongThu)
  }
  const { data } = {
    "data": [
      {
        "id": "1234",
        "is_deleted": false,
        "name": "Sarah"
      },
      {
        "id": "3520",
        "is_deleted": true,
        "name": "Bobby"
      },
      {
        "id": "3520",
        "is_deleted": true,
        "name": "Sartah"
      }
    ]
  };
  
  const keyword = "Sar";
  const searchitem = () => {
    const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));
    console.log(filtered);
  }
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Drawer anchor="bottom" open={opensides} onClose={() => setopenside(false)}>
        {list('')}
      </Drawer>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Tongthutrongngay propDoanhThuTienMat={handleTongThu} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Tongchitrongngay propTongChiTienMat={handleTongChi} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TongBanGiao propTongBangiao={tongthu-tongchi} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Button
              style={{ marginLeft: 120, marginTop: 20 }}
              color="primary"
              variant="contained"
              //onClick={() => setopenside(true)}
              onClick={() => setopenside(true)}
            >
              Khoản chi mới
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  propTongChi: PropTypes.string
};

export default Toolbar;
