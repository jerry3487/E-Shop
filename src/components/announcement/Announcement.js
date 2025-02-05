import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

function Announcement() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); 

  return (
    <Box
      sx={{
        height: 50, 
        backgroundColor: 'teal',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: isSmallScreen ? 2 : isMediumScreen ? 4 : 8, 
        gap: isSmallScreen ? 1 : 4, 
        flexWrap: 'nowrap', 
      }}
    >
      {/* Left-aligned text */}
      <Typography
        sx={{
          fontSize: isSmallScreen ? 10 : isMediumScreen ? 12 : 16, 
          fontWeight: isSmallScreen ? 300 : 600,
          color: 'white',
          flex: '1 1 auto',
          textAlign: 'left',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis', 
        }}
      >
        Free Delivery
      </Typography>

      {/* Centered text */}
      <Typography
        sx={{
          fontSize: isSmallScreen ? 10 : isMediumScreen ? 12 : 16,
          fontWeight: isSmallScreen ? 300 : 600,
          color: 'white',
          flex: '1 1 auto',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        Welcome Offer 15% Off
      </Typography>

      {/* Right-aligned text */}
      <Typography
        sx={{
          fontSize: isSmallScreen ? 10 : isMediumScreen ? 12 : 16,
          fontWeight: isSmallScreen ? 300 : 600,
          color: 'white',
          flex: '1 1 auto',
          textAlign: 'right',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        Free Returns
      </Typography>
    </Box>
  );
}

export default Announcement;
