import React, { useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Paper,
  Typography,
  Drawer,
  FormControlLabel,
  MenuItem
} from '@material-ui/core';
import moment from 'moment';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { LinkApi } from 'src/utils/api/api-link';
import { GET, POST } from 'src/utils/api/method';
import { InputLabelCustom } from 'src/components/custom/inputtxt';
import { useSelector, useDispatch, Provider } from 'react-redux';
import {
  updateForm,
  updateDonHang,
  updatePay
} from '../../customer/AccountingView/reducersAndActions';
import configureStore from '../../customer/AccountingView/store';

const store = configureStore();

const Form = ({ type, item }) => {
  const classes = useStyles();

  const { form } = useSelector(state => ({
    ...state.reducer
  }));
  const { thongtindonhang } = useSelector(state => ({
    ...state.reducer
  }));

  const { pay } = useSelector(state => ({
    ...state.reducer
  }));

  const dispatch = useDispatch();
  const change = useCallback(e => dispatch(updateDonHang(e)), [dispatch]);
  const changePay = useCallback(e => dispatch(updatePay(e)), [dispatch]);
  const [payItem, setpayitem] = useState([]);
  const [hinhthucthanhtoan, sethinhthucthanhtoan] = useState('Tiền mặt');
  const [hinhthucthanhtoanship, sethinhthucthanhtoanship] = useState(
    'Tiền mặt'
  );
  const [customers, setcustomers] = useState([]);
  const [orderdate, setorderdate] = useState(
    moment(new Date(), 'YYYY-MM-DD')
      .format()
      .substring(0, 10)
  );

  const httt = [
    { key: 1, ht: 'Tiền mặt' },
    { key: 3, ht: 'Chuyển khoản' }
  ];

  useEffect(() => {
    if (type === 'newMAWB') {
      change({
        hoten: '',
        sodienthoai: '',
        diachi: '',
        chitietdonhang:
          '1. HỘP BÀO TỬ PHÚC THỌ 300,000đ\n2. HỘP NẤM AN BÌNH 550,000đ\n3. HỘP NẤM AN KHANG 980,000đ\n4. HỘP NẤM YÊU THƯƠNG 250,000đ',
        loichuc: '',
        tongsotien: '',
        shipestimate: '',
        shipthat: '',
        deleverynote: '',
        note: '',
        thanhtoan: ''
      });
      changePay({
        OrderId: '',
        PaymentType: '',
        Amount: 0,
        PayDate: '',
        Cashier: '',
        Created: '',
        CreatedBy: '',
        Modified: '',
        ModifiedBy: '',
        Note: '',
        OldId: ''
      });
    } else {
      getItemPayment();
      getallCustomer();
      change({
        ID: item.ID,
        code: item.Code,
        hoten: item.CustomerName,
        sodienthoai: item.CustomerPhone,
        diachi: item.CustomerAddress,
        chitietdonhang: item.Description,
        loichuc: item.LoiChuc,
        tongsotien: item.PriceTotal,
        shipestimate: item.ShipEstimate,
        shipthat: item.ShipThat,
        deleverynote: item.DeliveryNote,
        note: item.Note,
        thanhtoan: ''
      });
    }
  }, []);

  const getItemPayment = async () => {
    await GET(LinkApi.order_getByOrderId + item.ID).then(payitem => {
      setpayitem(payitem);
      // console.log(payitem)
      // console.log(payItem)
      changePay({
        ID: payitem.ID,
        OrderId: payitem.OrderId,
        PaymentType: payitem.PaymentType,
        Amount: payitem.Amount,
        PayDate: payitem.PayDate,
        Cashier: payitem.Cashier,
        Created: payitem.Created,
        CreatedBy: payitem.CreatedBy,
        Modified: payitem.Modified,
        ModifiedBy: payitem.ModifiedBy,
        Note: payitem.Note,
        OldId: payitem.OldId
      });
      //console.log("payitem: ", pay)
    });
    //
  };

  const getallCustomer = async () => {
    let res = await GET(LinkApi.customers_getall);
    //console.log(res);
    if (res !== null) {
      setcustomers(res);
    }
  };

  const saveOrder = async () => {
    const newcustomer = {
      Code: '',
      Name: thongtindonhang.hoten,
      Phone: thongtindonhang.sodienthoai,
      Address: thongtindonhang.diachi
    };
    let customernewID = null;
    for (let i = 0; i < customers.length; i++) {
      if (newcustomer.Phone === customers[i].Phone) {
        customernewID = customers[i].ID;
      }
    }

    let addCustomer = await POST(LinkApi.customer_add, newcustomer).then(
      responsecus => {
        //console.log(newOrder)
      }
    );
    //console.log(infoOrder)
    const infoOrder = {
      Code:
        'TOBI' +
        moment(new Date(), 'DD-MM-YYYY')
          .format()
          .substring(0, 19),
      ToShow: 0,
      CustomerId: 1,
      CustomerName: thongtindonhang.hoten,
      CustomerPhone: thongtindonhang.sodienthoai,
      CustomerAddress: thongtindonhang.diachi,
      UserId: 1,
      Description: thongtindonhang.chitietdonhang,
      LoiChuc: thongtindonhang.loichuc,
      PriceTotal: thongtindonhang.tongsotien,
      IsConNo:
        Number(thongtindonhang.tongsotien) <= Number(pay.Amount) ? '0' : '1',
      ShipEstimate: thongtindonhang.shipestimate,
      ShipThat: thongtindonhang.shipthat,
      DeliveryNote: thongtindonhang.deleverynote,
      Created:
        moment(new Date(), 'DD-MM-YYYY')
          .format()
          .substring(0, 10) +
        ' ' +
        moment(new Date(), 'DD-MM-YYYY')
          .format()
          .substring(11, 19),
      //"Created": orderdate,
      CreatedBy: 1,
      Modified: null,
      ModifiedBy: 0,
      Note: thongtindonhang.note
    };
    let newOrder = await POST(LinkApi.order_add, infoOrder)
      .then(response => {
        const infoPayment = {
          OrderId: response.ID,
          PaymentType: pay.PaymentType === 'Tiền mặt' ? 1 : 0,
          Amount: pay.Amount,
          PayDate:
            moment(new Date(), 'DD-MM-YYYY')
              .format()
              .substring(0, 10) +
            ' ' +
            moment(new Date(), 'DD-MM-YYYY')
              .format()
              .substring(11, 19),
          Cashier: 'Bưởi',
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
          ModifiedBy: 0,
          Note: pay.note,
          OldId: ''
        };
        let newPay = POST(LinkApi.pay_add, infoPayment)
          .then(responsez => console.log(responsez))
          .catch(error => alert('error', error));
      })
      .catch(error => alert('error', error));
  };

  const updateOrder = async () => {
    const OldInfoOrder = item;
    OldInfoOrder.ToShow = 1;
    await POST(LinkApi.order_update, OldInfoOrder); //update ToShow cua ban ghi cu thanh 1 de ko view ra
    const infoOrder = {
      //"ID":thongtindonhang.ID,
      ToShow: 0,
      Code: thongtindonhang.code,
      //"CustomerId": 1,
      CustomerName: thongtindonhang.hoten,
      CustomerPhone: thongtindonhang.sodienthoai,
      CustomerAddress: thongtindonhang.diachi,
      UserId: 1,
      Description: thongtindonhang.chitietdonhang,
      LoiChuc: thongtindonhang.loichuc,
      PriceTotal: thongtindonhang.tongsotien,
      IsConNo: thongtindonhang.tongsotien === pay.Amount ? '1' : '0',
      ShipEstimate: thongtindonhang.shipestimate,
      ShipThat: thongtindonhang.shipthat,
      DeliveryNote: thongtindonhang.deleverynote,
      //"Created": orderdate,
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
      ModifiedBy: 0,
      Note: thongtindonhang.note,
      OldId: thongtindonhang.ID
    };
    let newOrder = await POST(LinkApi.order_add, infoOrder) //add order mới và update ID vào bảng pay
      .then(response => {
        updatePayItem(response);
      })
      .catch(error => console.log('error2', error));
  };

  const updatePayItem = async response => {
    const OldInfoPayment = payItem;
    OldInfoPayment.OrderId = response.ID;
    OldInfoPayment.OldId = payItem.ID;

    console.log(OldInfoPayment);
    await POST(LinkApi.pay_update, OldInfoPayment)
      .then(responsez => console.log('responsez', responsez))
      .catch(error => console.log('error1', error));

    const infoPayment = {
      OrderId: response.ID,
      PaymentType: pay.PaymentType,
      Amount: pay.Amount,
      PayDate:
        moment(new Date(), 'DD-MM-YYYY')
          .format()
          .substring(0, 10) +
        ' ' +
        moment(new Date(), 'DD-MM-YYYY')
          .format()
          .substring(11, 19),
      Cashier: 'Bưởi',
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
      ModifiedBy: 0,
      Note: pay.note,
      OldId: ''
    };
  };
  const submit = event => {
    event.preventDefault();
    console.log('SUBMIT', event);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={submit}
      className={classes.root}
      style={{ padding: 10 }}
    >
      {type === 'editMAWB' ? (
        <h5
          style={{
            fontSize: 16,
            marginTop: 10,
            fontFamily: 'sans-serif',
            color: 'white',
            backgroundColor: '#3f51b5',
            padding: 15
          }}
        >
          Sửa đơn hàng
        </h5>
      ) : (
        <h5
          style={{
            fontSize: 16,
            marginTop: 10,
            fontFamily: 'sans-serif',
            color: 'white',
            backgroundColor: '#3f51b5',
            padding: 15
          }}
        >
          Tạo đơn hàng mới
        </h5>
      )}
      <Divider style={{ fontSize: 16, marginTop: 10, color: 'black' }} />
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item xs={6} style={{ backgroundColor: '', borderRadius: 4 }}>
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
            <h5 style={styles.boxTitle}>Thông tin khách hàng</h5>
            <Grid
              item
              xs={12}
              style={{
                border: '1px solid grey',
                padding: 1,
                backgroundColor: 'white',
                height: 220,
                borderRadius: 4
              }}
            >
              <InputLabelCustom
                label={'Họ tên'}
                value={thongtindonhang.hoten}
                onChange={e => change({ hoten: e.target.value })}
                customstyle={null}
                multiline={false}
                rowsMax={1}
              />
              <InputLabelCustom
                label={'Số điện thoại'}
                value={thongtindonhang.sodienthoai}
                onChange={e => change({ sodienthoai: e.target.value })}
                customstyle={null}
                multiline={false}
                rowsMax={1}
              />
              <InputLabelCustom
                label={'Địa chỉ'}
                value={thongtindonhang.diachi}
                onChange={e => change({ diachi: e.target.value })}
                customstyle={null}
                multiline={true}
                rowsMax={2}
              />
              {/* <InputLabelCustom
                label={'Lời chúc'}
                value={thongtindonhang.loichuc}
                onChange={e => change({ loichuc: e.target.value })}
                customstyle={null}
                multiline={false}
                rowsMax={1}
              /> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} style={{ backgroundColor: '', borderRadius: 4 }}>
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
            <h5 style={styles.boxTitle}>Thanh toán</h5>
            <Grid
              item
              xs={12}
              style={{
                border: '1px solid grey',
                padding: 1,
                backgroundColor: 'white',
                height: 220,
                borderRadius: 4
              }}
            >
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={
                  <Typography className={classes.formControlLabel}>
                    {'Phí ship thu khách'}
                  </Typography>
                }
                style={{ backgroundColor: '' }}
                labelPlacement="start"
                control={
                  <TextField
                    size="small"
                    type={'number'}
                    autoComplete="off"
                    style={{ width: 440 }}
                    InputProps={{
                      style: { fontSize: 13, marginRight: 30, marginLeft: 10 }
                    }}
                    name="country"
                    onChange={e => change({ shipestimate: e.target.value })}
                    required
                    value={thongtindonhang.shipestimate}
                    variant="outlined"
                  />
                }
              />
              <InputLabelCustom
                label={'Phí ship thực tế'}
                value={thongtindonhang.shipthat}
                onChange={e => change({ shipthat: e.target.value })}
                customstyle={null}
                multiline={false}
                rowsMax={1}
                type="number"
              />
              <InputLabelCustom
                label={'Thành tiền'}
                value={thongtindonhang.tongsotien}
                onChange={e => change({ tongsotien: e.target.value })}
                customstyle={null}
                multiline={false}
                rowsMax={1}
                type="number"
              />
              {type === 'newMAWB' ? (
                <div>
                  <FormControlLabel
                    fullWidth
                    //className={classes.formControl}
                    label={
                      <Typography className={classes.formControlLabel}>
                        {'Thanh toán'}
                      </Typography>
                    }
                    style={{ backgroundColor: '' }}
                    labelPlacement="start"
                    control={
                      <TextField
                        size="small"
                        type={'number'}
                        style={{ width: 200 }}
                        InputProps={{
                          style: {
                            fontSize: 13,
                            marginRight: 30,
                            marginLeft: 10
                          }
                        }}
                        name="country"
                        onChange={e => changePay({ Amount: e.target.value })}
                        required
                        value={pay.Amount}
                        variant="outlined"
                      />
                    }
                  />
                  <TextField
                    select
                    size="small"
                    InputProps={{
                      style: { fontSize: 14, backgroundColor: 'white' }
                    }}
                    style={{
                      width: 150,
                      marginLeft: 10,
                      fontSize: 14,
                      backgroundColor: 'white'
                    }}
                    //value={httt}
                    value={pay.PaymentType}
                    onChange={e => changePay({ PaymentType: e.target.value })}
                    variant="outlined"
                  >
                    {httt.map(option => (
                      <MenuItem key={option.key} value={option.ht}>
                        {option.ht}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Typography
                    style={{ fontSize: 12, marginLeft: 18, marginTop: 10 }}
                    color="textPrimary"
                    variant="body1"
                  >
                    Khách
                    nợ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {thongtindonhang.tongsotien - pay.Amount} đ
                  </Typography>
                </div>
              ) : (
                <div>&nbsp;</div>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ backgroundColor: '', borderRadius: 4 }}>
          <Grid
            item
            xs={12}
            style={{
              height: 260,
              backgroundColor: '',
              paddingTop: 10,
              borderRadius: 4
            }}
          >
            <h5 style={styles.boxTitle}>Chi tiết sản phẩm</h5>
            <Grid
              item
              xs={12}
              style={{
                border: '1px solid grey',
                padding: 1,
                backgroundColor: 'white',
                height: 240,
                borderRadius: 4
              }}
            >
              <InputLabelCustom
                label={'Yêu cầu giao hàng'}
                value={thongtindonhang.deleverynote}
                onChange={e => change({ deleverynote: e.target.value })}
                customstyle={{ marginLeft: 40 }}
                multiline={false}
                rowsMax={1}
              />
              <InputLabelCustom
                label={'Ngày xuất hàng'}
                value={thongtindonhang.note}
                onChange={e => change({ note: e.target.value })}
                customstyle={{ marginLeft: 40 }}
                multiline={false}
                rowsMax={1}
                type={'date'}
              />

              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={
                  <Typography
                    style={{
                      marginLeft: 10,
                      width: 150,
                      fontFamily: 'sans-serif',
                      fontSize: 12,
                      alignSelf: 'flex-start',
                      paddingLeft: 0,
                      textAlign: 'start'
                    }}
                  >
                    Mô tả sản phẩm
                  </Typography>
                }
                style={{ margin: 5 }}
                labelPlacement="start"
                control={
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{ style: { fontSize: 14 } }}
                    style={{ width: 800 }}
                    // helperText="Please specify the first name"
                    name="firstName"
                    required
                    value={thongtindonhang.chitietdonhang}
                    onChange={e => change({ chitietdonhang: e.target.value })}
                    variant="outlined"
                    multiline
                    rows={8}
                  />
                }
              />
            </Grid>
          </Grid>
        </Grid>
        {type === 'newMAWB' ? (
          <Button
            color="secondary"
            style={{
              marginTop: 10,
              color: 'white',
              backgroundColor: '#3f51b5',
              padding: 10
            }}
            onClick={saveOrder}
          >
            SAVE
          </Button>
        ) : (
          <Button
            color="secondary"
            style={{
              marginTop: 10,
              color: 'white',
              backgroundColor: '#3f51b5',
              padding: 10
            }}
            onClick={updateOrder}
          >
            UPDATE
          </Button>
        )}
      </Grid>
    </form>
  );
};

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const useStyles = makeStyles(() => ({
  root: {
    width: 1150,
    backgroundColor: 'rgb(240, 240, 240)'
  },
  inputRoot: {
    color: 'green',
    fontSize: 12,
    height: 120
  },
  paper: {
    padding: 2,
    textAlign: 'center',
    color: 'gray'
  },
  formControlLabel: {
    width: 110,
    fontFamily: 'sans-serif',
    fontSize: 12,
    alignSelf: 'flex-end',
    paddingLeft: 0,
    textAlign: 'start',
    backgroundColor: ''
  },
  formControl: {
    width: 530,
    margin: 5,
    fontFamily: 'sans-serif',
    fontSize: 13,
    alignSelf: 'center',
    backgroundColor: ''
  },
  table: {
    minWidth: 650
  }
}));

const styles = {
  textInput: {
    width: 450,
    marginLeft: 10
  },
  boxTitle: {
    fontSize: 16,
    marginTop: 0,
    color: 'green'
  },
  autocomlete: {
    marginLeft: 10,
    width: 400,
    backgroundColor: ''
  }
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

const MAWB = ({ className, type, item, ...rest }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [opendialog, setOpendialog] = React.useState(false);
  const [opensides, setopenside] = useState(false);

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      //   onClick={setopenside(false)}
      //   onKeyDown={setopenside(false)}
    >
      <h1>kkk</h1>
    </div>
  );

  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });
  // alert(item.customerId);

  const handleChangecheck = event => {
    setChecked(!checked);
  };

  const [valuez, setValuez] = useState('');

  return (
    <Provider store={store}>
      <Form type={type} item={item} />
    </Provider>
  );
};

MAWB.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  item: PropTypes.object
};

export default MAWB;
