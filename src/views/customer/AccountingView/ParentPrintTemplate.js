import React, { Component, useRef } from "react";
import styled from "styled-components";
import ReactToPrint from 'react-to-print';
import { Table, TableBody, Button, Box, TableRow, TableCell, Link } from "@material-ui/core";
import index1 from './index001.png';
import index from './background1.jpg';

const leSignUpLink = "htttps:wwww.someWeirdWorld.com";

const PrintingScreen = styled(Table)`
  && {
    margin-top: 20px;
    margin-left: 20px;
    display: none;
    @media print {
      display: block;
    }

    .MuiTableCell-root {
      border-bottom: none;
    }
  }
`;
const styles = {
  heroContainer: {
    margin: 5,
    marginBottom: 45,
    // marginLeft: 20,
    height: 1354,
    width: 900,
    //backgroundColor: '#ccffcc',
    //backgroundImage: `url(${index1})`,
  },
  paperContainer: {
    backgroundImage: `url(${index1})`
  },
  relugar: {
    fontSize: 9,
    fontFamily: 'sans-serif'
  }
};
//removed ---> // const PresentationWrapper = styled(TableRow)`
const DataWrapper = styled(TableCell)`
  && {
     /* height: ${props => (props.lastpage === "true" ? "100%" : "100vh")}; */
    padding-top: 25px;
    height: 100vh;
    display: flex;
  }
`;

//New Code
const TopAndBottomWrapper = styled(TableCell)`
  && {
    page-break-after: always;
  }
`;

const LEProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProfileElement = styled.span`
  margin-bottom: 13px;
`;

const Disclaimer = styled.div`
  color: #666;
  font-size: 13px;
  margin-bottom: 13px;
`;
const MailingBox = styled.div`
  margin-left: 6rem;
`;

const shipperinfo = 'Cong ty AnhCrua company limited R1002, 10FL TTC TOWER, 19 Phố Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội024 3787 6937';

