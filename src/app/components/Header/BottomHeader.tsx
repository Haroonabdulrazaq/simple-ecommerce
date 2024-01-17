"use client";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@mui/material/styles/styled";
import Link from "next/link";
import WishList from "../WishList";
import { useState } from "react";
import CartComponent from "../Cart";

const BottomHeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#000000",
  marginRight: theme.spacing(2),
}));

const NavigationItem = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  marginRight: theme.spacing(2),
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const BottomHeader = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openCartDialog, setOpenCartDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenCartDialog = () => {
    setOpenCartDialog(true);
  };
  const handleCloseCartDialog = () => {
    setOpenCartDialog(false);
  };
  return (
    <BottomHeaderContainer>
      <Box display="flex" alignItems="center">
        <LogoTypography variant="h6">Bandage</LogoTypography>
        <NavigationItem>
          <Link href="/">Home</Link>
        </NavigationItem>
        <NavigationItem>
          Shop <ExpandMoreIcon />
        </NavigationItem>
        <NavigationItem>About</NavigationItem>
        <NavigationItem>Blog</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
        <NavigationItem>Pages</NavigationItem>
      </Box>
      <Box display="flex" alignItems="center" gap="20">
        <NavigationItem style={{ color: "#23A6F0", fontWeight: "bold" }}>
          Login / Register
        </NavigationItem>
        <ActionButton>
          <SearchIcon />
        </ActionButton>
        <ActionButton>
          <ShoppingCartIcon onClick={handleOpenCartDialog} />
        </ActionButton>
        <ActionButton onClick={handleOpenDialog}>
          <FavoriteBorderIcon />
        </ActionButton>
        <WishList
          handleCloseDialog={handleCloseDialog}
          openDialog={openDialog}
        />
        <CartComponent
          handleCloseDialog={handleCloseCartDialog}
          openDialog={openCartDialog}
        />
      </Box>
    </BottomHeaderContainer>
  );
};

export default BottomHeader;
