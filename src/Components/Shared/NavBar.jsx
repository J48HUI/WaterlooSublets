import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwitchToggleMode from './SwitchModeToggle';
import CssBaseline from '@mui/material/CssBaseline';
import { isMobile, isBrowser } from 'react-device-detect';
import { Stack } from '@mui/system';

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigateToAbout = () => {
        navigate('/aboutus');
    };

    const navigateToHome = () => {
        navigate('/');
    };

    const navigateToContactUs = () => {
        navigate('/contactus')
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <div style={{ width: '100%' }}>
                        <Stack direction={"row"} spacing={5}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={navigateToHome}>Property Listings</MenuItem>
                                <MenuItem onClick={navigateToAbout}>About Waterloo Sublets</MenuItem>
                                <MenuItem onClick={navigateToContactUs}>Contact Information</MenuItem>
                            </Menu>
                            {
                                isBrowser &&
                                <>
                                    <h1 style={{ flexGrow: 1, fontSize: '1.5rem', position: 'relative', left: '77px' }}>
                                        <strong> Waterloo Sublets </strong>
                                    </h1>
                                    <SwitchToggleMode />
                                </>

                            }
                            {
                                isMobile &&
                                <h1 style={{ fontSize: '1.5rem' }}>
                                    <strong> Waterloo Sublets </strong>
                                </h1>
                            }
                        </Stack>
                        {
                            isMobile &&
                            <div style={{ width: '100%' }}>
                                <Stack direction={"row"} spacing={3}>
                                    {/* <div style={{ width: '25%' }}> </div> */}
                                    <SwitchToggleMode />
                                    {/* <div style={{ width: '25%' }}> </div> */}
                                </Stack>

                            </div>

                        }
                    </div>
                </Toolbar>
            </AppBar>

        </Box >
    );
}