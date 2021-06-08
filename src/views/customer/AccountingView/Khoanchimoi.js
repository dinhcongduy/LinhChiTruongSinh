import React, { useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer, TableHead, TableRow,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Paper, Typography,
  Drawer, FormControlLabel, MenuItem
} from '@material-ui/core';
import moment from 'moment';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { LinkApi } from 'src/utils/api/api-link';
import { POST } from 'src/utils/api/method';
import { InputLabelCustom } from 'src/components/custom/inputtxt';
import { useSelector, useDispatch, Provider } from "react-redux";
import { updateForm, updateDonHang, updatePay, updateBanGiaoTien, updateKhoanChiMoi } from "./reducersAndActions";
import configureStore from "./store";

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
  const { khoanchimoi } = useSelector(state => ({
    ...state.reducer
  }));
  const { bangiaotien } = useSelector(state => ({
    ...state.reducer
  }));
  const ccc=JSON.stringify(thongtindonhang)

  const dispatch = useDispatch();
  const change = useCallback(e => dispatch(updateDonHang(e)), [dispatch]);
  const changePay = useCallback(e => dispatch(updatePay(e)), [dispatch]);
  const changeKhoanChiMoi = useCallback(e => dispatch(updateKhoanChiMoi(e)), [dispatch]);
  const changeBanGiaoTien = useCallback(e => dispatch(updateBanGiaoTien(e)), [dispatch]);
  const [conno, setconno] = useState(0);
  const httt=[{ key: 1, ht: "Tiền mặt (Công ty chi)"}, {key: 2, ht: 'Tiền mặt (Giám đốc chi)'}, {key: 3, ht: 'Chuyển khoản'}]

  
  useEffect(() => {    
    if (type==="newMAWB") {
      changeKhoanChiMoi({ 
        ID:0,
        NoiDungChi: "vvv",
        SoTien: 0,
        HinhThucChi: "",
        NguoiChi: "",
        TinhTrang: "",
        Created: "",
        CreatedBy: "",
        Modified: "",
        ModifiedBy: "",
        Note:""
      });
    }
    else {
      console.log(type)
    }
  }, []); 


  const saveOrder = async () => {
    const infoOrder={
    "NoiDungChi": khoanchimoi.NoiDungChi,
    "SoTien": khoanchimoi.SoTien,
    "HinhThucChi": khoanchimoi.HinhThucChi,
    "NguoiChi": khoanchimoi.NguoiChi,
    "TinhTrang": khoanchimoi.TinhTrang,
    "CreatedBy": moment(new Date(), 'DD-MM-YYYY').format().substring(0, 10)+" "+ moment(new Date(), 'DD-MM-YYYY').format().substring(11, 19),
    "Modified": moment(new Date(), 'DD-MM-YYYY').format().substring(0, 10)+" "+ moment(new Date(), 'DD-MM-YYYY').format().substring(11, 19),
    "ModifiedBy": 1,
    "Note": khoanchimoi.Note,
    };
    let newOrder= await POST(LinkApi.chi_add, infoOrder)
    .then(response => {
      window.location.reload()
    })
    .catch(error => console.log('error2', error)) 
    
    //console.log(newOrder)
  };

  const updateOrder = async () => {
    const infoOrder={
      "ID":changeKhoanChiMoi.ID,
      "NoiDungChi": changeKhoanChiMoi.hoten,
      "SoTien": changeKhoanChiMoi.SoTien,
      "HinhThucChi": changeKhoanChiMoi.HinhThucChi,
      "NguoiChi": changeKhoanChiMoi.NguoiChi,
      "TinhTrang": changeKhoanChiMoi.TinhTrang,
      "Created": moment(new Date(), 'DD-MM-YYYY').format().substring(0, 10)+" "+ moment(new Date(), 'DD-MM-YYYY').format().substring(11, 19),
      "CreatedBy": 1,
      "Modified": null,
      "ModifiedBy": 0,
      "Note": changeKhoanChiMoi.Note,
        };
      let newOrder= await POST(LinkApi.chi_update, infoOrder)
      .then(response => {
        window.location.reload()
      })
      .catch(error => console.log('error2', error))  
  };

  return (
    <div className={classes.root} style={{ padding: 10, marginLeft: 250 }}>
      {
      type==="editMAWB"
        ?<h5 style={{ fontSize: 16, marginTop: 10, fontFamily: 'sans-serif', color: 'white', backgroundColor: '#3f51b5', padding: 15 }}>Sửa khoản chi</h5>
        :<h5 style={{ fontSize: 16, marginTop: 10, fontFamily: 'sans-serif', color: 'white', backgroundColor: '#3f51b5', padding: 15 }}>Thêm khoản chi mới</h5>
      }
      <Divider style={{ fontSize: 16, marginTop: 10, color: 'black' }} />
      <Grid container spacing={1} justify="center" alignItems="center">        
        <Grid item xs={10} style={{ backgroundColor: '', borderRadius: 4 }}>        
          <Grid item xs={12} style={{ height: 250, backgroundColor: '', paddingTop: 10, borderRadius: 4 }}>
            <Grid item xs={12} style={{ border: '1px solid grey', padding: 1, backgroundColor: 'white', height: 220, borderRadius: 4 }}>
              <InputLabelCustom label={'Nội dung chi'} value={khoanchimoi.NoiDungChi} onChange={e => changeKhoanChiMoi({ NoiDungChi: e.target.value })} 
                customstyle={null} multiline={false} rowsMax={1} />              
              <InputLabelCustom label={'Số tiền'} value={khoanchimoi.SoTien} onChange={e => changeKhoanChiMoi({ SoTien: e.target.value })} 
                customstyle={null} multiline={false} rowsMax={1} /> 
              <FormControlLabel
                fullWidth
                //className={classes.formControl}
                label={<Typography style={{ marginLeft: 0, width: 110, fontFamily: 'sans-serif', fontSize: 12, alignSelf: "flex-start", paddingLeft: 0, textAlign: 'start', }}>{'Hình thức chi'}</Typography>}
                style={{ backgroundColor: ''}}
                labelPlacement="start"
                control={( 
                  <TextField
                    select
                    size="small"
                    InputProps={{ style: { fontSize: 14, backgroundColor: 'white' } }}
                    style={{ width: 400, marginLeft: 10, fontSize: 14, backgroundColor: 'white' }}
                    //value={httt}
                    value={khoanchimoi.HinhThucChi}
                    onChange={e => changeKhoanChiMoi({ HinhThucChi: e.target.value })} 
                    variant="outlined"
                  >
                    {httt.map((option) => (
                      <MenuItem key={option.key} value={option.ht}>
                        {option.ht}
                      </MenuItem>
                    ))}
                  </TextField> 
                )}
              />  
              <InputLabelCustom label={'Ghi chú'} value={khoanchimoi.Note} onChange={e => changeKhoanChiMoi({ Note: e.target.value })} 
                customstyle={null} multiline={false} rowsMax={1} />           
            </Grid>
          </Grid>
        </Grid>


        {type==="newMAWB" 
        ?(<Button color="secondary" style={{ marginTop: 10, color: 'white', backgroundColor: '#3f51b5', padding: 10 }} onClick={saveOrder}>SAVE</Button>)
        :(<Button color="secondary" style={{ marginTop: 10, color: 'white', backgroundColor: '#3f51b5', padding: 10 }} onClick={updateOrder}>UPDATE</Button>)}
      </Grid>
    </div>    
  );
};


const useStyles = makeStyles(() => ({
  root: { 
    width: 1150,
    backgroundColor: 'rgb(240, 240, 240)',
  },
  inputRoot: {
    color: 'green',
    fontSize: 12,
    height: 120
  },
  paper: {
    padding: 2,
    textAlign: 'center',
    color: 'gray',
  },
  formControlLabel: {
    width: 85,
    fontFamily: 'sans-serif',
    fontSize: 12,
    alignSelf: "flex-end",
    paddingLeft: 5,
    textAlign: 'start',
    backgroundColor: ''
  },
  formControl: {
    width: 530,
    margin: 5,
    fontFamily: 'sans-serif',
    fontSize: 13,
    alignSelf: "center",
    backgroundColor: ''
  },
  table: {
    minWidth: 650,
  },
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
  },
};


const Khoanchimoi = ({ className, type, item, ...rest }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [opendialog, setOpendialog] = React.useState(false);
  const [opensides, setopenside] = useState(false);

 

  return (
    <Provider store={store}>
      <Form type={type} item={item} />
    </Provider>
  );
};

Khoanchimoi.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  item: PropTypes.object
};

export default Khoanchimoi;
