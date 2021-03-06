import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FilterListIcon from '@material-ui/icons/FilterList';
import {
  IconButton,
  TablePagination,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  TextField
} from '@material-ui/core';
import AlertDialog from 'src/common/AlertDialog';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 200
  },
  toolbar: {
    display: 'flex',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    width: '30%'
  }
}));

export default function Results({ onDeleteCustomer, onEditCustomer, data }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [actionMenuPos, setActionMenuPos] = React.useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [openAlertDelete, setOpenAlertDeleter] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCloseActionMenu = () => {
    setActionMenuPos(null);
  };

  const handleEditCustomer = () => {
    setActionMenuPos(null);
    onEditCustomer(selectedCustomer);
  };

  const handleDeleteCustomer = () => {
    setActionMenuPos(null);
    setOpenAlertDeleter(true);
  };

  const handleAlertDeleteOK = () => {
    setOpenAlertDeleter(false);
    onDeleteCustomer(selectedCustomer);
  };

  const handleAlertDeleteCancel = () => {
    setOpenAlertDeleter(false);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Paper>
      <AlertDialog
        open={openAlertDelete}
        title="X??a kh??ch h??ng"
        content="B???n ch???c ch???n mu???n x??a kh??ch h??ng?"
        onOKClick={handleAlertDeleteOK}
        onCancelClick={handleAlertDeleteCancel}
      />
      <Menu
        id="long-menu"
        anchorEl={actionMenuPos}
        keepMounted
        open={Boolean(actionMenuPos)}
        onClose={handleCloseActionMenu}
      >
        <MenuItem onClick={handleEditCustomer}>S???a</MenuItem>
        <MenuItem onClick={handleDeleteCustomer}>X??a</MenuItem>
      </Menu>
      <Toolbar className={classes.toolbar}>
        <TextField
          className={classes.search}
          id="outlined-search"
          label="T??m ki???m kh??ch h??ng"
          type="search"
          variant="outlined"
          size="small"
        />
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>T??n</TableCell>
              <TableCell align="right">S??T</TableCell>
              <TableCell align="right">?????a ch???</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customer, index) => (
                <TableRow style={{ height: 60 }} key={customer.ID}>
                  <TableCell width="50" component="th" scope="row">
                    {page * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell>{customer.Name}</TableCell>
                  <TableCell align="right">{customer.Phone}</TableCell>
                  <TableCell align="right">{customer.Address}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      size="small"
                      padding="0"
                      onClick={event => {
                        setActionMenuPos(event.currentTarget);
                        setSelectedCustomer(customer);
                      }}
                    >
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 60 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data != null ? data.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

Results.propTypes = {
  onDeleteCustomer: PropTypes.func,
  onEditCustomer: PropTypes.func
};
