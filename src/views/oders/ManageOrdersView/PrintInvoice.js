import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import {
  Box,
  Divider} from '@material-ui/core';
import { GET } from 'src/utils/api/method';
import { LinkApi } from 'src/utils/api/api-link';
import InvoiceFormat from './InvoiceFormat';

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

export default function PrintInvoice({ mawb, number, item }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [save, setSave] = React.useState(false);
  const componentRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
   //del();
  };

  const del = async () => {
    //setAnchorEl(null);
    await GET(LinkApi.order_del+item.ID)
        .then(respon => {
          if (respon==="SUCCESS") {
           // window.location.reload()
           setAnchorEl(null);
          }
        })
        .catch(error => alert('error', error));
      };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        In hóa đơn
      </div>
      <Dialog
        fullWidth
        maxWidth={'xl'}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <Box mt={6} style={{ margin: 250 }}>
          <InvoiceFormat item={item} />
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

PrintInvoice.propTypes = {
  mawb: PropTypes.string,
  item: PropTypes.object,
  number: PropTypes.number
};
