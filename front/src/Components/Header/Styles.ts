import { makeStyles } from '@mui/styles';


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
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
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


});
