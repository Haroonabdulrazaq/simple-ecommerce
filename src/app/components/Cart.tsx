import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { Product } from "../utils/types";
import Image from "next/image";
import { useAppDispatch } from "../state/store";
import { removeFromCart } from "../state/features/ProductSlice";

interface DialogProps {
  openDialog: boolean;
  handleCloseDialog: () => void;
}

const CartComponent: React.FC<DialogProps> = ({
  openDialog,
  handleCloseDialog,
}) => {
  const { cartItemList } = useSelector((state: any) => state.products);
  const dispatch = useAppDispatch();
  const handleDelete = (productId: number) => {
    dispatch(removeFromCart(productId));
  };
  return (
    <div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {cartItemList?.length} {"Item in Cart"}
          <ShoppingCartIcon />
        </DialogTitle>
        <DialogContent>
          {cartItemList?.map((item: Product) => {
            return (
              <DialogContentText key={item.id}>
                <Box
                  sx={{
                    marginBottom: 2,
                    color: "default",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={item.thumbnail}
                    alt={`${item.title}`}
                    height={100}
                    width={100}
                  />
                  <Typography>{item.title}</Typography>
                  <DeleteIcon onClick={() => handleDelete(item.id)} />
                </Box>
              </DialogContentText>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CartComponent;
