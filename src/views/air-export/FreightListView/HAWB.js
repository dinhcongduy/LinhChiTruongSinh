import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  list: {
    width: 1000,
  },
  fullList: {
    width: 'auto',
  },
});

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

function Row(props) {
  const { row } = props;
  const classes = useRowStyles();
  const [open, setOpen] = React.useState(false);
  const [opensides, setopenside] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, openside) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: openside });
  };
  const list = (anchor, item) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[item, item, 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <>
      <Drawer anchor="right" open={opensides} onClose={() => setopenside(false)}>
        {list('', row.name)}
      </Drawer>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" onClick={() => setopenside(true)}>
          {row.name}
        </TableCell>
        <TableCell align="center">{row.calories}</TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="center">{row.carbs}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center">{row.protein1}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingLeft: 50, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography style={{ paddingBottom: 0, paddingLeft: 50, paddingTop: 0 }} variant="h6" gutterBottom component="div">
                Thông tin chung của MAWB để ở đây
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>HAWB</TableCell>
                    <TableCell>Customer(Payer/Shipper)</TableCell>
                    <TableCell>Des</TableCell>
                    <TableCell align="center">Qty</TableCell>
                    <TableCell align="center">Unit</TableCell>
                    <TableCell align="center">GW</TableCell>
                    <TableCell align="center">CW</TableCell>
                    <TableCell align="center">CBM</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="center">{historyRow.amount}</TableCell>
                      <TableCell align="center">2</TableCell>
                      <TableCell align="center">Bag</TableCell>
                      <TableCell align="center">3</TableCell>
                      <TableCell align="center">3.6</TableCell>
                      <TableCell align="center">
                        1
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        amount1: PropTypes.number.isRequired,
        amount2: PropTypes.number.isRequired,
        amount3: PropTypes.number.isRequired,
        amount4: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    protein1: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('131-55293884', '25/02/2021', 'HAN - ICN', 'Khai Minh Co.Ltd - Da Nang Branch', 4.0, '401.99/400.000'),
  createData('180-59856263', '25/02/2021', 'HAN - ICN', 'KTL Korea', 4.0, '1302.99/1300.000'),
  createData('161-23521425', '25/02/2021', 'HAN - ICN', 'Samsung Co.Ltd', 6.0, '20.99/20.000'),
  createData('180-15241236', '25/02/2021', 'HAN - ICN', 'BPI Co.ltd', 4.0, '750.99/750.000'),
  createData('180-55293884', '25/02/2021', 'HAN - ICN', 'Khai Minh Co.Ltd - Da Nang Branch', 3.0, '1020.99/1010.000'),
];

export default function MAWB() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>MAWB</TableCell>
            <TableCell align="center">ETD</TableCell>
            <TableCell align="center">ROUTING</TableCell>
            <TableCell align="center">AGENT</TableCell>
            <TableCell align="center">Qty</TableCell>
            <TableCell align="center">GW/CW</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
