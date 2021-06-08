import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PropTypes from 'prop-types';
import moment from 'moment';
import { IconButton, Button } from '@material-ui/core';

const shipperinfo = 'Cong ty AnhCrua';
function createMarkup(item) {
  return { __html: `<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
  <table style="height: 581px; width: 1153px;" width="1157">
  <tbody>
  <tr style="height: 17px;">
  <td style="width: 5.2125px; height: 17px;">&nbsp;</td>
  <td style="width: 98.8125px; height: 17px;">&nbsp;</td>
  <td style="width: 146.812px; height: 17px;">&nbsp;</td>
  <td style="width: 370.012px; height: 17px;">&nbsp;</td>
  <td style="width: 154.012px; height: 17px;">&nbsp;</td>
  <td style="width: 131.212px; height: 17px;">&nbsp;</td>
  <td style="width: 172.012px; height: 17px;">&nbsp;</td>
  <td style="width: 25.6125px; height: 17px;">&nbsp;</td>
  </tr>
  <tr style="height: 10px;">
  <td style="width: 5.2125px; height: 10px;">&nbsp;</td>
  <td style="width: 251.212px; height: 10px;" colspan="2"><img style="display: block; margin-left: auto; margin-right: auto;" src="http://bantheokey.autobot.host/tobi.png" alt="" /></td>
  <td style="width: 529.612px; height: 10px;" colspan="2">
  <p>86 Đường Bờ S&ocirc;ng S&eacute;t&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hotline: 0943439639</p>
  <p>T&acirc;n Mai, Ho&agrave;ng Mai, H&agrave; Nội&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bussiness: 0973098282</p>
  <p>&nbsp;</p>
  <h3 style="text-align: center;">H&Oacute;A ĐƠN B&Aacute;N H&Agrave;NG</h3>
  </td>
  <td style="width: 308.812px; height: 10px;" colspan="2">
  <p style="text-align: right;">l<a href="mailto:lienhetobicakes@gmail.com">ienhetobicakes@gmail.com</a></p>
  <p style="text-align: right;"><a href="http://www.banhsinhnhatdocdao.com/">www.banhsinhnhatdocdao.com</a></p>
  <p style="text-align: right;">&nbsp;</p>
  <h3 style="text-align: right;">&nbsp;</h3>
  </td>
  <td style="width: 25.6125px; height: 10px;">&nbsp;</td>
  </tr>
  <tr style="height: 52px;">
  <td style="width: 5.2125px; height: 33px;">&nbsp;</td>
  <td style="width: 98.8125px; height: 33px;">
  <p>ID NUMBER:</p>
  </td>
  <td style="width: 146.812px; height: 33px;">
  <p></p>
  </td>
  <td style="width: 370.012px; height: 33px;">
  <p>Địa chỉ giao h&agrave;ng:</p>
  </td>
  <td style="width: 154.012px; height: 33px;">
  <p style="text-align: center;">ĐT kh&aacute;ch h&agrave;ng:</p>
  </td>
  <td style="width: 131.212px; height: 33px;">
  <p style="text-align: center;">Giờ giao h&agrave;ng:</p>
  </td>
  <td style="width: 172.012px; height: 33px;">
  <p>${item.DeliveryNote}</p>
  </td>
  <td style="width: 25.6125px; height: 33px;">&nbsp;</td>
  </tr>
  <tr style="height: 73px;">
  <td style="width: 5.2125px; height: 47px;">&nbsp;</td>
  <td style="width: 98.8125px; height: 47px;">
  <p>KH&Aacute;CH H&Agrave;NG:</p>
  </td>
  <td style="width: 146.812px; height: 47px;">
  <p>${item.CustomerName}</p>
  </td>
  <td style="width: 370.012px; height: 47px;">
  <p>${item.CustomerAddress}</p>
  </td>
  <td style="width: 154.012px; height: 47px;">
  <p style="text-align: center;">${item.CustomerPhone}</p>
  </td>
  <td style="width: 131.212px; height: 47px;">
  <p>Ng&agrave;y lập h&oacute;a đơn:</p>
  </td>
  <td style="width: 172.012px; height: 47px;">
  <p>${moment(new Date(), 'DD-MM-YYYY').format().substring(0, 10)}</p>
  </td>
  <td style="width: 25.6125px; height: 47px;">&nbsp;</td>
  </tr>
  <tr style="height: 10px;">
  <td style="width: 5.2125px; height: 10px;">&nbsp;</td>
  <td style="width: 98.8125px; height: 10px; border-top: 1px solid #000000; border-bottom: 1px solid #000000; background-color: dodgerblue; color: white;">
  <p><strong>Ngày giao</strong></p>
  </td>
  <td style="width: 522.412px; height: 10px; border-top: 1px solid #000000; border-bottom: 1px solid #000000; background-color: dodgerblue; color: white;" colspan="2">
  <p style="text-align: center;"><strong>M&ocirc; tả</strong></p>
  </td>
  <td style="width: 290.812px; text-align: center; height: 10px; border-top: 1px solid #000000; border-bottom: 1px solid #000000; background-color: dodgerblue; color: white;" colspan="2">
  <p style="text-align: center;"><strong>Chiết khấu</strong></p>
  </td>
  <td style="width: 172.012px; text-align: center; height: 10px; border-top: 1px solid #000000; border-bottom: 1px solid #000000; background-color: dodgerblue; color: white;">
  <p><strong>Tổng</strong></p>
  </td>
  <td style="width: 25.6125px; height: 10px;">&nbsp;</td>
  </tr>
  <tr style="height: 73px;">
  <td style="width: 5.2125px; height: 106px;">&nbsp;</td>
  <td style="font-weight: 400; width: 98.8125px; height: 106px;">
  <p>${item.Note}</p>
  </td>
  <td style="width: 522.412px; height: 106px;" colspan="2">
  <p>${item.Description}</p>
  </td>
  <td style="width: 290.812px; height: 106px; text-align: center;" colspan="2">10000d</td>
  <td style="width: 172.012px; text-align: center; height: 106px;">
  <p>${item.PriceTotal} ₫&nbsp;</p>
  </td>
  <td style="width: 25.6125px; height: 106px;">&nbsp;</td>
  </tr>
  <tr style="height: 52px;">
  <td style="width: 5.2125px; height: 52px;">&nbsp;</td>
  <td style="width: 98.8125px; height: 52px; border-top: 1px solid #000000; border-bottom: 1px solid #000000;">
  <p><strong>Lời ch&uacute;c</strong></p>
  </td>
  <td style="width: 522.412px; height: 52px; border-top: 1px solid #000000; border-bottom: 1px solid #000000;" colspan="2">
  <p>${item.LoiChuc}</p>
  </td>
  <td style="width: 154.012px; height: 52px; border-top: 1px solid #000000; border-bottom: 1px solid #000000;">&nbsp;</td>
  <td style="width: 131.212px; height: 52px; border-top: 1px solid #000000; border-bottom: 1px solid #000000;">&nbsp;</td>
  <td style="width: 172.012px; height: 52px; border-top: 1px solid #000000; border-bottom: 1px solid #000000;">&nbsp;</td>
  <td style="width: 25.6125px; height: 52px;">&nbsp;</td>
  </tr>
  <tr style="height: 52px;">
  <td style="width: 5.2125px; height: 52px;">&nbsp;</td>
  <td style="width: 98.8125px; height: 52px;">&nbsp;</td>
  <td style="width: 146.812px; text-align: center; height: 52px;">&nbsp;</td>
  <td style="width: 370.012px; height: 52px;">&nbsp;</td>
  <td style="width: 154.012px; height: 52px;">&nbsp;</td>
  <td style="width: 131.212px; height: 52px;">
  <p><strong>Vận chuyển</strong></p>
  </td>
  <td style="width: 172.012px; height: 52px;">
  <p style="text-align: center;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${item.ShipEstimate} ₫</p>
  </td>
  <td style="width: 25.6125px; height: 52px;">&nbsp;</td>
  </tr>
  <tr style="height: 52px;">
  <td style="width: 5.2125px; height: 52px;">&nbsp;</td>
  <td style="width: 626.812px; height: 52px;" colspan="3">
  <p>THANH TO&Aacute;N TO&Agrave;N BỘ CHO TOBICAKES- B&Aacute;NH CHO MỌI &Yacute; TƯỞNG</p>
  </td>
  <td style="width: 154.012px; height: 52px;">&nbsp;</td>
  <td style="width: 131.212px; height: 52px;">
  <p><strong>Đ&atilde; trả</strong></p>
  </td>
  <td style="width: 172.012px; height: 52px;">
  <p style="text-align: center;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ___ ₫</p>
  </td>
  <td style="width: 25.6125px; height: 52px;">&nbsp;</td>
  </tr>
  <tr style="height: 52px;">
  <td style="width: 5.2125px; height: 52px;">&nbsp;</td>
  <td style="width: 626.812px; height: 52px;" colspan="3">
  <p>VUI L&Ograve;NG KIỂM TRA SẢN PHẨM TRƯỚC KHI NHẬN H&Agrave;NG</p>
  </td>
  <td style="width: 154.012px; height: 52px;">&nbsp;</td>
  <td style="width: 131.212px; height: 52px;">
  <p><strong>THANH TO&Aacute;N</strong></p>
  </td>
  <td style="width: 172.012px; height: 52px;">
  <p style="text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ___ ₫</p>
  </td>
  <td style="width: 25.6125px; height: 52px;">&nbsp;</td>
  </tr>
  <tr style="height: 52px;">
  <td style="width: 5.2125px; height: 52px;">&nbsp;</td>
  <td style="width: 251.212px; height: 52px;" colspan="2">
  <p>Kh&aacute;ch h&agrave;ng k&yacute; nhận</p>
  </td>
  <td style="width: 370.012px; height: 52px;">
  <p>Đơn vị giao h&agrave;ng x&aacute;c nhận</p>
  </td>
  <td style="width: 154.012px; height: 52px;">&nbsp;</td>
  <td style="width: 131.212px; height: 52px;">&nbsp;</td>
  <td style="width: 172.012px; height: 52px;">&nbsp;</td>
  <td style="width: 25.6125px; height: 52px;">&nbsp;</td>
  </tr>
  <tr style="height: 17px;">
  <td style="width: 5.2125px; height: 17px;">&nbsp;</td>
  <td style="width: 98.8125px; height: 17px;">&nbsp;</td>
  <td style="width: 146.812px; height: 17px;">&nbsp;</td>
  <td style="width: 370.012px; height: 17px;">&nbsp;</td>
  <td style="width: 154.012px; height: 17px;">&nbsp;</td>
  <td style="width: 131.212px; height: 17px;">&nbsp;</td>
  <td style="width: 172.012px; height: 17px;">&nbsp;</td>
  <td style="width: 25.6125px; height: 17px;">&nbsp;</td>
  </tr>
  <tr style="height: 17px;">
  <td style="width: 5.2125px; height: 17px;">&nbsp;</td>
  <td style="width: 98.8125px; height: 17px;">&nbsp;</td>
  <td style="width: 146.812px; height: 17px;">&nbsp;</td>
  <td style="width: 370.012px; height: 17px;">&nbsp;</td>
  <td style="width: 154.012px; height: 17px;">&nbsp;</td>
  <td style="width: 131.212px; height: 17px;">&nbsp;</td>
  <td style="width: 172.012px; height: 17px;">&nbsp;</td>
  <td style="width: 25.6125px; height: 17px;">&nbsp;</td>
  </tr>
  </tbody>
  </table>
  <p><br /><br /></p>
  ` };
}

