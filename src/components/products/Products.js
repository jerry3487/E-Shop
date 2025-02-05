import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Box, Button, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

function Products({ items, heading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Typography variant="h4" sx={{ margin: "40px 0 20px 20px" }}>
        {heading}
      </Typography>

      <Grid container spacing={3} sx={{ padding: "0 20px" }}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Box
              sx={{
                backgroundColor: "#e0e0e0",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                height: "350px",
                border: "1px solid #e0e0e0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ maxHeight: "75%", zIndex: 2 }}
              />
              <Box
                sx={{
                  color: "teal",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  height: "80%",
                }}
              >
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body2">${item.price}</Typography>
              </Box>
              <Box
                sx={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "75%",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-evenly",
                  zIndex: 3,
                  transition: "opacity 0.5s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Button
                  variant="contained"
                  color="teal"
                  sx={{
                    width: "45%",
                    fontWeight: 600,
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "cadetblue",
                      transform: "scale(1.1)",
                    },
                  }}
                  onClick={() => handleAddToCart(item)}
                >
                  <CiShoppingCart style={{ marginRight: "8px" }} />
                  Add To Cart
                </Button>
                <Button
                  variant="contained"
                  color="teal"
                  sx={{
                    width: "45%",
                    fontWeight: 600,
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "cadetblue",
                      transform: "scale(1.1)",
                    },
                  }}
                  onClick={() => handleViewDetails(item.id)}
                >
                  <CiSearch style={{ marginRight: "8px" }} />
                  View Details
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
