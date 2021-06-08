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

const FutureOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState([]);
  const [thungan, setthungan] = useState('');
  const [data, setData] = useState([]);
  const [searchDate, setsearchDate] = useState(moment(new Date(), 'YYYY-MM-DD').format().substring(0, 10));

  useEffect(() => {    
    makeRemoteRequest();
  }, []); 
  const makeRemoteRequest = async () => {
    let today = new Date();
    let tomorrow = new Date();    
    tomorrow.setDate(today.getDate() + 1);    
    let ngaymai= moment(tomorrow, 'YYYY-MM-DD').format().substring(0, 10);
    let res=await GET(LinkApi.order_getBydate + ngaymai)
    console.log('res', res);
    if (res!==null) {
      setData(res)
    }
};

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Đơn hàng ngày mai" />
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

FutureOrders.propTypes = {
  className: PropTypes.string
};

export default FutureOrders;
