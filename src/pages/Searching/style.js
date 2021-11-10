import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        marginTop: "56px",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "100%",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    row: {
        display: "flex",
        zIndex: 1,
        marginLeft: "5px",
        marginRight: "5px",
    },
    title: {
        display: 'block',
        justifyContent: 'center',
        textAlign: 'center',
        width: "25%",
        margin: "0 auto",
        borderBottom: "2px solid"
    }
}));