import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    '@global': {
        "html, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video": {
            margin: "0",
            padding: "0",
            border: "0",
            outline: "0",
            fontSize: "100%",
            verticalAlign: "baseline",
            background: "transparent"
        },
        body: {lineHeight: 1,fontFamily: 'Roboto'},
        "article,aside,details,figcaption,figure,\nfooter,header,hgroup,menu,nav,section": {
            display: "block"
        },
        "nav ul": {listStyle: "none"},
        "blockquote, q": {quotes: "none"},
        "blockquote:before, blockquote:after,\nq:before, q:after": {
            content: ["''", "none"]
        },
        a: {
            margin: "0",
            padding: "0",
            fontSize: "100%",
            verticalAlign: "baseline",
            background: "transparent",
            textDecoration: "none",
        },
        ins: {backgroundColor: "#ff9", color: "#000", textDecoration: "none"},
        mark: {
            backgroundColor: "#ff9",
            color: "#000",
            fontStyle: "italic",
            fontWeight: "bold"
        },
        del: {textDecoration: "line-through"},
        "abbr[title], dfn[title]": {borderBottom: "1px dotted", cursor: "help"},
        table: {borderCollapse: "collapse", borderSpacing: "0"},
        hr: {
            display: "block",
            height: "1px",
            border: "0",
            borderTop: "1px solid #cccccc",
            margin: "1em 0",
            padding: "0"
        },
        "input, select": {verticalAlign: "middle"}
    }
})

export default useStyles
