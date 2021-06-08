import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CenteredTabs from './CenteredTabs';

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
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ mawb, string, close, type, hawb }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [save, setSave] = React.useState(false);

  useEffect(() => {
    if (string === 'k') {
      setOpen(true);
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    close('close');
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        Creat new HAWB
      </div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {
                type === 'newHAWB' ? 'Creat New AWB' : 'Edit HAWB ' + hawb
              }
            </Typography>
            <Button autoFocus color="inherit" onClick={() => setSave(true)}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <CenteredTabs mawb={mawb} hawb={hawb} save={save} />
      </Dialog>
    </div>
  );
}

FullScreenDialog.propTypes = {
  mawb: PropTypes.string,
  string: PropTypes.string,
  type: PropTypes.string,
  hawb: PropTypes.string,
  close: PropTypes.string
};
