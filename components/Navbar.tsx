import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React,{useState} from "react";
import AddTransactionModal from "./AddTransactionModal";

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  function handleClose(){
    setIsOpen(false)
  }
  function handleOpen(){
    setIsOpen(true)
  }

  return (
      <>
    <AppBar position="static" sx={{marginBottom:"25px"}}>
      <Toolbar>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography variant="h5" component="h2">
            Xpenso
          </Typography>
          <Stack direction="row" gap="20px">
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              color="success"
              disableElevation
              onClick={handleOpen}
            >
              Add Transaction
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
    <AddTransactionModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default Navbar;
