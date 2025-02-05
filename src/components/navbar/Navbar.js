import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge, Box, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: "1px solid lightgray",
  padding: "5px 10px",
  borderRadius: "5px",
  backgroundColor: "#f5f5f5",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: "none", borderBottom: "1px solid lightgray" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: isMobile ? 1 : 3 }}>
        
        {/* Left Section - Language & Search */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <Typography sx={{ fontSize: 16, cursor: "pointer", marginRight: 2 }}>EN</Typography>
            <SearchContainer>
              <InputBase
                placeholder="Search"
                sx={{
                  flex: 1,
                  fontSize: isMobile ? "14px" : "16px", 
                  padding: isMobile ? "5px" : "8px", 
                  "&::placeholder": {
                    fontSize: isMobile ? "12px" : "16px", 
                  },
                }}
              />
              <IoSearch size={20} />
            </SearchContainer>
          </Box>
        )}

        {/* Center Section - Logo */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant={isTablet ? "h5" : "h4"} fontWeight="bold">
              E-Shop
            </Typography>
          </Link>
        </Box>

        {/* Right Section - Menu & Cart */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MdMenu size={28} />
            </IconButton>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
                <Typography sx={{ fontSize: 18, marginRight: 3, cursor: "pointer" }}>Register</Typography>
              </Link>
              <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                <Typography sx={{ fontSize: 18, marginRight: 3, cursor: "pointer" }}>Login</Typography>
              </Link>
              <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
                <IconButton>
                  <Badge badgeContent={totalItems} color="primary">
                    <MdOutlineShoppingCart size={28} />
                  </Badge>
                </IconButton>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button component={Link} to="/register">
            <ListItemText primary="Register" />
          </ListItem>
          <ListItem button component={Link} to="/login">
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button component={Link} to="/cart">
            <ListItemText primary="Cart" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
