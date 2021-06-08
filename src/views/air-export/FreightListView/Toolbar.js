import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import ReactToPrint from 'react-to-print';
import { Search as SearchIcon } from 'react-feather';
import Drawer from '@material-ui/core/Drawer';
import MAWB from './MAWB';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  list: {
    width: 1000,
  },
  fullList: {
    width: 'auto',
  },
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [opensides, setopenside] = useState(false);
  const componentRef = useRef();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
   //   onClick={setopenside(false)}
   //   onKeyDown={setopenside(false)}
    >
      <MAWB type={'newMAWB'} />
    </div>
  );

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Drawer anchor="right" open={opensides} onClose={() => setopenside(false)}>
        {list('')}
      </Drawer>
      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Button className={classes.importButton}>
          Air Export
        </Button>
        <Button className={classes.importButton}>
          Import
        </Button>
        <Button className={classes.exportButton}>
          Export
        </Button>
        <ReactToPrint
          trigger={() => <Button color="primary" variant="contained">Print this out!</Button>}
          content={() => componentRef.current}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={() => setopenside(true)}
        >
          Add new MAWB
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search freight"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
