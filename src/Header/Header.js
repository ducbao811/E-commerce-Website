import React from "react";
import {Link} from "react-router-dom";
import {useStateValue} from "../StateProvider";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {ShoppingBag} from "@mui/icons-material";
import useStyles from './style';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.2),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.3),
    },
    marginLeft: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '10%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export default function Header() {

    const [{basket}, dispatch] = useStateValue();
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Typography
                        variant="h4"
                        noWrap
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        fontFamily={"Roboto"}
                        fontWeight={"bold"}
                        component={Link}
                        to={'/'}
                        className={classes.title}
                    >
                        MiShop
                    </Typography>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            justifyContent: "space-evenly",
                            flexGrow: 1,
                            }}
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            fontFamily={"Roboto"}
                            component={Link}
                            to={'/men'}
                            className={classes.title}
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Men
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            fontFamily={"Roboto"}
                            component={Link}
                            to={'/women'}
                            className={classes.title}
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Women
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            fontFamily={"Roboto"}
                            component={Link}
                            to={'/about'}
                            className={classes.title}
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            About us
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="show shopping basket"
                            color="inherit"
                            component={Link}
                            to="/checkout"
                        >
                            <Badge
                                badgeContent={
                                    basket?.reduce((accumulator, current) => accumulator + current.count, 0)
                                }
                                color="error"
                            >
                                <ShoppingBag />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="navigate to login page"
                            color="inherit"
                            component={Link}
                            to="/login"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}