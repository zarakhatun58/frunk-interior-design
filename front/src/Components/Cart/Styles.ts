import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
 
  menuPart:{
   
    display:"flex",
    justifyContent:"space-between",
    marginLeft:"150px"
  },
 
  smallBox:{
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width:"100px",
    height:"115px",
    backgroundColor:"#a7a0a0",
    margin:"20px"
    
  },
  mainCart:{
    backgroundColor: "white", height: "100px", width: "100%" ,
    margin:"30px",
  },
  yellowCart:{
    backgroundColor:'yellow',
    width:"200px",
    height:"80px",
    margin:"10px",
    padding:"10px",
    display:"flex",
    justifyContent:"space-between",
  },
  pText:{
    fontSize:"12px",
    color:"#a7a0a0",
    fontWeight:"600",
    textAlign:"left"
  },
  HeadText:{
    color:"#000000",
    textAlign:"left",
    fontWeight:"600",
    margin:"0px"
  }


});