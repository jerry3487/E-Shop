import React from 'react';
import { Box, Button, Typography, TextField, Checkbox, FormControlLabel, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#121212',
        },
        text: {
            primary: '#ffffff',
        },
    },
});

function Login() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundImage: 'url(/assets/login.jpg)', // Use root path if image is in public folder
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
            >
                <Box
                    sx={{
                        width: 420,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <Typography variant="h4" align="center" color="text.primary" gutterBottom>
                        Login
                    </Typography>
                    <form>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ style: { color: '#ffffff' } }}
                            InputProps={{ style: { color: '#ffffff' } }}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ style: { color: '#ffffff' } }}
                            InputProps={{ style: { color: '#ffffff' } }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FormControlLabel
                                control={<Checkbox sx={{ color: '#ffffff' }} />}
                                label={<Typography color="#ffffff">Remember Me</Typography>}
                            />
                            <Link href="/" variant="body2" color="primary">
                                Forget Password
                            </Link>
                        </Box>
                        <Link href= "/">
                            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                                Login
                            </Button>
                        </Link>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Typography color="#ffffff" variant="body2">
                                Don't Have an Account?{' '}
                                <Link href="/register" color="primary">
                                    Register
                                </Link>
                            </Typography>
                        </Box>
                    </form>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Login;
