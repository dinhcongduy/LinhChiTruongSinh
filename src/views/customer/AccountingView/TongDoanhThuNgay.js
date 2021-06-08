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

const TongDoanhThuNgay = ({ className, ...rest }) => {
  const classes = useStyles();
  // const [orders] = useState(data);
  const [ngay, setNgay] = useState('');
  const [tongDoanhThuNgay, settongDoanhThuNgay] = useState('');
  const [doanhthu, setdoanhthu] = useState([]);

  useEffect(() => {    
    getTongDoanhThuNgay();
  }, []); 
  const getTongDoanhThuNgay = async () => {
    await GET(LinkApi.order_getTongDoanhThuNgay)
      .then(respon => {  
        setdoanhthu(respon)
        //console.log("OK", respon) 
      });
  } 

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Tổng doanh thu ngày" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead style={{width:'10%', backgroundColor: 'green'}}>
              <TableRow>
                <TableCell>
                  Ngày
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
                      Doanh thu
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Tình trạng
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doanhthu.map((order) => (
                <TableRow
                  hover
                  key={order.SaleDate}
                  >
                  <TableCell>
                    {moment(order.SaleDate).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {order.TongDoanhThu}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color="primary"
                      label="Đã bàn giao"
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

TongDoanhThuNgay.propTypes = {
  className: PropTypes.string
};

export default TongDoanhThuNgay;
