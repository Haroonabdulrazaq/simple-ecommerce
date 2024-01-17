import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface SimpleSnackbarProps {
  text: string;
  openSnack: boolean;
  handleClose: () => void;
}

export default function SimpleSnackbar({
  text,
  openSnack,
  handleClose,
}: SimpleSnackbarProps) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleClose}
        message={text}
      />
    </div>
  );
}
