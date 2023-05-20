import React from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import { Button, Card, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Stack } from '@mui/system';
import { isMobile } from 'react-device-detect';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function isEmail(email) {
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailFormat.test(email);
}


export const ContactUs = (props) => {
    const { mode } = props;
    const [error, setError] = React.useState({
        nameError: false,
        emailError: false,
        messageError: false
    })
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        message: ''
    })
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const footerProps = {
        width: '100%', backgroundColor: mode === 'dark' ? '#272727' : '', position: 'fixed', left: '0', bottom: '0', right: '0', zIndex: '1'
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (values.name !== "" && isEmail(values.email)) {
            setError({
                nameError: false,
                emailError: false,
                messageError: false
            })
            emailjs.send('service_pfbidpf', 'template_gx51792', values, 'tDO6pDEFJovQn4li-')
                .then((result) => {
                    if (result.text === "OK") {
                        setOpen(true);
                    }
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

        } else {
            setError({
                nameError: values.name !== "" ? false : true,
                emailError: isEmail(values.email) ? false : true,
                messageError: values.message !== "" ? false : true
            })
        }

    };

    const handleFormChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value })
    }

    return (
        <div>
            <NavBar />
            <div style={{ height: isMobile ? '110px' : '90px' }}></div>
            <Card sx={{ width: isMobile ? '90%' : '50%', margin: '0 auto', height: '400px' }} variant="outlined">
                <div style={{ height: '20px' }}></div>
                <Stack spacing={2} sx={{ padding: '5px' }}>
                    <TextField error={error.nameError} label={"Name"} value={values.name} onChange={handleFormChange('name')} />
                    <TextField error={error.emailError} label={"Email"} value={values.email} onChange={handleFormChange('email')} />
                    <TextField error={error.messageError} multiline rows={4} label={"Message"} value={values.message} onChange={handleFormChange('message')} />
                    <div style={{ height: '10px' }}></div>
                    <Button onClick={sendEmail} variant="contained" sx={{ width: '30%' }} style={{ margin: '0 auto' }}>Send</Button>
                </Stack>
            </Card>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Inquiry has been sent.
                </Alert>
            </Snackbar>
            <Footer footerProps={footerProps} />
        </div>
    );
};
