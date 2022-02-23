import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    "signUp": {
        display: "flex",
        alignItems: "center",
        width: "20rem",
        flexDirection: "column",
        margin: "125px auto",
        padding: "20px",
        border: "1px solid #dedcdc"
    },

    "account": {
        paddingTop: "15px",
        fontSize: "14px",
        marginBottom: "0"
    }
})

export default useStyles