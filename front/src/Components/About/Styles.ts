import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles({

    menuPart: {
        // width:"400px",
        display: "flex",
        justifyContent: "center",
    },
    mainDiv: {
        textAlign: "justify",
        maxWidth: "620px",
        margin: "10px 0px 20px 15px"
    },
    headerText: {
        backgroundColor: "yellow",
        color: "black",
        width: "25%",
        fontWeight: "600",
        fontSize: "25px",
    },
    subHeading: {
        fontSize: "23px",
        color: "black",
        width: "61%",
        margin: "0px 0px 15px 0px",
        fontWeight: "600"

    },
    subHeading1: {
        fontSize: "12px",
        color: "#a7a0a0",
        margin: "0px 0px 15px 0px",
    },
    subHeading2: {
        fontSize: "12px",
        color: "#6d6868",
        margin: "0px 0px 15px 0px",
    },
    subHeading3: {
        fontSize: "12px",
        color: "#232121",

    },
    smallBox: {
        width: "100px", height: "100px", backgroundColor: "gray"
    },
    BoxContent: {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "10px",
        width:" 50%",
        marginTop:" 26%",
    }

});