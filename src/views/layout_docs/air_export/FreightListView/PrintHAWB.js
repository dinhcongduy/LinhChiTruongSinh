import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import AirExportHawb from 'src/form/airExportHawb';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function PrintHAWB({ mawb, number }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [save, setSave] = React.useState(false);
  const componentRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        Preview
      </Button>
      <Dialog
        fullWidth
        maxWidth={'xl'}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <DialogTitle id="alert-dialog-slide-title">{'Print MAWB Document'}</DialogTitle>
        <Box mt={3}>
          <AirExportHawb number={number} />
        </Box>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} style={{ marginRight: 200 }} color="primary" variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

PrintHAWB.propTypes = {
  mawb: PropTypes.string,
  number: PropTypes.number
};
