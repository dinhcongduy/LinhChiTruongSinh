import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { GET } from 'src/utils/api/method';
import { LinkApi } from 'src/utils/api/api-link';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.green[900]
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  }
}));

const Tongthutrongngay = ({ propDoanhThuTienMat, className, ...rest }) => {
  const classes = useStyles();
  const [thungan, setthungan] = useState('');
  const [doanhthu, setdoanhthu] = useState('');
  const [tongthu, settongthu] = useState('');
  const [doanhthutienmat, setdoanhthutienmat] = useState([]);

  useEffect(() => {    
    getItemPayment();
  }, []); 
  const getItemPayment = async () => {
    await GET(LinkApi.order_getTongDoanhThuNgay)
    .then(respon => {
      //console.log("OK", respon) 
      if (respon.length>0) {
        for (let i=0; i<respon.length; i++) {
          if (respon[i].SaleDate.substring(0, 10)===moment(new Date(), 'YYYY-MM-DD').format().substring(0, 10)) {
            setdoanhthu(respon[i].TongDoanhThu)
          }
        }      
      }
      //propTongThu(respon[0].TongDoanhThu)
      //console.log("OK", respon) 
    });
    await GET(LinkApi.order_GetTongThuTienMatNgay)
    .then(respon => { 
      if (respon.length>0) { 
      setdoanhthutienmat(respon[0].TongDoanhThu)
      propDoanhThuTienMat(respon[0].TongDoanhThu)
      }
      //console.log("OK", respon) 
    });
    await GET(LinkApi.order_GetTongThuNgay)
    .then(respon => {  
      if (respon.length>0) {
      settongthu(respon[0].TongDoanhThu)
      }
      //propTongThu(respon[0].TongDoanhThu)
      //console.log("OK", respon) 
    });
  } 

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Doanh thu hôm nay
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {doanhthu.toLocaleString()} đ 
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
          <Typography
            style={{fontSize: 15, color: 'black', marginRight: 30}}
            >
            Tổng tiền đã nhận : {tongthu.toLocaleString()} 
          </Typography>
          <Typography
            //color="grey"
            //variant="h6"
            style={{fontSize: 13, color: 'grey'}}
          >
            Tiền mặt : {doanhthutienmat.toLocaleString()} 
          </Typography>
          <Typography
            style={{fontSize: 13, color: 'grey'}}
            >
            Chuyển khoản : {Number(tongthu- doanhthutienmat).toLocaleString()} 
          </Typography>
          <Typography
            color="textPrimary"
            variant="h6"
          >
            Khách nợ : {Number(doanhthu- tongthu).toLocaleString()} 
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

Tongthutrongngay.propTypes = {
  className: PropTypes.string,
  propDoanhThuTienMat: PropTypes.string
};

export default Tongthutrongngay;
