import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({

    menuPart: {
        // width:"400px",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "150px"
    },
    DesignContainer: {
        display: "grid",
        gridTemplateColumns: "repeat( 3, 1fr)",
        margin: "auto",


    },
    cart: {
        width: "380px",
        height: "300px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        margin: "10px"
    },

    smallBox: {
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        width: "100px",
        height: "115px",
        backgroundColor: "#a7a0a0",
        margin: "20px"

    },
    mainCart: {
        backgroundColor: "white", height: "100px", width: "100%",
        margin: "30px",
    },
    TextCart: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "10px 0px 0px 0px"
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
    }


});