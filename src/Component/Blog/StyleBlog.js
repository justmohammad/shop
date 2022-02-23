import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    "blog": {
        background: "#F4F4F4",
        textAlign: "center",
        padding: "77px 0",
        margin: "102px 0",
        '@global': {
            "h2": {
                color: "#000CFF",
                fontSize: "59px"
            },
            "p": {
                fontSize: "23px",
                margin: "23px 0"
            },
            "button": {
                margin: "0 15px"
            }
        }
    }
})

export default useStyles;