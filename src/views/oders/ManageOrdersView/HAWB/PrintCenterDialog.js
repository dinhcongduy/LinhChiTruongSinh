import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Button, Box, Avatar, Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { PrintPage } from 'src/utils/downloadPDF/print';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PrintHidden from 'src/form/printHidden';
import DownloadXmlFile from 'src/utils/downloadXmlFile/Downloadfile';

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

export default function PrintCenterDialog({ mawb, hawb, string, close, type, row }) {
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
        Print Documents
      </div>
      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {
                type === 'newHAWB' ? 'Print Documents' : 'Edit HAWB ' + hawb
              }
            </Typography>
          </Toolbar>
        </AppBar>
        <Box display="flex" style={{ padding: 50 }}>
          <div>kkk</div>
        </Box>
      </Dialog>
    </div>
  );
}

PrintCenterDialog.propTypes = {
  row: PropTypes.string,
};
