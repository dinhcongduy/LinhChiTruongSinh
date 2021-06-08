import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { GET } from 'src/utils/api/method';
import { LinkApi } from 'src/utils/api/api-link';

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState([]);
  const [thungan, setthungan] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {    
    makeRemoteRequest();
  }, []); 
  const makeRemoteRequest = async () => {
    let res=await GET(LinkApi.order_getBydate + moment(new Date(), 'YYYY-MM-DD').format().substring(0, 10))
    //console.log(res); 
    if (res!==null) {
      setData(res)
     // setLoading(false);
      //setRefreshing(false);
      //setData(page === 1 ? res : [...data, ...res]);
      //setpagesize(res.length)}else{
      //setLoading(false)
    }
    /*setLoading(true)
    const staffId =await AsyncStorage.getItem('staffId')
     var url=''
    if(type==='totrinhnhan'){
      url = urlAPI.totrinhNhanGetallPaging + `key=&status=-1&staffid=${staffId}&xem=-1&page=${page}&size=30`
    }if(type==='totrinhgui'){
       url = urlAPI.totrinhGuiGetallPaging + `key=&status=-1&staffid=${staffId}&xem=-1&page=${page}&size=30`
    }
  let hh =POST('http://103.114.104.246:8080/api-cargo-cs/api/login', 
    {
      userName:"admin",
      password:"12345"
    })
    const url = LinkApi.order_getall; 
    await fetch(url)
        .then(res => res.json()) 
        .then(res => {
         console.log(res);
        })
        .catch(error => {
          console.log(error);
        });

    /*if (res!==null) {
      setLoading(false);
      setRefreshing(false);
      setData(page === 1 ? res : [...data, ...res]);
      setpagesize(res.length)}else{
      setLoading(false)
    }
    //

    
  /*  const url = `https://5f8abf3a84531500167061c7.mockapi.io/api/vbd/trichYeu?page=${page}&limit=1`;
    setLoading(true);
   // fetch(props.url)
    fetch(url)
        .then(res => res.json())
        .then(res => {
         // alert(res.length)
          setLoading(false);
          setRefreshing(false);
          setError(res.error || null);
          setData( page === 1 ? res : [...data, ...res]);
          setpagesize(res.length)
            //alert(data)
        })
        .catch(error => {
           setLoading(false)
        });*/
};

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Đơn hàng trong ngày" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Đơn hàng
                </TableCell>
                <TableCell>
                  Khách hàng
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Giá
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Tình trạng
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.ID}
                  </TableCell>
                  <TableCell>
                    {order.CustomerName}
                  </TableCell>
                  <TableCell>
                    {order.PriceTotal}
                  </TableCell>
                  <TableCell>
                    {order.IsConNo===1?'Chưa thanh toán':'Đã thanh toán'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
