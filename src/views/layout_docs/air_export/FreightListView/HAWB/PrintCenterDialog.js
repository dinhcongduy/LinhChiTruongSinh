import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Avatar } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PrintHidden from 'src/form/printHidden';
import DownloadXmlFile from 'src/utils/downloadXmlFile/Downloadfile';
import CenteredTabs from '../../../../air-export/FreightListView/HAWB/CenteredTabs';
import PrintHAWB from '../PrintHAWB';
import xml from './HouseAWB.jpg';

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
        Thanh toán
      </div>
      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Thanh toán đơn hàng
            </Typography>
          </Toolbar>
        </AppBar>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='./static/images/products/product_2.png'
              title="Contemplative Reptile"
            />
            <Avatar
              alt="Product"
              src={'/static/images/products/product_2.png'}
              variant="square"
            />
           
          </CardActionArea>
          <CardActions>
            <PrintHAWB number={6} />
          </CardActions>
        </Card>
      
      </Dialog>
    </div>
  );
}

PrintCenterDialog.propTypes = {
  row: PropTypes.string,
};
