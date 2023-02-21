import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from 'https://img.icons8.com/bubbles/344/amazon-alexa-logo.png';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material';
import { useStyles } from './Styles';

export const theme = createTheme({
    mixins: {
      toolbar: {
        minHeight: 60,
      },
    },
  });

// const styles = {
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//     marginBottom: '3em',
//     [theme.breakpoints.down('md')]: {
//       marginBottom: '2em',
//     },
//     [theme.breakpoints.down('xs')]: {
//       marginBottom: '1.25em',
//     },
//   },
//   logo: {
//     height: '8em',
//     [theme.breakpoints.down('md')]: {
//       height: '7em',
//     },
//     [theme.breakpoints.down('xs')]: {
//       height: '5.5em',
//     },
//   },
//   logoContainer: {
//     padding: 0,
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//   },
//   tabs: {
//     marginLeft: 'auto',
//     '& .MuiButtonBase-root.MuiTab-root': {
//       fontSize: 20,
//     },
//     '& .Mui-selected': {
//       backgroundColor: '#fce0a2',
//       color: '#000',
//       opacity: 0.7,
//       borderRadius: 2,
//     },
//   },
//   tab: {
//     ...theme.typography.tab,
//     minWidth: 10,
//     marginLeft: '25px',
//     color: 'white',
//   },
//   hamburgerMenuIcon: {
//     height: '50px',
//     width: '50px',
//   },
//   menuIconContainer: {
//     marginLeft: 'auto',
//     color: 'white',
//     '&:hover': {
//       opacity: 1,
//     },
//   },
//   appbar: {
//     zIndex: theme.zIndex.modal + 1,
//   },
// };

const DesktopNavigation = () => {
  const [value, setValue] = useState(0);
const classes=useStyles();
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
      className={classes.tabs}
    >
      <Tab className={classes.tab} label="Home" component={Link} to="/" />
      <Tab className={classes.tab} label="About us" component={Link} to="/about" />
      <Tab className={classes.tab} label="Contact us" component={Link} to="/contact" />
    </Tabs>
  );
};

const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const classes=useStyles();
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <Box className={classes.toolbarMargin} />
        <Paper>
          <List disablePadding>
            <ListItem
              divider
              button
              component={Link}
              to="/"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>Home</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/about"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>
                Design Ideas
                </ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/contact"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>Home Interior</ListItemText>
            </ListItem>
          </List>
        </Paper>
      </SwipeableDrawer>
      <IconButton
       className={classes.menuIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.hamburgerMenuIcon} />
      </IconButton>
    </React.Fragment>
  );
};

const Navbar = () => {
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const classes=useStyles();
  return (
    <Fragment>
      <AppBar
        position="fixed"
        className={classes.appbar}
        color="secondary"
        elevation={9}
      >
        <Toolbar disableGutters={true}>
          <Button
            disableRipple
            component={Link}
            to="/"
            className={classes.logoContainer}
          >
           FURNKA
          </Button>
          {isMobileMode ? <MobileNavigation /> : <DesktopNavigation />}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
