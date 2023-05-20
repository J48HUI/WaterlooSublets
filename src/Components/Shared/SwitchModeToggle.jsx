import * as React from 'react';
import { ColorModeContext } from '../../ColorModeContext';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 30,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

const ModeToggleButton = () => {
    const [modeValue, setModeValue] = React.useState(false);
    const colorMode = React.useContext(ColorModeContext);
    const handleChange = (e) => {
        setModeValue(e.target.checked);
        colorMode.toggleColorMode(e.target.checked);
    };

    return (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ margin: '0 auto' }} >
            <Typography sx={{ fontSize: '1rem' }}>Dark Mode</Typography>
            <AntSwitch checked={modeValue} inputProps={{ 'aria-label': 'ant design' }} onChange={handleChange} />
            <Typography sx={{ fontSize: '1rem' }}>Light Mode</Typography>
        </Stack>
    );
}

export default ModeToggleButton;