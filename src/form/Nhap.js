import React, { Component, useRef } from "react";
import styled from "styled-components";
import ReactToPrint from 'react-to-print';
import { Table, TableBody, Button, Box, TableRow, TableCell, Link } from "@material-ui/core";
import index from './HouseAWB.jpg';
import index2 from './background1.jpg';
import index1 from './index001.png';

const leSignUpLink = "htttps:wwww.someWeirdWorld.com";

const PrintingScreen = styled(Table)`
  && {
    margin-top: 20px;
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
    marginBottom: 26,
    // marginLeft: 20,
    height: 1256,
    width: 900,
    //backgroundColor: '#ccffcc',
    backgroundImage: `url(${index1})`,
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

const shipperinfo = 'Cong ty AnhCrua';

function createMarkup() {
  return { __html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

  <html>
  <head>
    
    <meta http-equiv="content-type" content="text/html; charset=iso-8859-1"/>
    <title></title>
    <meta name="generator" content="https://conversiontools.io" />
    <meta name="author" content="NR"/>
    <meta name="created" content="2021-01-18T12:55:41"/>
    <meta name="changedby" content="NR"/>
    <meta name="changed" content="2021-01-18T12:58:13"/>
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
  
  <body background="result_htm_daf15b61971b3e93.png">
  <table cellspacing="0" border="0">
    <colgroup width="54"></colgroup>
    <colgroup width="63"></colgroup>
    <colgroup width="81"></colgroup>
    <colgroup width="64"></colgroup>
    <colgroup width="80"></colgroup>
    <colgroup span="5" width="64"></colgroup>
    <tr>
      <td style="border-top: 1px solid #000000; border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="10" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="24" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" colspan=3 align="center" valign=bottom><font color="#000000">HAWB: 0200393939393</font></td>
      </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="31" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="46" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
    </tr>
    <tr>
      <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" height="19" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
      <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=bottom><font color="#000000"><br></font></td>
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
    <div style={styles.heroContainer}>
      <Box>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p style={{ fontSize: 30 }}>&nbsp;</p>
        <table style={{ border: '1px solid red', width: 730, marginLeft: 65}}>
          <tbody>
            <tr>
              <td>
                <p style={styles.relugar}>Shipper&rsquo;s Name and Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Shipper&rsquo;s Account Number</p>
                <p style={styles.relugar}>&nbsp;</p>
                <p style={styles.relugar}>&nbsp;</p>

                <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 10, fontSize: 12, fontFamily: 'sans-serif' }}>
                  <p>Công ty TNHH AnhCrua</p>
                  <p>21 Trung Liệt, Đống Đa, Hà Nội21 Trung Liệt, Đống Đa, Hà Nội</p>
                  <p>Tel: 0985623652</p>
                </Box>
              </td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>
                <Box style={{ backgroundColor: 'gray', width: 360, height: 85, marginLeft: 5 }}>
                  <p style={styles.relugar}>Not Negotiable</p>
                  <p style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'sans-serif' }}>House Air Waybill</p>
                  <table style={{ border: '1px solid red', width: 300, height: 50}}>
                    <tbody>
                      <tr>
                        <td>
                          <Box style={{ backgroundColor: 'white', width: 50, height: 50, marginLeft: 10, fontSize: 12, fontFamily: 'sans-serif' }}>
                            <p style={styles.relugar}>&nbsp;</p>
                            <p style={styles.relugar}>Issued By</p>

                          </Box>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>
                          <Box style={{ backgroundColor: 'red', width: 250, height: 50, marginLeft: 5 }}>
                            <p style={{ fontFamily: 'monospace', alignSelf: 'center'}}> AnhCrua Co.Ltd  AnhCrua Co.Ltd AnhCrua Co.Ltd AnhCrua Co.Ltd AnhCrua Co.Ltd</p>
                          </Box>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </Box>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ height: 8, border: '1px solid red' }}>
          <tbody>
            <tr>
              <td>
                <Box style={{ backgroundColor: 'grey', width: 300, height: 12, marginLeft: 65, fontSize: 12, fontFamily: 'sans-serif' }}>
                  <p>&nbsp;</p>
                </Box>
              </td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>
                <Box style={{ backgroundColor: 'grey', width: 360, height: 12, marginLeft: 25 }}>
                  <p style={styles.relugar}>Copies 1, 2 and 3 of this Air Waybill are originals and have the same validity. </p>
                </Box>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ border: '1px solid red', width: 730, height: 108, marginLeft: 65}}>
          <tbody>
            <tr>
              <td>
                <p style={styles.relugar}>Consignee&rsquo;s Name and Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Consignee&rsquo;s Account Number</p>
                <p style={styles.relugar}>&nbsp;</p>
                <p style={styles.relugar}>&nbsp;</p>
                <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 10, fontSize: 12, fontFamily: 'sans-serif' }}>
                  <p>Công ty TNHH AnhCrua</p>
                  <p>21 Trung Liệt, Đống Đa, Hà Nội21 Trung Liệt, Đống Đa, Hà Nội</p>
                  <p>Tel: 0985623652</p>
                </Box>
              </td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>
                <Box style={{ backgroundColor: 'grey', width: 360, height: 100, marginLeft: 10, fontSize: 12, fontFamily: 'sans-serif' }}>
                  <p style={styles.relugar}>It is agreed that the goods described herein are accepted in apparent good order and condition (except as noted) for carriage SUBJECT TO THE CONDITIONS OF CONTRACT ON THE REVERSE HEREOF. ALL GOODS MAY BE CARRIED BY ANY OTHER MEANS INCLUDING ROAD OR ANY OTHER CARRIER UNLESS SPECIFIC CONTRARY INSTRUCTIONS ARE GIVEN HEREON BY THE SHIPPER, AND SHIPPER AGREES THAT THE SHIPMENT MAY BE CARRIED VIA INTERMEDIATE STOPPING PLACES WHICH THE CARRIER DEEMS APPROPRIATE. THE SHIPPER&rsquo;S ATTENTION IS DRAWN TO THE NOTICE CONCERNING CARRIER&rsquo;S LIMITATION OF LIABILITY. Shipper may increase such limitation of liability by declaring a higher value for carriage and paying a supplemental charge if required. </p>
                </Box>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={styles.relugar}>&nbsp;</p>
        <table style={{ border: '1px solid red', width: 730, height: 108, marginLeft: 65}}>
          <td>
            <p style={styles.relugar}>Issuing Carrier&rsquo;s Agent Name and City </p>
            <p style={{ fontSize: 5 }}>&nbsp;</p>
            <Box style={{ backgroundColor: 'grey', width: 345, height: 50, marginLeft: 0, fontSize: 12, fontFamily: 'sans-serif' }}>
              <p>WWWWWWW</p>
              <p>21 Trung Liệt, Đống Đa, Hà Nội21 Trung Liệt, Đống Đa, Hà Nội</p>
              <p>Tel: 0985623652</p>
            </Box>
            <Box style={{ backgroundColor: 'grey', width: 345, height: 32, marginLeft: 0, marginTop: 5, fontSize: 12, fontFamily: 'sans-serif' }}>
              <table style={{ border: '1px solid red', width: 345, height: 32}}>
                <td>
                  <p style={styles.relugar}>Agent&rsquo;s IATA Code</p>
                  <p style={{ width: 150}}>AGENT IATA</p>
                </td>
                <td>
                  <p style={styles.relugar}>Account No.</p>
                </td>
              </table>           
            </Box>
          </td>
          <td>
            <Box style={{ backgroundColor: 'grey', width: 360, height: 100, marginLeft: 0, fontSize: 12, fontFamily: 'sans-serif' }}>
              <p style={styles.relugar}>Accounting Information</p>
            </Box>
          </td>
        </table>
        <table style={{ border: '1px solid red', width: 730, height: 30, marginTop: 1, marginLeft: 65}}>
          <td>
            <Box style={{ backgroundColor: 'grey', width: 345, height: 30, marginLeft: 0, fontSize: 12, fontFamily: 'sans-serif' }}>
              <p style={styles.relugar}>Airport of Departure (Addr. of First Carrier) and Requested Routing</p>
              <p>HAN</p>
            </Box>
          </td>
          <td>
            <p style={styles.relugar}>Reference Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Optional Shipping Information &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div>
              <p style={{ display: 'inline-block', marginLeft: 2, width: 120}}>Accounting sdfsef</p>
              <p style={{ display: 'inline-block', marginLeft: 10, width: 190}}> Information sdfsdfe</p>
            </div>

          </td>
        </table>

        <table style={{ border: '1px solid red' }}>
          <tbody>
            <tr>
              <td>
                <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 65, fontSize: 12, fontFamily: 'sans-serif' }}>
                  <p>dòng mẫu</p>
                  <p>dòng mẫu</p>
                </Box>
              </td>
              <td>
                <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 65, fontSize: 12, fontFamily: 'sans-serif' }}>
                  <p>dòng mẫu</p>
                  <p>dòng mẫu</p>
                </Box>
              </td>

            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <rows style={{ backgroundColor: 'grey', flexDirection: 'column'}}>
          <table style={{ border: '1px solid red' }}>
            <tbody>
              <tr>
                <td>
                  <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 65, fontSize: 12, fontFamily: 'sans-serif' }}>
                    <p>dòng mẫu</p>
                    <p>dòng mẫu</p>
                    <p>Tel: 0985623652</p>
                  </Box>
                </td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                  <Box style={{ backgroundColor: 'grey', width: 300, height: 50, marginLeft: 65, fontSize: 12, fontFamily: 'sans-serif' }}>
                    <p>dòng mẫu</p>
                    <p>dòng mẫu</p>
                    <p>Tdòng mẫu</p>
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
}

class ParentPrintTemplate extends Component {
  render() {
    const { printingProps } = this.props;
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

export default PrintTemplate;
