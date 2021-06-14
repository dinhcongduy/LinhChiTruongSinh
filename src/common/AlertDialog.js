import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

export default function AlertDialog({
  open,
  content,
  title,
  className,
  onOKClick,
  onCancelClick
}) {
  // const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  return (
    <div>
      <Dialog
        open={open}
        onClose={onCancelClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancelClick} color="primary">
            Hủy
          </Button>
          <Button onClick={onOKClick} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AlertDialog.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  onOKClick: PropTypes.func,
  onCancelClick: PropTypes.func
};
