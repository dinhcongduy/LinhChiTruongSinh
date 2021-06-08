import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PropTypes from 'prop-types';
import { IconButton, Button } from '@material-ui/core';

const shipperinfo = 'Cong ty AnhCrua';
function createMarkup() {
  return { __html: `<!DOCTYPE html>
  <html>
  <head>
  <title>Page Title</title>
  </head>
  <body>

  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>

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
const AirExportHawb = ({number}) => {
  const componentRef = useRef();
  return (
    <div style={{ height: 5000 }}>
      {rows.map((row) => (
        <div style={{ height: 500 }}>
          <div dangerouslySetInnerHTML={createMarkup()} ref={componentRef} />
          {number}
        </div>
      ))}
      <head dangerouslySetInnerHTML={createMarkup()} ref={componentRef} />
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
