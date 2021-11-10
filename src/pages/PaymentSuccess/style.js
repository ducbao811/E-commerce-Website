import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        marginTop: "56px",
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1500px",
        backgroundColor: "inherit",
        padding: theme.spacing(3),
        fontFamily: "Roboto-medium"
    },

    image: {
        width: "70%",
        height: "auto",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '1em'
    },

    img: {
        objectFit: "contain",
        width: "100%",
        height: "auto"
    },

    right: {
        width: "30%",
        height: "auto",
        flex: 1,
        flexDirection: "column"
    },

    product_price: {
        padding: "10px 0",
        marginTop: "1em",
        marginBottom: "1em",
        borderBottom: "1px solid #dfe0e1",
        borderTop: "1px solid #dfe0e1"
    }
}
));