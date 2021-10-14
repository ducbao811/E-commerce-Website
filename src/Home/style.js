import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        marginTop: "56px",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1500px",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    row: {
        display: "flex",
        zIndex: 1,
        marginLeft: "5px",
        marginRight: "5px",
    },
    root: {
        flexGrow: 1,
    },
}));