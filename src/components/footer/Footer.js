import React from 'react';
import { Box, Typography, IconButton, Grid, useTheme, useMediaQuery } from '@mui/material';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { footerLinks } from '../../data';
import payment from '../../assets/payment.png';

function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <Box sx={{ backgroundColor: '#f8f8f8', py: 6, px: isSmallScreen ? 3 : 10 }}>
      <Grid container spacing={4} justifyContent="space-between">
        
        {/* Left Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            E-Shop
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'gray', lineHeight: 1.6 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <IconButton sx={{ color: 'white', backgroundColor: '#3b5999', mr: 1, '&:hover': { opacity: 0.8 } }}>
              <FaFacebook />
            </IconButton>
            <IconButton sx={{ color: 'white', backgroundColor: '#e44059', mr: 1, '&:hover': { opacity: 0.8 } }}>
              <FaInstagram />
            </IconButton>
            <IconButton sx={{ color: 'white', backgroundColor: '#55acee', mr: 1, '&:hover': { opacity: 0.8 } }}>
              <FaTwitter />
            </IconButton>
            <IconButton sx={{ color: 'white', backgroundColor: '#e60023', '&:hover': { opacity: 0.8 } }}>
              <FaYoutube />
            </IconButton>
          </Box>
        </Grid>

        {/* Center Section (Hidden on Small Screens) */}
        {!isSmallScreen && (
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Useful Links
            </Typography>
            <Grid container spacing={1}>
              {footerLinks.map((link) => (
                <Grid item xs={6} key={link.id}>
                  <Typography sx={{ fontSize: 14, color: 'gray', cursor: 'pointer', '&:hover': { color: 'black', textDecoration: 'underline' } }}>
                    {link.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}

        {/* Right Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FaLocationDot style={{ marginRight: '10px' }} />
            <Typography sx={{ fontSize: 14, color: 'gray' }}>123 Street, City</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FaPhoneAlt style={{ marginRight: '10px' }} />
            <Typography sx={{ fontSize: 14, color: 'gray' }}>+123456789</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IoMdMail style={{ marginRight: '10px' }} />
            <Typography sx={{ fontSize: 14, color: 'gray' }}>abc@gmail.com</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <img src={payment} alt="Payment Methods" style={{ width: '50%' }} />
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Footer;
