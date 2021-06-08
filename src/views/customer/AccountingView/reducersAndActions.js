import { combineReducers } from "redux";

//REDUCER
// Set up reducer and switch
const reducer = (
  state = {
    result: "buffy",
    count: 0,
    field: "whaddup",
    form: {
      name: "bob",
      age: 21,
      home: "UT"
    },
    thongtindonhang: {
      ID:0,
      hoten: "",
      sodienthoai: "",
      diachi: "",
      chitietdonhang: "",
      loichuc:"",
      tongsotien: "",
      shipestimate: "",
      shipthat: "",
      deleverynote: "",
      note: "",
      thanhtoan: "",
    },
    pay: {
      ID:0,
      OrderId: "",
      PaymentType: "",
      Amount: 0,
      PayDate: "",
      Cashier: "",
      Created: "",
      CreatedBy: "",
      Modified: "",
      ModifiedBy: "",
      Note: "",
      OldId: ""
    },
    bangiaotien: {
      ID:0,
      NgayBanGiao: "",
      SoTienPhaiBG: 0,
      SoTienBanGiao: 0,
      SoTienNo: 0,
      NguoiBG: "",
      NguoiNhanBG: "",
      TinhTrang: "",
      Created: "",
      CreatedBy: "",
      Modified: "",
      ModifiedBy: "",
      Note:""
    },
    khoanchimoi: {
      ID:0,
      NoiDungChi: "",
      SoTien: 0,
      HinhThucChi: "",
      NguoiChi: "",
      TinhTrang: "",
      Created: "",
      CreatedBy: "",
      Modified: "",
      ModifiedBy: "",
      Note:""
    }
  },
  action
) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        ...state,
        result: state.result === "the slayer" ? "buffy" : "the slayer"
      };
    case "INCREASE_COUNT":
      return {
        ...state,
        count: state.count + 1
      };
    case "UPDATE_FIELD":
      return {
        ...state,
        field: action.payload
      };
    case "UPDATE_FORM":
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload
        }
      };
      case "UPDATE_Thongtin":
      return {
        ...state,
        thongtindonhang: {
          ...state.thongtindonhang,
          ...action.payload
        }
      };
      case "UPDATE_Pay":
      return {
        ...state,
        pay: {
          ...state.pay,
          ...action.payload
        }
      };
      case "UPDATE_khoanchimoi":
      return {
        ...state,
        khoanchimoi: {
          ...state.khoanchimoi,
          ...action.payload
        }
      };
      case "UPDATE_bangiaotien":
        return {
          ...state,
          bangiaotien: {
            ...state.bangiaotien,
            ...action.payload
          }
        };
    default:
      return state;
  }
};

// ACTIONS
// combined action and reducer files to easily develop little projects like this one
const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};

const increaseCount = () => dispatch => {
  dispatch({
    type: "INCREASE_COUNT"
  });
};

const updateField = field => dispatch => {
  dispatch({
    type: "UPDATE_FIELD",
    payload: field
  });
};

const updateForm = form => dispatch => {
  dispatch({
    type: "UPDATE_FORM",
    payload: form
  });
};

const updateDonHang = thongtindonhang => dispatch => {
  dispatch({
    type: "UPDATE_Thongtin",
    payload: thongtindonhang
  });
};

const updatePay = pay => dispatch => {
  dispatch({
    type: "UPDATE_Pay",
    payload: pay
  });
};
const updateKhoanChiMoi = khoanchimoi => dispatch => {
  dispatch({
    type: "UPDATE_khoanchimoi",
    payload: khoanchimoi
  });
};

const updateBanGiaoTien = bangiaotien => dispatch => {
  dispatch({
    type: "UPDATE_bangiaotien",
    payload: bangiaotien
  });
};
export { simpleAction, increaseCount, updateField, updateForm, updateDonHang, updatePay, updateKhoanChiMoi, updateBanGiaoTien };

//COMBINE REDUCERS
// added combine reducers to this file to easily develop little projects like this one
export default combineReducers({
  reducer
});
