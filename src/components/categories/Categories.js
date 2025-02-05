import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { categories } from '../../data';
import { Link } from 'react-router-dom';

function Categories() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 
  const isTabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md')); 

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4, md: 6 }, 
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row', 
        justifyContent: 'space-between',
        gap: isSmallScreen ? 2 : 3, 
      }}
    >
      {categories.map((item) => (
        <Box
          key={item.id}
          sx={{
            position: 'relative',
            flex: 1,
            height: isSmallScreen ? '50vh' : isTabletScreen ? '60vh' : '70vh', // Adjust height based on screen size
            transition: '0.3s',
            '&:hover': {
              opacity: 0.7,
              fontSize: 'larger',
            },
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.4)', 
              color: 'white',
              padding: { xs: 1, sm: 2, md: 3 }, 
            }}
          >
            <Typography
              variant={isSmallScreen ? 'h6' : isTabletScreen ? 'h5' : 'h4'}
              sx={{
                textTransform: 'uppercase',
                marginBottom: 2,
                fontWeight: 600,
                letterSpacing: 1.5,
              }}
            >
              {item.title}
            </Typography>
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'teal',
                  color: 'white',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'darkcyan',
                  },
                }}
              >
                Shop Now
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Categories;
