import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    "product": {
        '@global': {
            p: {
                margin: "26px 0 17px"
            },
            button: {
                marginTop: "15px"
            }
        }
    },
    "@keyframes like": {
        "0%": {transform: "scale(1)"},
        "50%": {transform: "scale(1.2)"},
        "100%": {transform: "scale(1)"}
    },
    "cardTitle": {
        textAlign: "left",
        '@global': {
            i: {
                float: "right",
                '@global': {
                    svg: {
                        animationName: "$like",
                        animationDuration: "250ms",
                        color: "#c40303"
                    }
                }
            },
            button: {
                float: "right",
                margin: "0",
                background: "0",
                border: "0"
            }
        }
    },
    "price": {
        color: "#000CFF"
    },
    "buttonSell": {
        composes: "btn btn-primary",
        background: (props) => props.background
    }
})

export default useStyles