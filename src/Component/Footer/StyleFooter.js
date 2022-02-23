import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    "footer": {
        paddingBottom: "50px", textAlign: "center",
        '@global': {
            p: {
                marginTop: "30px"
            }
        }
    },
})

export default useStyles