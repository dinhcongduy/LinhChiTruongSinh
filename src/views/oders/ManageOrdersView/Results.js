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
  Button,
  TextField,
  FormControlLabel,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Dialog,
  Grid,
  TableContainer,
  Paper,
  CardContent
} from '@material-ui/core';
// import { SearchIcon } from '@material-ui/data-grid';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { LinkApi } from 'src/utils/api/api-link';
import { GET, POST } from 'src/utils/api/method';
import { InputLabelCustom } from 'src/components/custom/inputtxt';
import PrintInvoice from './PrintInvoice';
import MAWB from './MAWB';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  table: {
    width: 600
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
  const [searchDate, setsearchDate] = useState(
    moment(new Date(), 'YYYY-MM-DD')
      .format()
      .substring(0, 10)
  );
  const [openViewChange, setopenViewChange] = React.useState(false);
  const [lichsuthaydoi, setlichsuthaydoi] = useState([]);

  useEffect(() => {
    makeRemoteRequest();
  }, []);
  const makeRemoteRequest = async () => {
    let res = await GET(LinkApi.order_getall);
    if (res !== undefined) {
      setData(res);
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

  const getlichsu = async item => {
    let res = await GET(LinkApi.order_getLichSu + item.Code);
    if (res !== undefined) {
      setlichsuthaydoi(res);
    }
  };

  const handleSelectAll = event => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = data.map(item => item.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }
    alert(newSelectedCustomerIds);
    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleClick = ({ event }) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLongMenu = () => {
    setAnchorEl(null);
  };
  const DeleteItem = ({ orderz }) => {
    return <div onClick={() => alert(orderz.ID)}>Delete</div>;
  };
  const deleteItem = async () => {
    //setAnchorEl(null);
    //alert(selectedDeleteItem)
    await GET(LinkApi.order_del + selectedMenuItem.ID)
      .then(respon => {
        console.log('respon:', respon);
        if (respon === 'SUCCESS') {
          window.location.reload();
          setAnchorEl(null);
        }
      })
      .catch(error => console.log(error));
  };

  const Payment = ({ item }) => {
    const [open, setOpen] = React.useState(false);
    const [openDetails, setOpenDetails] = React.useState(false);
    const [lastRefresh, setlastRefresh] = useState(Date(Date.now()).toString());
    const [sotienthanhtoan, setsotienthanhtoan] = useState(null);
    const [hinhthucthanhtoan, sethinhthucthanhtoan] = useState('Ti???n m???t');
    const [dathanhtoan, setdathanhtoan] = useState('');
    const [conno, setconno] = useState('');
    const [ghichu, setghichu] = useState('');
    const [itemPayed, setitemPayed] = useState([]);
    useEffect(() => {
      console.log(item);
      getItemPayment();
    }, []);
    const getItemPayment = async () => {
      await GET(LinkApi.order_getByOrderId + item.ID).then(respon => {
        setitemPayed(respon);
        //setlistPay(respon);
        //setlastRefresh(Date(Date.now()).toString())
        let tongdathanhtoan = 0;
        let tienno = 0;
        for (let i = 0; i < respon.length; i++) {
          tongdathanhtoan = respon[i].Amount + tongdathanhtoan;
          tienno = item.PriceTotal - tongdathanhtoan;
        }
        setdathanhtoan(tongdathanhtoan);
        setconno(tienno);
        //console.log("OK", respon)
      });
      //
    };

    const paymentDetails = () => {};
    const handleSave = () => {
      const infoPayment = {
        OrderId: item.ID,
        PaymentType: hinhthucthanhtoan === 'Ti???n m???t' ? 1 : 0,
        Amount: sotienthanhtoan,
        PayDate:
          moment(new Date(), 'DD-MM-YYYY')
            .format()
            .substring(0, 10) +
          ' ' +
          moment(new Date(), 'DD-MM-YYYY')
            .format()
            .substring(11, 19),
        Cashier: 'B?????i',
        Created:
          moment(new Date(), 'DD-MM-YYYY')
            .format()
            .substring(0, 10) +
          ' ' +
          moment(new Date(), 'DD-MM-YYYY')
            .format()
            .substring(11, 19),
        CreatedBy: 1,
        Modified: null,
        ModifiedBy: 'Nh??n vi??n A',
        Note: ghichu,
        OldId: ''
      };
      let newPay = POST(LinkApi.pay_add, infoPayment)
        .then(responsez => window.location.reload())
        .catch(error => alert('error', error));
      if (Number(sotienthanhtoan) >= Number(conno)) {
        updateOrder('hetno');
      }
      //setOpen(false);
    };
    const updateOrder = async string => {
      const infoOrder = {
        ID: item.ID,
        Code: item.Code,
        //"CustomerId": 1,
        CustomerName: item.CustomerName,
        CustomerPhone: item.CustomerPhone,
        CustomerAddress: item.CustomerAddress,
        UserId: 1,
        Description: item.Description,
        LoiChuc: item.LoiChuc,
        PriceTotal: item.PriceTotal,
        IsConNo: string === 'hetno' ? '0' : '1',
        ShipEstimate: item.ShipEstimate,
        ShipThat: item.ShipThat,
        DeliveryNote: item.DeliveryNote,
        Created: item.Created,
        CreatedBy: item.CreatedBy,
        Modified: item.Modified,
        ModifiedBy: item.ModifiedBy,
        Note: item.Note
      };
      let newOrder = await POST(LinkApi.order_update, infoOrder)
        .then(response => {
          alert('luu thong tin thanh cong');
        })
        .catch(error => console.log('error2', error));
    };
    const httt = [
      { key: 1, ht: 'Ti???n m???t' },
      { key: 2, ht: 'Chuy???n kho???n' }
    ];
    return (
      <div>
        <Dialog
          style={{ width: 800 }}
          open={openDetails}
          onClose={() => setOpenDetails(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Thanh to??n ????n h??ng </DialogTitle>
          <DialogContent>
            <DialogContentText>
              C??c kho???n thanh to??n cho ????n h??ng s??? {item.OrderID} c???a kh??ch h??ng{' '}
              {item.CustomerName}
            </DialogContentText>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>S??? ti???n</TableCell>
                    <TableCell align="center">Thu ng??n</TableCell>
                    <TableCell align="center">Ng??y</TableCell>
                    <TableCell align="center">Ng?????i t???o</TableCell>
                    <TableCell align="center">Ghi ch??</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {itemPayed.map(row => (
                    <TableRow key={row.ID}>
                      <TableCell component="th" scope="row">
                        {row.Amount.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">{row.Cashier}</TableCell>
                      <TableCell align="right">
                        {moment(row.Created).format('HH:MM')} -{' '}
                        {moment(row.Created).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell align="right">{row.CreatedBy}</TableCell>
                      <TableCell align="right">{row.Note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDetails(false)} color="secondary">
              Tho??t
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Thanh to??n ????n h??ng </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Thanh to??n cho ????n h??ng s??? {item.OrderID} c???a kh??ch h??ng{' '}
              {item.CustomerName}
            </DialogContentText>
            <DialogContentText>
              S??? ti???n c??n n???: {conno.toLocaleString()} ??
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link href={'#'} onClick={() => setsotienthanhtoan(conno)}>
                Copy
              </Link>
            </DialogContentText>
            <Grid container spacing={1} justify="center" alignItems="center">
              <Grid
                item
                xs={12}
                style={{ backgroundColor: '', borderRadius: 4 }}
              >
                <Grid
                  item
                  xs={12}
                  style={{
                    height: 250,
                    backgroundColor: '',
                    paddingTop: 10,
                    borderRadius: 4
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      border: '1px solid grey',
                      padding: 1,
                      backgroundColor: 'white',
                      height: 160,
                      borderRadius: 4
                    }}
                  >
                    <InputLabelCustom
                      label={'S??? ti???n'}
                      value={sotienthanhtoan}
                      onChange={e => setsotienthanhtoan(e.target.value)}
                      customstyle={null}
                      multiline={false}
                      rowsMax={1}
                      type="number"
                    />
                    <FormControlLabel
                      fullWidth
                      //className={classes.formControl}
                      label={
                        <Typography
                          style={{
                            marginLeft: 10,
                            width: 110,
                            fontFamily: 'sans-serif',
                            fontSize: 12,
                            alignSelf: 'flex-start',
                            paddingLeft: 0,
                            textAlign: 'start'
                          }}
                        >
                          H??nh th???c thanh to??n
                        </Typography>
                      }
                      style={{ margin: 5 }}
                      labelPlacement="start"
                      control={
                        <TextField
                          select
                          size="small"
                          InputProps={{
                            style: { fontSize: 14, backgroundColor: 'white' }
                          }}
                          style={{
                            width: 250,
                            marginLeft: 10,
                            fontSize: 14,
                            backgroundColor: 'white'
                          }}
                          //value={httt}
                          value={hinhthucthanhtoan}
                          onChange={e => sethinhthucthanhtoan(e.target.value)}
                          variant="outlined"
                        >
                          {httt.map(option => (
                            <MenuItem key={option.key} value={option.ht}>
                              {option.ht}
                            </MenuItem>
                          ))}
                        </TextField>
                      }
                    />
                    <InputLabelCustom
                      label={'Ghi ch??'}
                      value={ghichu}
                      onChange={e => setghichu(e.target.value)}
                      customstyle={null}
                      multiline={false}
                      rowsMax={1}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions
            style={{ border: '1px solid grey', flexDirection: 'space-between' }}
          >
            <Button onClick={() => setOpen(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        {/* <Typography
          style={{ fontSize: 12 }}
          color="textPrimary"
          variant="body1"
        >
          Ship th???t:{' '}
          {item.ShipThat.toLocaleString(undefined, {
            maximumFractionDigits: 2
          })}{' '}
          ??
        </Typography> */}
        <Link
          href={'#'}
          style={{ fontSize: 12, color: 'green' }}
          color="textPrimary"
          variant="body1"
          onClick={() => setOpenDetails(true)}
        >
          ???? thanh to??n:{' '}
          {dathanhtoan.toLocaleString(undefined, { maximumFractionDigits: 2 })}{' '}
          ??
        </Link>
        <Typography
          style={{ fontSize: 12, color: 'red' }}
          color="textPrimary"
          variant="body1"
        >
          N???: {conno.toLocaleString(undefined, { maximumFractionDigits: 2 })} ??
        </Typography>
        {conno.toLocaleString(undefined, { maximumFractionDigits: 2 }) <= 0 ? (
          <div>&nbsp;</div>
        ) : (
          <Link href={'#'} onClick={() => setOpen(true)}>
            Thanh to??n n???
          </Link>
        )}
      </div>
    );
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      //   onClick={setopenside(false)}
      //   onKeyDown={setopenside(false)}
    >
      <MAWB type={'editMAWB'} item={selectedItem} />
    </div>
  );

  const searchByDate = () => {
    makeRemoteRequest();
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Dialog
        open={openViewChange}
        onClose={() => setopenViewChange(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          L???ch s??? s???a ?????i th??ng tin{' '}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            L???ch s??? s???a ?????i th??ng tin ????n h??ng c???a kh??ch h??ng{' '}
            {selectedItem.CustomerName}
          </DialogContentText>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Ng??y t???o</TableCell>
                  <TableCell align="center">Kh??ch h??ng</TableCell>
                  <TableCell align="center">?????a ch???</TableCell>
                  <TableCell align="center">S??? ??T</TableCell>
                  {/* <TableCell align="center">L???i ch??c</TableCell> */}
                  <TableCell align="center">Th???i gian xu???t h??ng</TableCell>
                  <TableCell align="center">T???ng s??? ti???n</TableCell>
                  <TableCell align="center">Ship thu kh??ch</TableCell>
                  <TableCell align="center">Ship th???t</TableCell>
                  <TableCell align="center">Y??u c???u</TableCell>
                  <TableCell align="center">Ng?????i s???a</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lichsuthaydoi.map((row, index) => (
                  <TableRow key={row.ID}>
                    <TableCell align="right">
                      {moment(row.Created).format('HH:MM')} -{' '}
                      {moment(row.Created).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell align="right">{row.CustomerName}</TableCell>
                    <TableCell align="right">{row.CustomerPhone}</TableCell>
                    <TableCell align="right">{row.CustomerAddress}</TableCell>
                    {/* <TableCell align="right">{row.LoiChuc}</TableCell> */}
                    <TableCell align="right">{row.Note}</TableCell>
                    <TableCell align="right">{row.PriceTotal}</TableCell>
                    <TableCell align="right">{row.ShipEstimate}</TableCell>
                    <TableCell align="right">{row.ShipThat}</TableCell>
                    <TableCell align="right">{row.DeliveryNote}</TableCell>
                    <TableCell align="right">Nh??n vi??n A</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setopenViewChange(false)} color="secondary">
            Tho??t
          </Button>
        </DialogActions>
      </Dialog>
      <Box mt={6} style={{ backgroundColor: '#f4f6f8' }}>
        <Card>
          <CardContent>
            <Box
              maxWidth={500}
              display="flex"
              flexDirection="row"
              style={{ flex: 1, marginRight: 100 }}
            >
              <TextField
                fullWidth
                type="date"
                InputProps={{
                  startAdornment: (
                    <Button
                      style={{
                        flex: 1,
                        color: 'grey',
                        backgroundColor: 'white',
                        marginRight: 50,
                        width: 100,
                        height: 40,
                        alignSelf: 'center'
                      }}
                      onClick={() => searchByDate()}
                    >
                      {/* <SearchIcon /> */}
                    </Button>
                  )
                }}
                onChange={e => {
                  setsearchDate(e.target.value);
                }}
                value={searchDate}
                placeholder="Search customer"
                variant="outlined"
              />
              <Button
                color="primary"
                variant="contained"
                style={{ width: 200, height: 30, marginLeft: 40 }}
                //onClick={() => setopenside(true)}
                onClick={() => searchByDate()}
              >
                T??m ki???m
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Drawer
            anchor="right"
            open={opensides}
            onClose={() => setopenside(false)}
          >
            {list('', data)}
          </Drawer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Kh??ch h??ng</TableCell>
                <TableCell>Th???i gian xu???t h??ng</TableCell>
                <TableCell>Chi ti???t ????n h??ng</TableCell>
                <TableCell>H??a ????n</TableCell>
                <TableCell>Thanh to??n</TableCell>
                <TableCell>Sale</TableCell>
                <TableCell>Action</TableCell>
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
                  width: '20ch'
                }
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
              {data.slice(0, limit).map((item, index) => (
                <TableRow
                  hover
                  key={item.ID}
                  selected={selectedCustomerIds.indexOf(item.ID) !== -1}
                >
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography
                        color="textPrimary"
                        variant="body1"
                        style={{ fontSize: 14, color: 'blue' }}
                        // onClick={() => {
                        //   setopenside(true);
                        //   setSelectedItem(item);
                        // }}
                      >
                        Kh??ch h??ng {index + 1}
                        {/* <Link href="#">{item.CustomerName}</Link> */}
                      </Typography>
                    </Box>
                    <Typography
                      style={{ fontSize: 12 }}
                      color="textPrimary"
                      variant="body1"
                    >
                      ??T: 0123456789
                    </Typography>
                    <Typography
                      style={{ fontSize: 12 }}
                      color="textPrimary"
                      variant="body1"
                    >
                      ?????a ch???: Y??n H??a, C???u Gi???y, H?? N???i
                    </Typography>
                    {item.OldId !== 0 ? (
                      <Link
                        href={'#'}
                        style={{ fontSize: 12, color: 'green' }}
                        color="textPrimary"
                        variant="body1"
                        onClick={() => {
                          getlichsu(item);
                          setSelectedItem(item);
                          setopenViewChange(true);
                        }}
                      >
                        L???ch s??? s???a th??ng tin
                      </Link>
                    ) : (
                      <div>&nbsp;</div>
                    )}
                  </TableCell>
                  <TableCell>{item.Note}</TableCell>
                  <TableCell>
                    <Typography
                      style={{ fontSize: 14 }}
                      color="textPrimary"
                      variant="body1"
                      paragraph
                    >
                      1xH???p b??o t??? ph??c th???
                      <br />
                      3xH???p n???m an b??nh
                      <br />
                      2xH???p n???m an khang
                    </Typography>
                    {/* <Typography
                      style={{ fontSize: 14 }}
                      color="textPrimary"
                      variant="body1"
                    >
                      L???i ch??c: {item.LoiChuc}
                    </Typography> */}
                    {/* <Typography
                      style={{ fontSize: 14 }}
                      color="textPrimary"
                      variant="body1"
                    >
                      Y??u c???u: {item.DeliveryNote}
                    </Typography> */}
                    <Typography
                      style={{ fontSize: 14 }}
                      color="textPrimary"
                      variant="body1"
                    >
                      Ng??y ?????t h??ng: {moment(item.Created).format('HH:mm')} -{' '}
                      {moment(item.Created).format('DD/MM/YYYY')}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      style={{ fontSize: 14 }}
                      color="textPrimary"
                      variant="body1"
                    >
                      Gi??: {item.PriceTotal.toLocaleString()}
                    </Typography>
                    <Typography
                      style={{ fontSize: 14 }}
                      color="textPrimary"
                      variant="body1"
                    >
                      Ph?? ship : {item.ShipEstimate.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Payment item={item} />
                  </TableCell>
                  <TableCell>Nh??n vi??n {item.UserId}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={event => {
                        setAnchorEl(event.currentTarget);
                        setSelectedMenuItem(item);
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
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
  orderz: PropTypes.object
};

export default Results;
