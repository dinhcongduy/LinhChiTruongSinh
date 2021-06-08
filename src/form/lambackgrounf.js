import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PropTypes from 'prop-types';
import { Button, Box, TableRow } from '@material-ui/core';
import index1 from './HouseAWB.jpg';
import index from './background1.jpg';

const shipperinfo = 'Cong ty AnhCrua';
function createMarkup() {
  return { __html: `<html>
  <head><meta http-equiv=Content-Type content="text/html; charset=UTF-8">
  <style type="text/css">
  <!--
  span.cls_002{font-family:Arial,serif;font-size:6.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_002{font-family:Arial,serif;font-size:6.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_006{font-family:Courier New,serif;font-size:10.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_006{font-family:Courier New,serif;font-size:10.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_003{font-family:Arial,serif;font-size:11.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  div.cls_003{font-family:Arial,serif;font-size:11.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  span.cls_004{font-family:Arial,serif;font-size:5.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_004{font-family:Arial,serif;font-size:5.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_005{font-family:Arial,serif;font-size:6.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  div.cls_005{font-family:Arial,serif;font-size:6.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  span.cls_007{font-family:Arial,serif;font-size:10.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  div.cls_007{font-family:Arial,serif;font-size:10.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  -->
  </style>
  <script type="text/javascript" src="224826d0-58d6-11eb-8b25-0cc47a792c0a_id_224826d0-58d6-11eb-8b25-0cc47a792c0a_files/wz_jsgraphics.js"></script>
  </head>
  <body>
  <div style="position:absolute;left:50%;margin-left:-298px;top:0px;width:596px;height:842px;border-style:outset;overflow:hidden">
  <div style="position:absolute;left:0px;top:0px">
  <img src="http://bantheokey.autobot.host/background1.png" width=596 height=842></div>
  <div style="position:absolute;left:52.26px;top:30.50px" class="cls_002"><span class="cls_002">Shipper's Name and Address</span></div>
  <div style="position:absolute;left:205.08px;top:30.50px" class="cls_002"><span class="cls_002">Shipper's Account Number</span></div>
  <div style="position:absolute;left:311.46px;top:30.50px" class="cls_002"><span class="cls_002">Not Negotiable</span></div>
  <div style="position:absolute;left:50.06px;top:41.54px" class="cls_006"><span class="cls_006">**DEMO VERSION**</span></div>
  <div style="position:absolute;left:311.46px;top:38.60px" class="cls_003"><span class="cls_003">House Air Waybill</span></div>
  <div style="position:absolute;left:311.46px;top:67.00px" class="cls_002"><span class="cls_002">Issued by</span></div>
  <div style="position:absolute;left:311.46px;top:92.00px" class="cls_002"><span class="cls_002">Copies 1, 2 and 3 of this Air Waybill are originals and have the same validity.</span></div>
  <div style="position:absolute;left:52.26px;top:102.50px" class="cls_002"><span class="cls_002">Consignee's Name and Address</span></div>
  <div style="position:absolute;left:201.07px;top:102.50px" class="cls_002"><span class="cls_002">Consignee's Account Number</span></div>
  <div style="position:absolute;left:311.46px;top:106.00px" class="cls_002"><span class="cls_002">It is agreed that the goods described herein are accepted in apparent good order and condition</span></div>
  <div style="position:absolute;left:311.46px;top:113.00px" class="cls_002"><span class="cls_002">(except  as  noted)  for  carriage  SUBJECT  TO  THE  CONDITIONS  OF  CONTRACT  ON  THE</span></div>
  <div style="position:absolute;left:311.46px;top:120.00px" class="cls_002"><span class="cls_002">REVERSE HEREOF. ALL GOODS MAY BE CARRIED BY ANY OTHER MEANS INCLUDING</span></div>
  <div style="position:absolute;left:311.46px;top:127.00px" class="cls_002"><span class="cls_002">ROAD  OR  ANY  OTHER  CARRIER  UNLESS  SPECIFIC  CONTRARY  INSTRUCTIONS  ARE</span></div>
  <div style="position:absolute;left:311.46px;top:134.00px" class="cls_002"><span class="cls_002">GIVEN HEREON BY THE SHIPPER, AND SHIPPER AGREES THAT THE SHIPMENT MAY</span></div>
  <div style="position:absolute;left:311.46px;top:141.00px" class="cls_002"><span class="cls_002">BE  CARRIED  VIA  INTERMEDIATE  STOPPING  PLACES  WHICH  THE  CARRIER  DEEMS</span></div>
  <div style="position:absolute;left:311.46px;top:148.00px" class="cls_002"><span class="cls_002">APPROPRIATE. THE SHIPPER'S ATTENTION IS DRAWN TO THE NOTICE CONCERNING</span></div>
  <div style="position:absolute;left:311.46px;top:155.00px" class="cls_002"><span class="cls_002">CARRIER'S  LIMITATION  OF  LIABILITY.  Shipper  may  increase  such  limitation  of  liability  by</span></div>
  <div style="position:absolute;left:311.46px;top:162.00px" class="cls_002"><span class="cls_002">declaring a higher value for carriage and paying a supplemental charge if required.</span></div>
  <div style="position:absolute;left:52.26px;top:174.50px" class="cls_002"><span class="cls_002">Issuing Carrier's Agent Name and City</span></div>
  <div style="position:absolute;left:311.46px;top:174.50px" class="cls_002"><span class="cls_002">Accounting Information</span></div>
  <div style="position:absolute;left:52.26px;top:222.50px" class="cls_002"><span class="cls_002">Agent's IATA Code</span></div>
  <div style="position:absolute;left:181.86px;top:222.50px" class="cls_002"><span class="cls_002">Account No.</span></div>
  <div style="position:absolute;left:52.26px;top:246.50px" class="cls_002"><span class="cls_002">Airport of Departure (Addr. of First Carrier) and Requested Routing</span></div>
  <div style="position:absolute;left:330.52px;top:246.50px" class="cls_002"><span class="cls_002">Reference Number</span></div>
  <div style="position:absolute;left:409.94px;top:246.50px" class="cls_002"><span class="cls_002">Optional Shipping Information</span></div>
  <div style="position:absolute;left:52.26px;top:270.50px" class="cls_002"><span class="cls_002">To</span></div>
  <div style="position:absolute;left:77.06px;top:270.50px" class="cls_002"><span class="cls_002">By First Carrier</span></div>
  <div style="position:absolute;left:127.65px;top:270.50px" class="cls_002"><span class="cls_002">Routing and Destination</span></div>
  <div style="position:absolute;left:206.66px;top:270.50px" class="cls_002"><span class="cls_002">to</span></div>
  <div style="position:absolute;left:235.46px;top:270.50px" class="cls_002"><span class="cls_002">by</span></div>
  <div style="position:absolute;left:257.06px;top:270.50px" class="cls_002"><span class="cls_002">to</span></div>
  <div style="position:absolute;left:285.86px;top:270.50px" class="cls_002"><span class="cls_002">by</span></div>
  <div style="position:absolute;left:307.69px;top:270.50px" class="cls_002"><span class="cls_002">Currency</span></div>
  <div style="position:absolute;left:334.69px;top:271.00px" class="cls_004"><span class="cls_004">CHGS</span></div>
  <div style="position:absolute;left:351.56px;top:270.00px" class="cls_005"><span class="cls_005">WT/VAL</span></div>
  <div style="position:absolute;left:383.86px;top:270.00px" class="cls_005"><span class="cls_005">Other</span></div>
  <div style="position:absolute;left:412.28px;top:270.50px" class="cls_002"><span class="cls_002">Declared Value for Carriage</span></div>
  <div style="position:absolute;left:498.35px;top:270.50px" class="cls_002"><span class="cls_002">Declared Value for Customs</span></div>
  <div style="position:absolute;left:335.49px;top:276.00px" class="cls_004"><span class="cls_004">Code</span></div>
  <div style="position:absolute;left:350.72px;top:277.00px" class="cls_004"><span class="cls_004">PPD</span></div>
  <div style="position:absolute;left:363.73px;top:277.00px" class="cls_004"><span class="cls_004">COLL</span></div>
  <div style="position:absolute;left:379.52px;top:277.00px" class="cls_004"><span class="cls_004">PPD</span></div>
  <div style="position:absolute;left:392.53px;top:277.00px" class="cls_004"><span class="cls_004">COLL</span></div>
  <div style="position:absolute;left:353.06px;top:282.54px" class="cls_006"><span class="cls_006">X</span></div>
  <div style="position:absolute;left:381.66px;top:282.54px" class="cls_006"><span class="cls_006">X</span></div>
  <div style="position:absolute;left:83.05px;top:295.00px" class="cls_002"><span class="cls_002">Airport of Destination</span></div>
  <div style="position:absolute;left:210.81px;top:294.50px" class="cls_002"><span class="cls_002">Requested Flight/Date</span></div>
  <div style="position:absolute;left:317.38px;top:294.50px" class="cls_002"><span class="cls_002">Amount of Insurance</span></div>
  <div style="position:absolute;left:388.66px;top:295.00px" class="cls_002"><span class="cls_002">INSURANCE  -  If  carrier  offers  insurance,  and  such  insurance  is</span></div>
  <div style="position:absolute;left:388.66px;top:302.00px" class="cls_002"><span class="cls_002">requested in accordance with the conditions thereof, indicate amount</span></div>
  <div style="position:absolute;left:388.66px;top:309.00px" class="cls_002"><span class="cls_002">to be insured in figures in box marked "Amount of Insurance".</span></div>
  <div style="position:absolute;left:52.26px;top:318.50px" class="cls_002"><span class="cls_002">Handling Information</span></div>
  <div style="position:absolute;left:530.86px;top:342.50px" class="cls_002"><span class="cls_002">SCI</span></div>
  <div style="position:absolute;left:52.66px;top:367.00px" class="cls_002"><span class="cls_002">No. of</span></div>
  <div style="position:absolute;left:126.42px;top:369.00px" class="cls_004"><span class="cls_004">kg</span></div>
  <div style="position:absolute;left:143.86px;top:368.00px" class="cls_002"><span class="cls_002">Rate Class</span></div>
  <div style="position:absolute;left:268.26px;top:368.00px" class="cls_002"><span class="cls_002">Rate</span></div>
  <div style="position:absolute;left:92.26px;top:370.00px" class="cls_002"><span class="cls_002">Gross</span></div>
  <div style="position:absolute;left:214.35px;top:370.00px" class="cls_002"><span class="cls_002">Chargeable</span></div>
  <div style="position:absolute;left:460.01px;top:370.00px" class="cls_002"><span class="cls_002">Nature and Quantity of Goods</span></div>
  <div style="position:absolute;left:51.66px;top:374.00px" class="cls_002"><span class="cls_002">Pieces</span></div>
  <div style="position:absolute;left:363.59px;top:374.00px" class="cls_002"><span class="cls_002">Total</span></div>
  <div style="position:absolute;left:90.93px;top:377.00px" class="cls_002"><span class="cls_002">Weight</span></div>
  <div style="position:absolute;left:127.12px;top:379.00px" class="cls_004"><span class="cls_004">lb</span></div>
  <div style="position:absolute;left:157.09px;top:378.00px" class="cls_002"><span class="cls_002">Commodity</span></div>
  <div style="position:absolute;left:220.53px;top:377.00px" class="cls_002"><span class="cls_002">Weight</span></div>
  <div style="position:absolute;left:461.52px;top:377.00px" class="cls_002"><span class="cls_002">(incl. Dimensions or Volume)</span></div>
  <div style="position:absolute;left:54.33px;top:381.00px" class="cls_002"><span class="cls_002">RCP</span></div>
  <div style="position:absolute;left:294.19px;top:380.00px" class="cls_002"><span class="cls_002">Charge</span></div>
  <div style="position:absolute;left:160.92px;top:383.00px" class="cls_002"><span class="cls_002">Item No.</span></div>
  <div style="position:absolute;left:68.32px;top:558.50px" class="cls_002"><span class="cls_002">Prepaid</span></div>
  <div style="position:absolute;left:127.05px;top:558.50px" class="cls_002"><span class="cls_002">Weight Charge</span></div>
  <div style="position:absolute;left:206.29px;top:558.50px" class="cls_002"><span class="cls_002">Collect</span></div>
  <div style="position:absolute;left:253.86px;top:558.50px" class="cls_002"><span class="cls_002">Other Charges</span></div>
  <div style="position:absolute;left:123.88px;top:582.50px" class="cls_002"><span class="cls_002">Valuation Charge</span></div>
  <div style="position:absolute;left:142.06px;top:606.50px" class="cls_002"><span class="cls_002">Tax</span></div>
  <div style="position:absolute;left:104.88px;top:630.50px" class="cls_002"><span class="cls_002">Total Other Charges Due Agent</span></div>
  <div style="position:absolute;left:253.86px;top:632.00px" class="cls_002"><span class="cls_002">Shipper certifies that the particulars on the face hereof are correct and that</span><span class="cls_005"> insofar as any part of the consignment</span></div>
  <div style="position:absolute;left:253.86px;top:639.00px" class="cls_005"><span class="cls_005">contains dangerous goods, such part is properly described by name and is in proper condition for carriage by air</span></div>
  <div style="position:absolute;left:253.86px;top:646.00px" class="cls_005"><span class="cls_005">according to the applicable Dangerous Goods Regulations.</span></div>
  <div style="position:absolute;left:103.55px;top:654.50px" class="cls_002"><span class="cls_002">Total Other Charges Due Carrier</span></div>
  <div style="position:absolute;left:369.27px;top:693.00px" class="cls_002"><span class="cls_002">Signature of Shipper or his Agent</span></div>
  <div style="position:absolute;left:78.82px;top:702.50px" class="cls_002"><span class="cls_002">Total Prepaid</span></div>
  <div style="position:absolute;left:180.79px;top:702.50px" class="cls_002"><span class="cls_002">Total Collect</span></div>
  <div style="position:absolute;left:59.82px;top:726.50px" class="cls_002"><span class="cls_002">Currency Conversion Rates</span></div>
  <div style="position:absolute;left:156.95px;top:726.50px" class="cls_002"><span class="cls_002">CC Charges in Dest. Currency</span></div>
  <div style="position:absolute;left:253.86px;top:741.00px" class="cls_002"><span class="cls_002">Executed on (date)</span></div>
  <div style="position:absolute;left:365.46px;top:741.00px" class="cls_002"><span class="cls_002">at (place)</span></div>
  <div style="position:absolute;left:468.02px;top:741.00px" class="cls_002"><span class="cls_002">Signature of Issuing Carrier or its Agent</span></div>
  <div style="position:absolute;left:166.95px;top:750.50px" class="cls_002"><span class="cls_002">Charges at Destination</span></div>
  <div style="position:absolute;left:269.42px;top:750.50px" class="cls_002"><span class="cls_002">Total Collect Charges</span></div>
  <div style="position:absolute;left:67.59px;top:754.00px" class="cls_002"><span class="cls_002">For Carrier's Use only</span></div>
  <div style="position:absolute;left:78.32px;top:761.00px" class="cls_002"><span class="cls_002">at Destination</span></div>
  <div style="position:absolute;left:46.26px;top:774.06px" class="cls_004"><span class="cls_004">AWBEDITOR.COM</span></div>
  <div style="position:absolute;left:195.46px;top:773.44px" class="cls_007"><span class="cls_007">Original 1 (for Issuing Carrier)</span></div>
  </div>
  
  </body>
  </html>
  
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

const styles = {
  heroContainer: {
    margin: 5,
    // marginBottom: 20,
    // marginLeft: 20,
    height: 1072,
    width: 800,
    // backgroundColor: '#ccffcc',
    backgroundImage: `url(${index})`,
  },
  paperContainer: {
    backgroundImage: `url(${index1})`
  }
};

const AirExportHawb = ({number}) => {
  const componentRef = useRef();
  return (
    <div>
      {/*<div dangerouslySetInnerHTML={createMarkup()} style={{ height: 100 }} ref={componentRef} />
      <ReactToPrint
        trigger={() => <Button style={{ marginLeft: 50, marginTop: 10 }}
color="primary" variant="contained">Printz Airway Bill</Button>}
        content={() => componentRef.current}
      />*/}
      <Box style={styles.heroContainer} ref={componentRef}>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <rows style={{ backgroundColor: 'grey', flexDirection: 'column'}}>
          <table style={{ border: '1px solid red' }}>
            <tbody>
              <tr>
                <td>
                  <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 65, fontSize: 12, fontFamily: 'sans-serif' }}>
                    <p>Công ty TNHH AnhCrua</p>
                    <p>21 Trung Liệt, Đống Đa, Hà Nội21 Trung Liệt, Đống Đa, Hà Nội</p>
                    <p>Tel: 0985623652</p>
                  </Box>
                </td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                  <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 65, fontSize: 12, fontFamily: 'sans-serif' }}>
                    <p>Công ty TNHH AnhCrua</p>
                    <p>21 Trung Liệt, Đống Đa, Hà Nội21 Trung Liệt, Đống Đa, Hà Nội</p>
                    <p>Tel: 0985623652</p>
                  </Box>
                </td>

              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: 35 }}>&nbsp;</p>
          <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 65, fontSize: 12, fontFamily: 'sans-serif' }}>
            <p>Công ty TNHH AnhCrua</p>
            <p>21 Trung Liệt, Đống Đa, Hà Nội21 Trung Liệt, Đống Đa, Hà Nội Hà Nội21 Trung Liệt, Đống Đa, Hà Nội</p>
            <p>Tel: 0985623652</p>
          </Box>
        </rows>
        <table style={{ border: '1px solid red' }}>
          <tbody>
            <tr>
              <td>
                <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 65, fontSize: 12, fontFamily: 'sans-serif' }}>
                  <p>Công ty TNHH AnhCrua</p>
                  <p>21 Trung Liệt, Đống Đa, Hà Nội21 Trung Liệt, Đống Đa, Hà Nội</p>
                  <p>Tel: 0985623652</p>
                </Box>
              </td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>
                <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 65, fontSize: 12, fontFamily: 'sans-serif' }}>
                  <p>Công ty TNHH AnhCrua</p>
                  <p>21 Trung Liệt, Đống Đa, Hà Nội21 Trung Liệt, Đống Đa, Hà Nội</p>
                  <p>Tel: 0985623652</p>
                </Box>
              </td>

            </tr>
          </tbody>
        </table>
        <p>sdfkjesfds</p>
        <p>fesfeksjdf</p>
        <p>&nbsp;</p>
        <p>kjsdfe</p>
      </Box>
      <ReactToPrint
        trigger={() => <Button style={{ marginLeft: 50, marginTop: 10 }} color="primary" variant="contained">Printz Airway Bill</Button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

AirExportHawb.propTypes = {
  number: PropTypes.number
};

export default AirExportHawb;
