import React, { useState } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { sliderItems } from '../../data';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const SliderContainer = styled(Box)({
  width: '100%',
  height: '80vh',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 968px)': {
    height: '60vh',
  },
  '@media (max-width: 600px)': {
    height: '50vh',
  },
});

const Arrow = styled(IconButton)(({ direction }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  zIndex: 2,
  [direction]: '10px',
}));

const SliderWrapper = styled(Box)({
  display: 'flex',
  transition: 'transform 1.5s ease-in-out',
});

const Slide = styled(Box)(({ bg }) => ({
  minWidth: '100vw',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: `#${bg}`,
}));

const ImgContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  img: {
    maxHeight: '80%',
    width: 'auto',
    maxWidth: '100%',
  },
});

const InfoContainer = styled(Box)({
  flex: 1,
  padding: '20px',
  textAlign: 'center',
});

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <IoMdArrowDropleft size={30} />
      </Arrow>
      <SliderWrapper style={{ transform: `translateX(${-slideIndex * 100}vw)` }}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <img src={item.img} alt={item.title} />
            </ImgContainer>
            <InfoContainer>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1" mb={2}>
                {item.desc}
              </Typography>
              <Link to="/products" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                  Shop Now
                </Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </SliderWrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <IoMdArrowDropright size={30} />
      </Arrow>
    </SliderContainer>
  );
};

export default Slider;