function createData(name, calories, fat, carbs, protein, protein1, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    protein1,
    price,
    history: [
      { date: 'NO3820072040', customerId: 'Glory Home Food', amount: 'Monrovia' },
      { date: 'NO3820072041', customerId: 'Forza Milan Co.ltd', amount: 'Monrovia' },
      { date: 'NO3820072042', customerId: 'Nguyen Thu Thuy', amount: 'Monrovia' },
      { date: 'NO3820072043', customerId: 'AnBlog Limited', amount: 'Monrovia' },
    ],
  };
}

const rows = [
  createData('131-55293884', '25/02/2021', 'HAN - ICN', 'Khai Minh Co.Ltd - Da Nang Branch', 4.0, '401.99/400.000'),
  createData('180-59856263', '25/02/2021', 'HAN - ICN', 'KTL Korea', 4.0, '1302.99/1300.000'),
  createData('161-23521425', '25/02/2021', 'HAN - ICN', 'Samsung Co.Ltd', 6.0, '20.99/20.000'),
  createData('180-15241236', '25/02/2021', 'HAN - ICN', 'BPI Co.ltd', 4.0, '750.99/750.000'),
  createData('180-55293884', '25/02/2021', 'HAN - ICN', 'Khai Minh Co.Ltd - Da Nang Branch', 3.0, '1020.99/1010.000'),
];
const InvoiceFormat = ({number, item}) => {
  console.log("PrintHAWB", item)
  const componentRef = useRef();
  return (
    <div style={{ height: 500 }}>
      <ReactToPrint
        trigger={() => <Button style={{ marginLeft: 0, marginTop: 10 }} color="primary" variant="contained">Print</Button>}
        content={() => componentRef.current}
      />
      <div dangerouslySetInnerHTML={createMarkup(item)} style={{ height: 100 }} ref={componentRef} />
    </div>
  );
};

InvoiceFormat.propTypes = {
  number: PropTypes.number,
  item: PropTypes.object
};

export default InvoiceFormat;
