import { makeStyles } from '@mui/styles';
import Display from './Display';


export const useStyles = makeStyles({
 
  menuPart:{
    // width:"400px",
    display:"flex",
    justifyContent:"center",
  },
  displayBox:{
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width:"750px",
    height:"300px",
    // backgroundColor:"#a7a0a0",
    margin:"20px"
    
  },
  displayImg:{
    width:"500px",
    height:"300px",
  },
  bigBox:{
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width:"200px",
    height:"115px",
    backgroundColor:"#a7a0a0",
    margin:"20px"
    
  },
  smallBox:{
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width:"100px",
    height:"115px",
    backgroundColor:"#a7a0a0",
    margin:"20px"
    
  }


});