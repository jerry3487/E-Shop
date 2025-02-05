import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography, IconButton, Grid } from '@mui/material';
import { BiShoppingBag } from 'react-icons/bi';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/cartSlice';
import { IoClose } from 'react-icons/io5';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <Box sx={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <BiShoppingBag style={{ fontSize: '32px', color: '#333' }} />
          <Typography variant="h4" sx={{ marginLeft: '10px', fontWeight: 'bold', color: '#333' }}>
            Shopping Cart
          </Typography>
        </Box>

        {cartItems.length === 0 ? (
          <Typography>Your Cart is Empty</Typography>
        ) : (
          <Grid container spacing={3}>
            {/* Cart Items Section */}
            <Grid item xs={12} sm={8} md={8}>
              <Box sx={{ padding: '20px', border: '1px solid #ddd' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '10px', backgroundColor: '#f0f0f0', fontWeight: 'bold', marginBottom: '20px' }}>
                  <Typography align="center">Product</Typography>
                  <Typography align="center">Price</Typography>
                  <Typography align="center">Quantity</Typography>
                  <Typography align="center">Total</Typography>
                </Box>

                {cartItems.map((item, index) => (
                  <Box key={index} sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr auto', alignItems: 'center', padding: '10px', borderBottom: '1px solid #e0e0e0' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover',
                          marginRight: '10px',
                          borderRadius: '8px',
                        }}
                      />
                      <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>{item.title}</Typography>
                    </Box>
                    <Typography align="center" sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
                      ${item.price}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Button
                        onClick={() => dispatch(decreaseQuantity(item))}
                        sx={{
                          backgroundColor: '#f0f0f0',
                          padding: '4px 8px',
                          fontSize: { xs: '12px', sm: '16px' },
                          minWidth: '30px',
                        }}
                      >
                        -
                      </Button>
                      <Typography sx={{ margin: '0 10px', fontSize: { xs: '12px', sm: '14px' } }}>
                        {item.quantity}
                      </Typography>
                      <Button
                        onClick={() => dispatch(increaseQuantity(item))}
                        sx={{
                          backgroundColor: '#f0f0f0',
                          padding: '4px 8px',
                          fontSize: { xs: '12px', sm: '16px' },
                          minWidth: '30px',
                        }}
                      >
                        +
                      </Button>
                    </Box>
                    <Typography align="center" sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                    <IconButton
                      onClick={() => dispatch(removeFromCart(item))}
                      sx={{ color: '#ff4d4d', fontSize: { xs: '14px', sm: '16px' } }}
                    >
                      <IoClose size={20} />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Order Summary Section */}
            <Grid item xs={12} sm={4} md={4}>
              <Box sx={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#fafafa' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
                  Order Summary
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: { xs: '14px', sm: '16px' } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Price:</Typography>
                    <Typography>${totalPrice.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Delivery:</Typography>
                    <Typography>Free</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                    <Typography>Total:</Typography>
                    <Typography>${totalPrice.toFixed(2)}</Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    width: '100%',
                    marginTop: '20px',
                    backgroundColor: 'teal',
                    color: 'white',
                    fontSize: { xs: '14px', sm: '16px' },
                  }}
                >
                  Proceed to Checkout
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>

      <Footer />
    </div>
  );
}

export default Cart;
