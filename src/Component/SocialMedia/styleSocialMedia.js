import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    "socialMedia": {
        display: "inline-block",
        '@global': {
            ul: {
                display: "flex",
                '@global': {
                    li: {
                        listStyle: "none",
                        margin: "0 15px"
                    }
                }
            }
        }
    }
})

export default useStyles