import React from 'react';
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
import clsx from 'clsx';
import ProductList from 'src/views/product/ProductListView';
import CenteredTabs from './HAWB/CenteredTabs';

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

export default function PrintMAWB({ mawb }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [save, setSave] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        Print
      </div>
      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
        <DialogTitle id="alert-dialog-slide-title">{'Print MAWB Document'}</DialogTitle>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            <Card display="flex" flexDirection="row">
              <CardContent>
                <Box display="flex" justifyContent="center" mb={3}>
                  <Avatar alt="Product" src={'/static/images/products/product_1.png'} variant="square" />
                </Box>
                <Typography align="center" color="textPrimary" gutterBottom variant="h4">
                  Manifest
                </Typography>
              </CardContent>
              <Box flexGrow={1} />
              <Divider />
              <Box p={2}>
                <Grid
                  container
                  justify="space-between"
                  spacing={2}
                >
                  <Grid
                    className={classes.statsItem}
                    item
                  >
                    <Typography
                      color="textSecondary"
                      display="inline"
                      variant="body2"
                    >
                      Updated 2hr ago
                    </Typography>
                  </Grid>
                  <Grid
                    className={classes.statsItem}
                    item
                  >
                    <Typography
                      color="textSecondary"
                      display="inline"
                      variant="body2"
                    >
                      1
                      {' '}
                      Downloads
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
            <Card display="flex" flexDirection="column">
              <CardContent>
                <Box display="flex" justifyContent="center" mb={3}>
                  <Avatar alt="Product" src={'/static/images/products/product_1.png'} variant="square" />
                </Box>
                <Typography align="center" color="textPrimary" gutterBottom variant="h4">
                  Manifest
                </Typography>
              </CardContent>
              <Box flexGrow={1} />
              <Divider />
              <Box p={2}>
                <Grid
                  container
                  justify="space-between"
                  spacing={2}
                >
                  <Grid
                    className={classes.statsItem}
                    item
                  >
                    <Typography
                      color="textSecondary"
                      display="inline"
                      variant="body2"
                    >
                      Updated 2hr ago
                    </Typography>
                  </Grid>
                  <Grid
                    className={classes.statsItem}
                    item
                  >
                    <Typography
                      color="textSecondary"
                      display="inline"
                      variant="body2"
                    >
                      1
                      {' '}
                      Downloads
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
            <Card display="flex" flexDirection="column">
              <CardContent>
                <Box display="flex" justifyContent="center" mb={3}>
                  <Avatar alt="Product" src={'/static/images/products/product_1.png'} variant="square" />
                </Box>
                <Typography align="center" color="textPrimary" gutterBottom variant="h4">
                  Manifest
                </Typography>
              </CardContent>
              <Box flexGrow={1} />
              <Divider />
              <Box p={2}>
                <Grid
                  container
                  justify="space-between"
                  spacing={2}
                >
                  <Grid
                    className={classes.statsItem}
                    item
                  >
                    <Typography
                      color="textSecondary"
                      display="inline"
                      variant="body2"
                    >
                      Updated 2hr ago
                    </Typography>
                  </Grid>
                  <Grid
                    className={classes.statsItem}
                    item
                  >
                    <Typography
                      color="textSecondary"
                      display="inline"
                      variant="body2"
                    >
                      1
                      {' '}
                      Downloads
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Box>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

PrintMAWB.propTypes = {
  mawb: PropTypes.string
};
