import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    "comment": {
        display: "inline-block",
        position: "absolute",
        margin: "20px 50px",
        width: "20rem"
    },
    "commentList": {
        float: "right",
        width: "300px",
        margin: "30px 40px"
    },
    "singleComment": {
        border: "1px solid #eee",
        padding: "10px",
        margin: "10px 0"
    },
    "emailComment": {
        color: "#a29e9e"
    },
    "textComment": {
        padding: "5px 10px"
    }
})

export default useStyles