import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    header: {
        background: (props) => [props.background, "!important"]
    },
    "navColorWhit": {
        composes: "me-auto my-2 my-lg-0",
        '@global': {
            a: {
                color: '#fff !important'
            }
        }
    },
    "dropdown": {
        marginRight: "7px"
    }
})

export default useStyles;