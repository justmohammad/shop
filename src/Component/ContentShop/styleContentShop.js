import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    "contentShop": {
        marginTop: "65px",
    },
    'headerShop': {
        '@global': {
            h1: {
                fontSize: "77px",
            },
            p: {
                fontSize: "22px",
                display: "inline-block"
            },
            i: {
                margin: "10px"
            }
        }
    },
    "dropdown": {
        float: "right"
    },
    "headerContentShop": {
        '@global': {
            span: {
                margin: "12px 12px 12px 0"
            },
            button: {
                width: "255px",
                height: "60px",
                fontSize: "22px",
                background: (props)=>props.background ,
                i: {
                    paddingLeft: "10px"
                },
                '&:after': {
                    display: "none"
                },
                '&:focus': {
                    background: "#000CFF",
                    boxShadow: "none !important"
                }
            }
        }
    },
    "pagination": {
        composes: "pagination",
        justifyContent: "center",
        '@global': {
            li: {
                margin: "0 5px"
            }
        }
    },
})

export default useStyles