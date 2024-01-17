import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

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
