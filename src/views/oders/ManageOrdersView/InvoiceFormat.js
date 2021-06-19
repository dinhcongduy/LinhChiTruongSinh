import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PropTypes from 'prop-types';
import moment from 'moment';
import { IconButton, Button } from '@material-ui/core';

const shipperinfo = 'Cong ty AnhCrua';
function createMarkup(item) {
  return {
    __html: `<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
    <table style="height: 517px; width: 1153px;" width="1157">
    <tbody>
    <tr style="height: 17px;">
    <td style="width: 3.0125px; height: 17px;">&nbsp;</td>
    <td style="width: 98.225px; height: 17px;">&nbsp;</td>
    <td style="width: 172.4px; height: 17px;">&nbsp;</td>
    <td style="width: 324.75px; height: 17px;">&nbsp;</td>
    <td style="width: 196.45px; height: 17px;">&nbsp;</td>
    <td style="width: 90.2125px; height: 17px;">&nbsp;</td>
    <td style="width: 200.462px; height: 17px;">&nbsp;</td>
    <td style="width: 19.0875px; height: 17px;">&nbsp;</td>
    </tr>
    <tr style="height: 10px;">
    <td style="width: 3.0125px; height: 10px;">&nbsp;</td>
    <td style="width: 276.225px; height: 10px;" colspan="2"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://theme.hstatic.net/200000274673/1000690465/14/logo.png?v=310" alt="" width="138" height="142" /></td>
    <td style="width: 526.8px; height: 10px;" colspan="2">
    <p>Địa chỉ:</p>
    <p>- Trụ sở: Lầu 1, 121 L&ecirc; Văn Sỹ, Phường 13, Ph&uacute; Nhuận, Tp. Hồ Ch&iacute; Minh</p>
    <div class="pcontact-shop-address">- CN: CT5C, KĐT Văn Kh&ecirc;, P. La Kh&ecirc;, Q. H&agrave; Đ&ocirc;ng, H&agrave; Nội</div>
    <p>&nbsp;</p>
    <h3 style="text-align: center;">H&Oacute;A ĐƠN B&Aacute;N H&Agrave;NG</h3>
    </td>
    <td style="width: 296.275px; height: 10px;" colspan="2">
    <div class="pcontact-shop-tel">Phone: <a href="tel:0937 600  688">0937 600 688</a></div>
    <p>Email: <a href="mailto:suckhoe@linhchitruongsinh.vn">suckhoe@linhchitruongsinh.vn</a></p>
    <p>Website: <a href="https://linhchitruongsinh.com/">https://linhchitruongsinh.com/</a></p>
    <p style="text-align: right;">&nbsp;</p>
    <h3 style="text-align: right;">&nbsp;</h3>
    </td>
    <td style="width: 19.0875px; height: 10px;">&nbsp;</td>
    </tr>
    <tr style="height: 52px;">
    <td style="width: 3.0125px; height: 33px;">&nbsp;</td>
    <td style="width: 98.225px; height: 33px;">
    <p>ID NUMBER:</p>
    </td>
    <td style="width: 172.4px; height: 33px;">
    <p>&nbsp;</p>
    </td>
    <td style="width: 324.75px; height: 33px;">
    <p>Địa chỉ giao h&agrave;ng:</p>
    </td>
    <td style="width: 196.45px; height: 33px;">
    <p style="text-align: center;">ĐT kh&aacute;ch h&agrave;ng:</p>
    </td>
    <td style="width: 90.2125px; height: 33px;">
    <p style="text-align: center;">Giờ giao h&agrave;ng:</p>
    </td>
    <td style="width: 200.462px; height: 33px;">
    <p>${item.DeliveryNote}</p>
    </td>
    <td style="width: 19.0875px; height: 33px;">&nbsp;</td>
    </tr>
    <tr style="height: 73px;">
    <td style="width: 3.0125px; height: 47px;">&nbsp;</td>
    <td style="width: 98.225px; height: 47px;">
    <p>KH&Aacute;CH H&Agrave;NG:</p>
    </td>
    <td style="width: 172.4px; height: 47px;">
    <p>${item.CustomerName}</p>
    </td>
    <td style="width: 324.75px; height: 47px;">
    <p>${item.CustomerAddress}</p>
    </td>
    <td style="width: 196.45px; height: 47px;">
    <p style="text-align: center;">${item.CustomerPhone}</p>
    </td>
    <td style="width: 90.2125px; height: 47px;">
    <p>Ng&agrave;y lập h&oacute;a đơn:</p>
    </td>
    <td style="width: 200.462px; height: 47px;">
    <p>${moment(new Date(), 'DD-MM-YYYY')
      .format()
      .substring(0, 10)}</p>
    </td>
    <td style="width: 19.0875px; height: 47px;">&nbsp;</td>
    </tr>
    <tr style="height: 10px;">
    <td style="width: 3.0125px; height: 10px;">&nbsp;</td>
    <td style="width: 98.225px; height: 10px; border-top: 1px solid #000000; border-bottom: 1px solid #000000; background-color: dodgerblue; color: white;">
    <p><strong>Ngày giao</strong></p>
    </td>
    <td style="width: 502.75px; height: 10px; border-top: 1px solid #000000; border-bottom: 1px solid #000000; background-color: dodgerblue; color: white;" colspan="2">
    <p style="text-align: center;"><strong>M&ocirc; tả</strong></p>
    </td>
    <td style="width: 292.263px; text-align: center; height: 10px; border-top: 1px solid #000000; border-bottom: 1px solid #000000; background-color: dodgerblue; color: white;" colspan="2">
    <p style="text-align: center;"><strong>Chiết khấu</strong></p>
    </td>
    <td style="width: 200.462px; text-align: center; height: 10px; border-top: 1px solid #000000; border-bottom: 1px solid #000000; background-color: dodgerblue; color: white;">
    <p><strong>Tổng</strong></p>
    </td>
    <td style="width: 19.0875px; height: 10px;">&nbsp;</td>
    </tr>
    <tr style="height: 73px;">
    <td style="width: 3.0125px; height: 106px;">&nbsp;</td>
    <td style="font-weight: 400; width: 98.225px; height: 106px;">
    <p>${item.Note}</p>
    </td>
    <td style="width: 502.75px; height: 106px;" colspan="2">
    <p>${item.Description}</p>
    </td>
    <td style="width: 292.263px; height: 106px; text-align: center;" colspan="2">10000d</td>
    <td style="width: 200.462px; text-align: center; height: 106px;">
    <p>${item.PriceTotal} ₫&nbsp;</p>
    </td>
    <td style="width: 19.0875px; height: 106px;">&nbsp;</td>
    </tr>
    <tr style="height: 52px;">
    <td style="width: 3.0125px; height: 52px;">&nbsp;</td>
    <td style="width: 98.225px; height: 52px;">&nbsp;</td>
    <td style="width: 172.4px; text-align: center; height: 52px;">&nbsp;</td>
    <td style="width: 324.75px; height: 52px;">&nbsp;</td>
    <td style="width: 196.45px; height: 52px;">&nbsp;</td>
    <td style="width: 90.2125px; height: 52px;">
    <p><strong>Vận chuyển</strong></p>
    </td>
    <td style="width: 200.462px; height: 52px;">
    <p style="text-align: center;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${
      item.ShipEstimate
    } ₫</p>
    </td>
    <td style="width: 19.0875px; height: 52px;">&nbsp;</td>
    </tr>
    <tr style="height: 52px;">
    <td style="width: 3.0125px; height: 52px;">&nbsp;</td>
    <td style="width: 606.575px; height: 52px;" colspan="3">
    <p>THANH TO&Aacute;N TO&Agrave;N BỘ CHO LINH CHI TRƯỜNG SINH</p>
    </td>
    <td style="width: 196.45px; height: 52px;">&nbsp;</td>
    <td style="width: 90.2125px; height: 52px;">&nbsp;</td>
    <td style="width: 200.462px; height: 52px;">&nbsp;</td>
    <td style="width: 19.0875px; height: 52px;">&nbsp;</td>
    </tr>
    <tr style="height: 52px;">
    <td style="width: 3.0125px; height: 52px;">&nbsp;</td>
    <td style="width: 606.575px; height: 52px;" colspan="3">
    <p>VUI L&Ograve;NG KIỂM TRA SẢN PHẨM TRƯỚC KHI NHẬN H&Agrave;NG</p>
    </td>
    <td style="width: 196.45px; height: 52px;">&nbsp;</td>
    <td style="width: 90.2125px; height: 52px;">
    <p><strong>THANH TO&Aacute;N</strong></p>
    </td>
    <td style="width: 200.462px; height: 52px;">
    <p style="text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ___ ₫</p>
    </td>
    <td style="width: 19.0875px; height: 52px;">&nbsp;</td>
    </tr>
    <tr style="height: 52px;">
    <td style="width: 3.0125px; height: 52px;">&nbsp;</td>
    <td style="width: 276.225px; height: 52px;" colspan="2">
    <p>Kh&aacute;ch h&agrave;ng k&yacute; nhận</p>
    </td>
    <td style="width: 324.75px; height: 52px;">
    <p>Đơn vị giao h&agrave;ng x&aacute;c nhận</p>
    </td>
    <td style="width: 196.45px; height: 52px;">&nbsp;</td>
    <td style="width: 90.2125px; height: 52px;">&nbsp;</td>
    <td style="width: 200.462px; height: 52px;">&nbsp;</td>
    <td style="width: 19.0875px; height: 52px;">&nbsp;</td>
    </tr>
    <tr style="height: 17px;">
    <td style="width: 3.0125px; height: 17px;">&nbsp;</td>
    <td style="width: 98.225px; height: 17px;">&nbsp;</td>
    <td style="width: 172.4px; height: 17px;">&nbsp;</td>
    <td style="width: 324.75px; height: 17px;">&nbsp;</td>
    <td style="width: 196.45px; height: 17px;">&nbsp;</td>
    <td style="width: 90.2125px; height: 17px;">&nbsp;</td>
    <td style="width: 200.462px; height: 17px;">&nbsp;</td>
    <td style="width: 19.0875px; height: 17px;">&nbsp;</td>
    </tr>
    <tr style="height: 17px;">
    <td style="width: 3.0125px; height: 17px;">&nbsp;</td>
    <td style="width: 98.225px; height: 17px;">&nbsp;</td>
    <td style="width: 172.4px; height: 17px;">&nbsp;</td>
    <td style="width: 324.75px; height: 17px;">&nbsp;</td>
    <td style="width: 196.45px; height: 17px;">&nbsp;</td>
    <td style="width: 90.2125px; height: 17px;">&nbsp;</td>
    <td style="width: 200.462px; height: 17px;">&nbsp;</td>
    <td style="width: 19.0875px; height: 17px;">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    <p><br /><br /></p>
    <p>`
  };
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
      {
        date: 'NO3820072040',
        customerId: 'Glory Home Food',
        amount: 'Monrovia'
      },
      {
        date: 'NO3820072041',
        customerId: 'Forza Milan Co.ltd',
        amount: 'Monrovia'
      },
      {
        date: 'NO3820072042',
        customerId: 'Nguyen Thu Thuy',
        amount: 'Monrovia'
      },
      { date: 'NO3820072043', customerId: 'AnBlog Limited', amount: 'Monrovia' }
    ]
  };
}

