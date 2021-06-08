import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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
  Container,
  TextField,
  CardContent} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { LinkApi } from 'src/utils/api/api-link';
import { GET } from 'src/utils/api/method';
import Page from 'src/components/Page';
import { Autocomplete } from '@material-ui/lab';

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
    let res=await GET(LinkApi.customers_getall)
    console.log(res); 
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
    await GET(LinkApi.customer_del+selectedMenuItem.ID)
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
      <div>dd</div>
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
            lg={12}
            sm={6}
            xl={3}
            xs={12}
          >
            <Card
              className={clsx(classes.root, className)}
              {...rest}
            >
              <Box mt={3} style={{backgroundColor: '#f4f6f8'}}>
                <Card>
                  <CardContent>
                    <Box maxWidth={400} display="flex" flexDirection="row" style={{ flex: 1, marginRight: 100 }}>
                      <Autocomplete
                        size="small"
                        id="combo-box-demo"
                        classes={classes}
                        options={data}
                        getOptionLabel={(option) => option.Name + " "+ option.Phone}
                        style={{ width: 500}}
                        renderInput={(params) => <TextField {...params} label="Search customer" InputLabelProps={{ style: { fontSize: 14, height: 150 } }} variant="outlined" />}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <PerfectScrollbar>
                <Box minWidth={1050}>
                  <Drawer anchor="bottom" open={opensides} onClose={() => setopenside(false)}>
                    {list('', data)}
                  </Drawer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          Name
                        </TableCell>
                        <TableCell>
                          Phone
                        </TableCell>
                        <TableCell>
                          Address
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
                                  {item.Name}
                                </Link>
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            {item.Phone}
                          </TableCell>
                          <TableCell>
                            <Typography
                              style={{ fontSize: 14 }}
                              color="textPrimary"
                              variant="body1"
                            >
                              {item.Address}
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
