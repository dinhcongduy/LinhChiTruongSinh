import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Avatar,
  Card,
  CardContent,
  Grid, Box,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { GET } from 'src/utils/api/method';
import { LinkApi } from 'src/utils/api/api-link';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  }
}));

const Tongchitrongngay = ({ propTongChiTienMat, className, ...rest }) => {
  const classes = useStyles();
  const [tongchi, settongchi] = useState('0');
  const [chitienmatCongTy, setchitienmatCongTy] = useState('0');

  useEffect(() => {    
    getItemPayment();
  }, []); 
  const getItemPayment = async () => {
    await GET(LinkApi.chi_getTongChiNgay)
    .then(respon => {  
      if (respon.length>0) {
        for (let i=0; i<respon.length; i++) {
          if (respon[i].SaleDate.substring(0, 10)===moment(new Date(), 'YYYY-MM-DD').format().substring(0, 10)) {
          settongchi(respon[0].TongDoanhThu)
      }}}
      //console.log("OK", respon) 
    });
    await GET(LinkApi.chi_getTongChiNgayTienMatCongTy)
    .then(respon => {  
      console.log("OK", respon) 
      if (respon.length>0) {
        for (let i=0; i<respon.length; i++) {
          if (respon[i].SaleDate.substring(0, 10)===moment(new Date(), 'YYYY-MM-DD').format().substring(0, 10)) {
            setchitienmatCongTy(respon[i].TongDoanhThu);
            propTongChiTienMat(respon[i].TongDoanhThu);
          }
        }  
      //setchitienmatCongTy(respon[0].TongDoanhThu);
      //propTongChiTienMat(respon[0].TongDoanhThu);
      }
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
              T???ng chi h??m nay
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {tongchi.toLocaleString()} ??
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
          <Typography
            color="textPrimary"
            variant="h6"
          >
            Ti???n m???t (C??ng ty chi): {chitienmatCongTy} ??
          </Typography><Typography
            color="textPrimary"
            variant="h6"
          >
            Ti???n m???t (Gi??m ?????c chi): {tongchi-chitienmatCongTy} ??
          </Typography>
          
        </Grid>
      </CardContent>
    </Card>
  );
};

Tongchitrongngay.propTypes = {
  className: PropTypes.string,
  propTongChiTienMat: PropTypes.string
};

export default Tongchitrongngay;
