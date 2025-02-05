import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import register from "../../assets/register.jpg";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: 'url("/assets/register.jpg") !important',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Box
                sx={{
                    width: { xs: '90%', sm: '80%', md: '50%', lg: '40%' },
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                    borderRadius: '10px',
                    padding: 4,
                    boxShadow: 3,
                    backdropFilter: 'blur(30px)',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h5" align="center" sx={{ marginBottom: 3 }}>
                    Create Your Account
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="E-Mail"
                        type="email"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Phone Number"
                        type="tel"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Country"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                name="agree"
                                color="primary"
                            />
                        }
                        label={
                            <>
                                I agree to the <b>Terms</b> and <b>Privacy Policy</b>
                            </>
                        }
                        sx={{ marginBottom: 3 }}
                    />
                    <Link href="/">
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#1976d2',
                                color: '#fff',
                                fontWeight: 600,
                                padding: '12px 0',
                                borderRadius: 4,
                                '&:hover': { backgroundColor: '#1565c0' },
                            }}
                        >
                            Create Account
                        </Button>
                    </Link>
                </form>
            </Box>
        </Box>
    );
}

export default Register;
