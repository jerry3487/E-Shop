import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../data';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartSlice";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

function SingleProduct() {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id));

  const colors = ["red", "purple", "teal", "green", "black"];
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const sizes = ["xs", "s", "m", "l", "xl"];
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: '#f0f0f0', padding: '60px 0' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={product.img}
                alt={product.title}
                sx={{ height: 'auto', objectFit: 'contain' }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <Box sx={{ padding: 3 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600, textTransform: 'uppercase' }}>
                {product.title}
              </Typography>
              <Typography variant="h6" sx={{ color: 'teal', marginBottom: 2 }}>
                {product.price}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: 2 }}>
                Description
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>

              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Colors
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup row value={selectedColor} onChange={handleColorChange}>
                    {colors.map((color) => (
                      <FormControlLabel
                        key={color}
                        value={color}
                        control={<Radio sx={{ color: color }} />}
                        label=""
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>

              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Size
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup row value={selectedSize} onChange={handleSizeChange}>
                    {sizes.map((size) => (
                      <FormControlLabel
                        key={size}
                        value={size}
                        control={<Radio />}
                        label={size}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  padding: 2,
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  mt: 3,
                  '&:hover': { backgroundColor: '#006666' },
                }}
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}

export default SingleProduct;
