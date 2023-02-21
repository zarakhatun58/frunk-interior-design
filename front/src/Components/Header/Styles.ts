import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';


export const theme = createTheme({
  mixins: {
      toolbar: {
          minHeight: 60,
      },
  },
});
export const useStyles = makeStyles({
  
  upDiv:{
    display:"flex",
    justifyContent:"flex-end",
    paddingRight:"30px",
    height: "32px",
    color:"#a7a0a0",
  },
  signPart:{
    width:"250px",
    display:"flex",
    justifyContent:"space-between"
  },
  header:{
    backgroundColor:"white",
    color:"#a7a0a0",
    // paddingLeft:"30px",
    paddingRight:"30px",
    // border:"1px solid #a7a0a0",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  innerHead:{
    display:"flex",
    justifyContent:"space-between"
  },
  menuPart:{
    // width:"400px",
    display:"flex",
    justifyContent:"space-between",
    gap:"35px",
  },
  headerNew: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  // logo: {
  //   fontFamily: "Work Sans, sans-serif",
  //   fontWeight: 600,
  //   color: "#FFFEFE",
  //   textAlign: "left",
  // },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabs: {
    marginLeft: 'auto',
    '& .MuiButtonBase-root.MuiTab-root': {
      fontSize: 20,
    },
    '& .Mui-selected': {
      backgroundColor: '#fce0a2',
      color: '#000',
      opacity: 0.7,
      borderRadius: 2,
    },
  },
  tab: {
    // ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    color: 'white',
  },
  hamburgerMenuIcon: {
    height: '50px',
    width: '50px',
  },
  menuIconContainer: {
    marginLeft: 'auto',
    color: 'white',
    '&:hover': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },


});
