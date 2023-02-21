import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({

  menuPart: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "150px"
  },

  mainCart: {
    backgroundColor: "#a7a0a0", height: "100px", width: "100%",
    marginTop: "20px",
    marginBottom: "20px"
  },

  pText: {
    fontSize: "12px",
    color: "#a7a0a0",
    textAlign: "left"
  },
  HeadText: {
    color: "#a7a0a0",
    textAlign: "left",
    fontWeight: "600",
    margin: "0px"
  },
  stickyIcon: {
    zIndex: "1",
    position: "fixed",
    top: "15%",
    right: "0%",
    width: "220px",
    display: "flex",
    flexDirection: "column",
    "& a": {
      transform: "translate(160px,0px)",
      borderRadius: "50px 0px 0px 50px",
      textAlign: "left",
      margin: "2px",
      textDecoration: "none",
      textTransform: "uppercase",
      padding: "10px",
      fontSize: "22px",
      // fontFamily:'Oswald', sans-serif;
      transition: "all 0.8s",
      ":hover": {
        color: "#FFF",
        transform: "translate(0px,0px)",
        "& i": {
          backgroundColor: " #FFF",
          height: "40px",
          width: " 40px",
          color: "#000",
          textAlign: "center",
          lineHeight: "40px",
          borderRadius: "50%",
          marginRight: " 20px",
          transition: "all 0.5s",
          ":hover": {
            transform: "rotate(360deg)",
          }

        }
      }
    }
  },

  // stickyIcon a  {
  //   transform:"translate(160px,0px)",
  //   borderRadius:"50px 0px 0px 50px",
  //   textAlign:"left",
  //   margin:"2px",
  //   textDecoration:"none",
  //   textTransform:"uppercase",
  //   padding:"10px",
  //   fontSize:"22px",
  //   // fontFamily:'Oswald', sans-serif;
  //   transition:"all 0.8s"
  // }
  // .sticky - icon a: hover  {
  //   color: "#FFF",
  //   transform: "translate(0px,0px)"
  // }
  //   .sticky - icon a: hover i  {
  //     transform: rotate(360deg);
  //   }
  /*.search_icon a:hover i  {
    transform:rotate(360deg);}*/

  "Facebook": {
    backgroundColor: "#2C80D3",
    color: "#FFF",
  },

  "Youtube": {
    backgroundColor: "#fa0910",
    color: " #FFF",
  },
  "Twitter": {
    backgroundColor: "#53c5ff",
    color: "#FFF",
  },
  "Whatsapp": {
    backgroundColor: "green",
    color: " #FFF",
  },
  "Instagram": {
    backgroundColor: "#FD1D1D",
    color: " #FFF",
  },

  "Google": {
    backgroundColor: " #d34836",
    color: " #FFF",
  },

  //     .sticky - icon a i {
  //       backgroundColor: #FFF;
  //       height: 40px;
  //       width: 40px;
  //       color:#000;
  //       text - align: center;
  // line - height: 40px;
  // border - radius: 50 %;
  // margin - right: 20px;
  // transition:all 0.5s;
  // }
  //   .sticky - icon a i.fa - facebook - f  {
  //   backgroundColor: #FFF;
  //   color:#2C80D3;
  // }

  //   .sticky - icon a i.fa - google - plus - g  {
  //   backgroundColor: #FFF;
  //   color: #d34836;
  // }

  //   .sticky - icon a i.fa - instagram  {
  //   backgroundColor: #FFF;
  //   color: #FD1D1D;
  // }

  //   .sticky - icon a i.fa - youtube  {
  //   backgroundColor: #FFF;
  //   color: #fa0910;
  // }

  //   .sticky - icon a i.fa - twitter  {
  //   backgroundColor: #FFF;
  //   color:#53c5ff;
  // }
  //   .fas fa - shopping - cart  {
  //   backgroundColor: #FFF;
  // }
  myBtn: {
    height: "50px",
    display: "none",
    position: "fixed",
    bottom: "20px",
    right: "30px",
    zIndex: "99",
    // textAlign:" center",
    padding: "10px",
    lineHeight: " 40px",
    border: "none",
    outline: "none",
    backgroundColor: "#1e88e5",
    color: "white",
    cursor: "pointer",
    borderRadius: " 50%",
    ":hover": {
      backgroundColor: " #555",
    }
  }
  //   .fa - arrow - circle - up  {
  //   font - size: 30px;
  // }

  // #myBtn:hover {
  //   background - color: #555;
  // }


});