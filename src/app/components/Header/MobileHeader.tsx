"use client";
import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";

function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) =>
    (
      event:
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>,
    ) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent<HTMLButtonElement>).key === "Tab" ||
          (event as React.KeyboardEvent<HTMLButtonElement>).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          alignContent: "flex-end",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer anchor={"top"} open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
            color: "#252B42",
            fontSize: 150,
          }}
        >
          <Typography
            variant="h6"
            style={{ flexGrow: 1, color: "#252B42", fontWeight: "bold" }}
          >
            Bandage
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit" onClick={toggleDrawer(false)}>
            <MenuTwoToneIcon />
          </IconButton>
        </Grid>
        <List>
          {["Home", "Product", "Pricing", "Contact"].map((text) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default MobileHeader;
