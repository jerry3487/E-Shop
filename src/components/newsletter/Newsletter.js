import React from 'react';
import { Box, Typography, TextField, Button, useTheme, useMediaQuery } from '@mui/material';
import { IoMdSend } from 'react-icons/io';

function Newsletter() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: '60vh',
        backgroundColor: '#fcf5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 3,
      }}
    >
      {/* Newsletter Title */}
      <Typography variant={isMobile ? 'h4' : 'h1'} sx={{ marginBottom: 2 }}>
        Newsletter
      </Typography>

      {/* Newsletter Description */}
      <Typography variant="h6" sx={{ fontWeight: 300, marginBottom: 3, textAlign: 'center' }}>
        What's Fresh and New: Updates You Don't Want to Miss
      </Typography>

      {/* Input Container for Email and Send Button */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          width: isMobile ? '80%' : '50%',
          backgroundColor: 'white',
          border: '1px solid lightgray',
          padding: '0.5rem',
          borderRadius: 1,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Your Email"
          sx={{
            marginRight: isMobile ? 0 : 1,
            marginBottom: isMobile ? '1rem' : 0,
            '& .MuiOutlinedInput-root': {
              borderRadius: 1,
              fontSize: '16px',
              paddingLeft: '1rem',
            },
            '& .MuiInputBase-input': {
              fontSize: '16px',
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            minWidth: 50,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
            borderRadius: 1,
            padding: isMobile ? '10px' : '12px 20px',
            marginLeft: isMobile ? 0 : 1,
            marginTop: isMobile ? '1rem' : 0,
            backgroundColor: 'teal',
          }}
        >
          <IoMdSend size={24} style={{ color: 'white' }} />
        </Button>
      </Box>
    </Box>
  );
}

export default Newsletter;
