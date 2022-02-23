import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        height: '90px',
        color: '#fff',
        background: (props) => props.background
    }
})

export default useStyles;