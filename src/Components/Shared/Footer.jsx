import * as React from 'react';
import { Card } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    span: {
        fontSize: '80%'
    }
})

const Footer = (props) => {
    const classes = useStyles();
    return (
        <Card sx={props.footerProps} variant="outlined">
            <div>
                <h3>Waterloo Sublets <span className={classes.span}> &#169; 2023</span></h3>

            </div>
        </Card>
    );
}

export default Footer;