import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  MenuItem,
  Menu,
  Drawer,
  Grid,
  Container
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { LinkApi } from 'src/utils/api/api-link';
import { GET } from 'src/utils/api/method';
import TongDoanhThuNgay from 'src/views/reports/DashboardView/TongDoanhThuNgay';
import Page from 'src/components/Page';
import PrintInvoice from './PrintInvoice';
import Khoanchimoi from './Khoanchimoi';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));
const ITEM_HEIGHT = 48;

const Results = ({ className, newaddedOrder, customers, ...rest }) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const [opendialog, setOpendialog] = React.useState(false);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [opensides, setopenside] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  //console.log("KKK: ", newaddedOrder);
  useEffect(() => {    
    makeRemoteRequest();
  }, []); 
  const makeRemoteRequest = async () => {
    let res=await GET(LinkApi.chi_getbydate + moment(new Date(), 'YYYY-MM-DD').format().substring(0, 10))
    //console.log(res); 
    if (res!==null) {
      setData(res)
    }
};

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleCloseLongMenu = () => {
    setAnchorEl(null);
  };
  
  const deleteItem = async () => {
    //setAnchorEl(null);
    //alert(selectedDeleteItem)
    await GET(LinkApi.chi_del+selectedMenuItem.ID)
        .then(respon => {
          console.log("respon:", respon)
          if (respon==="SUCCESS") {
           window.location.reload()
           setAnchorEl(null);
          }
        })
        .catch(error => console.log(error));
      };
  

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
   //   onClick={setopenside(false)}
   //   onKeyDown={setopenside(false)}
    >
      <Khoanchimoi type={'editMAWB'} item={selectedItem} />
    </div>
  );
  
  return (
    <Page>
      
      
      <Container maxWidth={false}>
        <Grid
          container
          justify="space-between"
          spacing={1}
        >
          <Grid
            item
            lg={8}
            sm={6}
            xl={3}
            xs={12}
          >
            <Card
              className={clsx(classes.root, className)}
              {...rest}
            >
              <PerfectScrollbar>
                <Box minWidth={1050}>
                  <Drawer anchor="bottom" open={opensides} onClose={() => setopenside(false)}>
                    {list('', data)}
                  </Drawer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          Tên khoản chi
                        </TableCell>
                        <TableCell>
                          Số tiền
                        </TableCell>
                        <TableCell>
                          Ghi chú
                        </TableCell>
                        <TableCell>
                          Hình thức chi
                        </TableCell>
                        <TableCell>
                          Người thực hiện
                        </TableCell>
                        <TableCell>
                          Ngày
                        </TableCell>
                        <TableCell>
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={openMenu}
                      onClose={handleCloseLongMenu}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '20ch',
                        },
                      }}
                    >
                      <MenuItem onClick={handleCloseLongMenu}>
                        <PrintInvoice item={selectedMenuItem} />
                      </MenuItem>
                      <MenuItem onClick={handleCloseLongMenu}>
                        <Typography
                          aria-label="delete"
                          //aria-controls="long-menu"
                          //aria-haspopup="true"
                          onClick={() => deleteItem()}
                        >
                          Delete
                        </Typography>
                      </MenuItem>
                    </Menu>
                    <TableBody>
                      {data.slice(0, limit).map((item) => (
                        <TableRow
                          hover
                          key={item.ID}
                          selected={selectedCustomerIds.indexOf(item.ID) !== -1}
                        >
                          <TableCell>
                            <Box
                              alignItems="center"
                              display="flex"
                            >
                              <Typography
                                color="textPrimary"
                                variant="body1"
                                style={{ fontSize: 14, color: 'blue' }}
                                onClick={() => {
                                  setopenside(true)
                                  setSelectedItem(item)
                                }}
                              >
                                <Link href="#">
                                  {item.NoiDungChi}
                                </Link>
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            {item.SoTien}
                          </TableCell>
                          <TableCell>
                            {item.Note}
                          </TableCell>
                          <TableCell>
                            <Typography
                              style={{ fontSize: 14 }}
                              color="textPrimary"
                              variant="body1"
                            >
                              {item.HinhThucChi}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              style={{ fontSize: 14 }}
                              color="textPrimary"
                              variant="body1"
                            >
                              Ngân
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              style={{ fontSize: 14 }}
                              color="textPrimary"
                              variant="body1"
                            >
                              {moment(item.Modified).format('HH:MM')} - {moment(item.Modified).format('DD/MM/YYYY')}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={(event) => {
                                setAnchorEl(event.currentTarget);
                                setSelectedMenuItem(item)
                              }}
                            >
                              <MoreVertIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </PerfectScrollbar>
              <TablePagination
                component="div"
                count={data.length}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
              />
            </Card>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={6}
            xs={12}
          >
            <TongDoanhThuNgay />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
  orderz: PropTypes.object
};

export default Results;
