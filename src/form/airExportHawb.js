import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PropTypes from 'prop-types';
import { IconButton, Button, Box } from '@material-ui/core';
import index from './Screenshot_3.png';

const styles = {
  heroContainer: {
    margin: 5,
    // marginBottom: 20,
    // marginLeft: 20,
    height: 1072,
    width: 800,
    // backgroundColor: '#ccffcc',
    backgroundImage: `url(${index})`,
  }
};


const AirExportHawb = ({number}) => {
  const componentRef = useRef();
  return (
    <div style={{ height: 500 }}>
      <Box style={styles.heroContainer} ref={componentRef}>
        <p>&nbsp;</p>
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