const rows = [
  createData(
    '131-55293884',
    '25/02/2021',
    'HAN - ICN',
    'Khai Minh Co.Ltd - Da Nang Branch',
    4.0,
    '401.99/400.000'
  ),
  createData(
    '180-59856263',
    '25/02/2021',
    'HAN - ICN',
    'KTL Korea',
    4.0,
    '1302.99/1300.000'
  ),
  createData(
    '161-23521425',
    '25/02/2021',
    'HAN - ICN',
    'Samsung Co.Ltd',
    6.0,
    '20.99/20.000'
  ),
  createData(
    '180-15241236',
    '25/02/2021',
    'HAN - ICN',
    'BPI Co.ltd',
    4.0,
    '750.99/750.000'
  ),
  createData(
    '180-55293884',
    '25/02/2021',
    'HAN - ICN',
    'Khai Minh Co.Ltd - Da Nang Branch',
    3.0,
    '1020.99/1010.000'
  )
];
const InvoiceFormat = ({ number, item }) => {
  console.log('PrintHAWB', item);
  const componentRef = useRef();
  return (
    <div style={{ height: 500 }}>
      <ReactToPrint
        trigger={() => (
          <Button
            style={{ marginLeft: 0, marginTop: 10 }}
            color="primary"
            variant="contained"
          >
            Print
          </Button>
        )}
        content={() => componentRef.current}
      />
      <div
        dangerouslySetInnerHTML={createMarkup(item)}
        style={{ height: 100 }}
        ref={componentRef}
      />
    </div>
  );
};

InvoiceFormat.propTypes = {
  number: PropTypes.number,
  item: PropTypes.object
};

export default InvoiceFormat;
