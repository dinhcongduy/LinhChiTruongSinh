import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.indigo[900]
  },
  differenceValue: {
    color: colors.indigo[900],
    marginRight: theme.spacing(1)
  }
}));

const TotalProfit = ({ className, ...rest }) => {
  const classes = useStyles();
  const [thungan, setthungan] = useState('');

  useEffect(() => {    
    getItemPayment();
  }, []); 
  const getItemPayment = async () => {
    await GET(LinkApi.order_getByOrderId)
      .then(respon => {        
        console.log("OK", respon) 
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
              Tổng lợi nhuận tháng này
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              150,000,000 đ
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
          
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <ArrowUpwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            30%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            So với tháng trước
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
