import * as React from 'react';
import { Routes, Route} from 'react-router-dom'
import { alpha, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import Home from '../pages/home';
import SNV from '../pages/snv';
import About from '../pages/about';
import TermsOfUse from '../pages/terms';
import FAQ from '../pages/faq';
import Contact from '../pages/contact';
import Profile from '../pages/profile';
import Search from '../components/Search';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    //paddingTop: "2%",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

{/*
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    //backgroundColor: alpha(theme.palette.common.white, 0.15),
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    '&:hover': {
      //backgroundColor: alpha(theme.palette.common.white, 0.25),
      backgroundColor: alpha(theme.palette.primary.main, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
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
    color: 'darkgrey'
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.text.primary,
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
}));
*/}

const DropdownMenu = () => {
    const [assembly, setAssembly] = useState('');
  
    const handleChange = (event) => {
      setAssembly(event.target.value);
    };
  
    return (
        <Select
            value={assembly}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Assembly' }}
            style={{ color: 'black', marginLeft: '20px' }}
            //variant="standard"
        >
            {/* TODO: Update the choices for this select once we add SV and Mt */}
            {/* TODO: Make this functional -- currently only one SNV assembly so it does nothing */}
            <MenuItem value="" disabled>Select Assembly</MenuItem>
            <MenuItem value="GRCh37 – SNV and Mt">GRCh37 – SNV and Mt</MenuItem>
            {/*<MenuItem value="GRCh37 – SV">GRCh37 – SV</MenuItem>*/}
            <MenuItem value="GRCh38 – SNV and Mt">GRCh38 – SNV and Mt</MenuItem>
            {/*<MenuItem value="GRCh38 – SV">GRCh38 – SV</MenuItem>*/}
        </Select>
    );
};


export default function AppNavBar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

  return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={(theme) => ({
                bgcolor: theme.palette.common.white
            })}>
                <Toolbar>
                    <IconButton
                        color="textPrimary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color="textPrimary"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link href="/" color="textPrimary" underline="none">He Kakano</Link>
                    </Typography>  
                    <DropdownMenu />
                    {/*                    
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search variant"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    */}
                    <Search variant="standard" width="25%" marginLeft="20px"/>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    {/* BH TODO: Add Logo here */}
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link href="/" color="inherit" underline="none">
                        <ListItem button key="home">
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link href="/" color="inherit" underline="none">
                        <ListItem button key="about">
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>
                    <Link href="/" color="inherit" underline="none">
                        <ListItem button key="terms">
                            <ListItemIcon><ArticleIcon /></ListItemIcon>
                            <ListItemText primary="Terms of Use" />
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link href="/" color="inherit" underline="none">
                        <ListItem button key="faq">
                            <ListItemIcon><HelpCenterIcon /></ListItemIcon>
                            <ListItemText primary="FAQ" />
                        </ListItem>
                    </Link>
                    <Link href="/" color="inherit" underline="none">
                        <ListItem button key="contact">
                            <ListItemIcon><EmailIcon /></ListItemIcon>
                            <ListItemText primary="Contact Us" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Routes>
                    <Route path="/" exact element={ <Home/> } />
                    <Route path="/snv/:varId" loader={({ params }) => {}} action={({ params }) => {}} element={ <SNV/>} />
                    <Route path="/about" exact element={ <About/> } />
                    <Route path="/terms" exact element={ <TermsOfUse/> } />
                    <Route path="/faq" exact element={ <FAQ/> } />
                    <Route path="/contact" exact element={ <Contact/> } />
                    <Route path="/profile" exact element={ <Profile/> } />
                </Routes>
            </Main>
        </Box>
    
  );
}