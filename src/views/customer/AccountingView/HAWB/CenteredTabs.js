import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HAWB from './HAWB';
import DataTable from './DataTable';
import OtherDebit from './OtherDebit';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'green',
    fontSize: 14
  },
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CenteredTabs({ mawb, hawb, save }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Documentation" {...a11yProps(0)} />
          <Tab label="Buying Rate" {...a11yProps(1)} />
          <Tab label="Selling rate" {...a11yProps(2)} />
          <Tab label="Other Credit" {...a11yProps(3)} />
          <Tab label="Other debit" {...a11yProps(4)} />
          <Tab label="Logistic charge" {...a11yProps(5)} />
          <Tab label="Other Info" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HAWB mawb={mawb} hawb={hawb} save={save} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataTable hawb={hawb} type={'BuyingRate'} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataTable hawb={hawb} type={'SellingRate'} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OtherDebit hawb={hawb} type={'OtherCreebit'} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <OtherDebit hawb={hawb} type={'OtherDebit'} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}

CenteredTabs.propTypes = {
  mawb: PropTypes.string,
  hawb: PropTypes.string,
  save: PropTypes.bool
};
