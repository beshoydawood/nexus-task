'use client';
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "../components/AppBar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Drawer from "../components/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import CopyRight from "../components/CopyRight";
import List from '@mui/material/List';
import {MainListItems} from "./ListItems";
import {useEffect} from "react";

interface MainProps {
    title: string;
    children?: React.ReactNode;
}
export default function Main(props: MainProps) {
    const [open, setOpen] = React.useState(true);

    useEffect(() => {
        if( window.innerWidth < 700 ) {
            setOpen(false)
        }
        window.addEventListener("resize", () => {
            if( window.innerWidth < 700 ) {
                setOpen(false)
            }
        });
    }, []);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return(
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        {props.title}
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: [1],
                    }}
                >
                    Logo
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    <MainListItems />
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {props.children}
                    <CopyRight sx={{ pt: 4 }} />
                </Container>
            </Box>
        </Box>
    );
}