function createMarkup() {
  return { __html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

  <html>
  <head>
    
    <meta http-equiv="content-type" content="text/html; charset=iso-8859-1"/>
    <title></title>
    <meta name="generator" content="https://conversiontools.io" />
    <meta name="author" content="NR"/>
    <meta name="created" content="2021-01-18T13:15:42"/>
    <meta name="changedby" content="NR"/>
    <meta name="changed" content="2021-01-18T18:10:18"/>
    <meta name="AppVersion" content="15.0300"/>
    <meta name="DocSecurity" content="0"/>
    <meta name="HyperlinksChanged" content="false"/>
    <meta name="LinksUpToDate" content="false"/>
    <meta name="ScaleCrop" content="false"/>
    <meta name="ShareDoc" content="false"/>
    
    <style type="text/css">
      body,div,table,thead,tbody,tfoot,tr,th,td,p { font-family:"Calibri"; font-size:x-small }
      a.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em;  } 
      a.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em;  } 
      comment { display:none;  } 
    </style>
    
  </head>
  
  <body>
  <table cellspacing="0" border="0">
    <colgroup width="66"></colgroup>
    <colgroup width="45"></colgroup>
    <colgroup width="48"></colgroup>
    <colgroup width="33"></colgroup>
    <colgroup width="14"></colgroup>
    <colgroup width="12"></colgroup>
    <colgroup width="9"></colgroup>
    <colgroup width="48"></colgroup>
    <colgroup width="35"></colgroup>
    <colgroup width="11"></colgroup>
    <colgroup width="48"></colgroup>
    <colgroup width="34"></colgroup>
    <colgroup width="13"></colgroup>
    <colgroup width="34"></colgroup>
    <colgroup width="36"></colgroup>
    <colgroup width="21"></colgroup>
    <colgroup width="13"></colgroup>
    <colgroup width="12"></colgroup>
    <colgroup width="24"></colgroup>
    <colgroup width="23"></colgroup>
    <colgroup width="21"></colgroup>
    <colgroup span="2" width="22"></colgroup>
    <colgroup span="2" width="12"></colgroup>
    <colgroup width="116"></colgroup>
    <colgroup width="137"></colgroup>
    <colgroup width="67"></colgroup>
    <tr>
      <td height="19" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" rowspan=2 align="center" valign=bottom sdval="180" sdnum="1033;"><b><font face="Bahnschrift Light SemiCondensed" size=4 color="#000000">180</font></b></td>
      <td style="border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=bottom sdval="235" sdnum="1033;"><b><font face="Bahnschrift Light SemiCondensed" size=4 color="#000000">235</font></b></td>
      <td style="border-left: 1px solid #000000" colspan=5 rowspan=2 align="center" valign=bottom sdval="235236523" sdnum="1033;"><b><font face="Bahnschrift Light SemiCondensed" size=4 color="#000000">235236523</font></b></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td colspan=10 rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">  </font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="21" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">  </font></td>
    </tr>
    <tr>
      <td height="16" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"> </font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Shipper's Name andAddress</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Shipper's Account Number</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000" colspan=10 align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Not Negotiable</font></td>
      <td style="border-top: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="22" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-left: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-left: 1px solid #000000" colspan=10 align="center" valign=bottom><b><font face="Bahnschrift Light SemiCondensed" size=3 color="#000000">HOUSE AIRWAY BILL</font></b></td>
      <td style="border-right: 1px solid #000000" colspan=2 align="center" valign=bottom><font face="Courier New" size=4 color="#000000">KCN0193903094040</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="53" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=14 rowspan=2 align="left" valign=top><font face="Bahnschrift Light SemiCondensed" color="#000000">KGL Vietnam company limited<br>R1002, 10FL TTC TOWER, 19 Ph&#7889; Duy T&acirc;n, D&#7883;ch V&#7885;ng H&#7853;u, C&#7847;u Gi&#7845;y, H&agrave; N&#7897;i<br>024 3787 6937</font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" colspan=5 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" color="#000000">Issued by</font></td>
      <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=middle><font face="Courier New" size=4 color="#000000">ANHCRUA CO.LTD</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="15" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=12 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Copies 1, 2 and 3 of this Air Waybill are originals and have the same validity.</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="20" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Consignee's Name and Address</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" color="#000000">Consignee's Account Number</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=12 rowspan=3 align="justify" valign=top><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">It is agreed that the goods described herein are accepted in apparent good order and condition (except as noted) for carriage SUBJECT TO THE CONDITIONS OF CONTRACT ON THE REVERSE HEREOF. ALL GOODS MAY BE CARRIED BY ANY OTHER MEANS INCLUDING ROAD OR ANY OTHER CARRIER UNLESS SPECIFIC CONTRARY INSTRUCTIONS ARE GIVEN HEREON BY THE SHIPPER, AND SHIPPER AGREES THAT THE SHIPMENT MAY BE CARRIED VIA INTERMEDIATE STOPPING PLACES WHICH THE CARRIER DEEMS APPROPRIATE. THE SHIPPER'S ATTENTION IS DRAWN TO THE NOTICE CONCERNING CARRIER'S LIMITATION OF LIABILITY. Shipper may increase such limitation of liability by declaring a higher value for carriage and paying a supplemental charge if required. </font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="19" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="73" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=14 align="left" valign=middle><font face="Bahnschrift Light SemiCondensed" color="#000000">KGL Vietnam company limited<br>R1002, 10FL TTC TOWER, 19 Ph&#7889; Duy T&acirc;n, D&#7883;ch V&#7885;ng H&#7853;u, C&#7847;u Gi&#7845;y, H&agrave; N&#7897;i<br>024 3787 6937</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="16" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=14 align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Issuing Carrier's Agent Name and City</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=12 align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Accounting Information</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="59" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=14 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=12 rowspan=3 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="16" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Agent's IATA Code</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Account No.</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="27" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=14 align="left" valign=middle><font face="Bahnschrift Light SemiCondensed" color="#000000">Airport of Departure (Addr. of First Carrier) and Requested Routing</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Reference Number</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Optional Shipping Information</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="22" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=14 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="15" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">To</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">By First Carrier</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Routing and Destination</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">To</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">By</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">To</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">By</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Currency</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=top bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">CHGS<br>Code</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=bottom><b><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">WT/VAL</font></b></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Other</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"> Declared Value for Carriage</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"> Declared Value for Customs</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="10" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=8 rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">PPD</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">COLL</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">PPD</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">COLL</font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="13" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="13" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Airport of Destination</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Requested Flight/Date</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Amount of Insurance</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 rowspan=2 align="left" valign=top><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">INSURANCE &ndash; If carrier offers insurance, and such insurance is requested in accordance with the conditions thereof, indicate amount to be insured in figures in box marked &quot;Amount of Insurance&quot;. </font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="21" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="15" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=26 align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000">Handling Information</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="15" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" colspan=25 rowspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="2" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">SCI</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="13" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="30" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="15" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">No. of Pieces RC</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 rowspan=2 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Gross Weight</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">kg lb</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=18 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="left" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Rate Class </font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=18 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 rowspan=2 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Chargeable <br>Weight</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=18 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 rowspan=2 align="left" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">   Rate     <br>                Charge</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=18 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 rowspan=2 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Total</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=18 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 rowspan=2 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Nature and Quantity of Goods<br> (incl. Dimensions or Volume)</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="22" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Commodity <br>Item No.</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=13 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 rowspan=13 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=16 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=16 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 rowspan=16 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 rowspan=16 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 rowspan=16 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 rowspan=14 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 rowspan=16 align="left" valign=top><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="25" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="39" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=3 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 rowspan=3 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="22" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=7 rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="16" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="15" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Prepaid</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">     Weight Charge</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Collect</font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=16 rowspan=6 align="left" valign=top><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Other Charges</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="21" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="16" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">           Valuation Charge</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="23" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="13" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Tax</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="24" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="13" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=8 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Total Other Charges Due Agent</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=16 rowspan=2 align="justify" valign=top><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Shipper certifies that the particulars on the face hereof are correct and that insofar as any part of the consignment containsdangerousgoods,suchpartisproperlydescribedbynameandisinproperconditionforcarriagebyair according to the applicable Dangerous Goods Regulations.</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="26" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="12" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=8 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Total Other Charges Due Carrier</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=16 rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="25" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="36" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=10 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" colspan=6 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000" colspan=9 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Signature of Shipper or his Agent</font></td>
      <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Total Prepaid</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Total Collect</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=16 rowspan=3 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="24" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="12" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Currency Conversion Rates</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">CC Charges in Dest. Currency</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="26" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=16 align="center" valign=middle><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Executed on (date)                                               at (place)                                     Signature of Issuing Carrier or its Agent</font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="14" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=6 rowspan=2 align="center" valign=middle bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">For Carrier's Use only at Destination</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Charges at Destination</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" size=1 color="#000000">Total Collect Charges</font></td>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000" colspan=11 rowspan=2 align="center" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
    <tr>
      <td height="24" align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 align="center" valign=bottom bgcolor="#D0CECE"><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
      <td align="left" valign=bottom><font face="Bahnschrift Light SemiCondensed" color="#000000"><br></font></td>
    </tr>
  </table>
  <!-- ************************************************************************** -->
  </body>
  
  </html>    
    ` };
}

const AirExportHawb = ({number}) => {
  return (
    <div style={styles.heroContainer}>
      {/*<div dangerouslySetInnerHTML={createMarkup()} style={{ height: 100 }} ref={componentRef} />
      <ReactToPrint
        trigger={() => <Button style={{ marginLeft: 50, marginTop: 10 }}
color="primary" variant="contained">Printz Airway Bill</Button>}
        content={() => componentRef.current}
      />*/}
      <Box>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p style={{ fontSize: 30 }}>&nbsp;</p>
        <table style={{ border: '1px solid white', width: 700, marginLeft: 65}}>
          <tbody>
            <tr>
              <td>
                <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 10, fontSize: 12, fontFamily: 'sans-serif' }}>
                  <p>Công ty TNHH AnhCrua</p>
                  <p>21 Trung Liệt, Đống Đa, Hà Nội21 Trung Liệt, Đống Đa, Hà Nội</p>
                  <p>Tel: 0985623652</p>
                </Box>
              </td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>
                <Box style={{ backgroundColor: 'white', width: 320, height: 85, marginLeft: 5, fontSize: 10, fontFamily: 'sans-serif' }}>
                  <p>Not Negotiable</p>
                  <p style={{ fontSize: 18 }}>House Air Waybill</p>
                  <p>&nbsp;</p>
                  <p>Issued by</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </Box>
              </td>

            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
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
    </div>
  );
};
function PrintTemplate() {
  return (
    <Box style={styles.heroContainer}>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Box>
  );
}

class ParentPrintTemplate extends Component {
  render() {
    const { printingProps } = this.props;
    //alert(printingProps[1].name);
    // printingProps is an array of myDetails
    // Each value inside printingProps is used to build the printing component for each page
    let printingPages = [];
    //  let counter = 0
    // let lastPage = 'false'
    for (const myDetails of printingProps) {
      //   counter += 1
      //   if (counter === printingProps.length) {
      //     lastPage = 'true'
      //   }
      const tempTemplate = (
        //     <PrintTemplate
        //       myDetails={myDetails}
        //       lastPage={lastPage}
        //     />
        <PrintTemplate myDetails={myDetails} />
      );
      printingPages.push(tempTemplate);
    }
    const finalTable = (
      <>
        <PrintingScreen
          size="small"
          role="presentation"
          border="0"
          cellPadding="0"
          cellSpacing="0"
        >
          <>
            {/* map and create single component for each page */}
            {printingPages.map((page, indexq) => (
              <TableBody key={indexq}>{page}</TableBody>
            ))}
          </>
        </PrintingScreen>
      </>
    );

    return finalTable;
  }
}
ParentPrintTemplate.defaultProps = {
  printingProps: []
};
export default ParentPrintTemplate;
