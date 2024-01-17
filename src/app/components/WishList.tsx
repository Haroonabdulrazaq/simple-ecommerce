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
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { Product } from "../utils/types";
import Image from "next/image";

interface DialogProps {
  openDialog: boolean;
  handleCloseDialog: () => void;
}

const DialogComponent: React.FC<DialogProps> = ({
  openDialog,
  handleCloseDialog,
}) => {
  const { wishList } = useSelector((state: any) => state.products);

  return (
    <div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {wishList?.length} {"Wish List Item(s)"}
          <FavoriteIcon />
        </DialogTitle>
        <DialogContent>
          {wishList?.map((item: Product) => {
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

export default DialogComponent;
