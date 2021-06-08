import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  Button,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import ReactToPrint from 'react-to-print';
import AirExportHawb from 'src/form/airExportHawb';

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  }
}));

const HAWB = (props) => {
  const classes = useStyles();
  const componentRef = useRef();

  return (
    <div style={{ marginTop: 50 }}>
      <ReactToPrint
        style={{ marginTop: 50 }}
        trigger={() => <Button>x this out!</Button>}
        content={() => componentRef.current}
      />
      <AirExportHawb ref={componentRef} />
    </div>
  );
};

HAWB.propTypes = {

};

export default HAWB;
