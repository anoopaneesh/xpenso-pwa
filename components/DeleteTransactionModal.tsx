import {
    Button,
    Modal,
    Box,
    Stack,
    styled,
    Typography,
  } from "@mui/material";
  import React from "react";
import { useTransaction } from "../context/TransactionContext";

  
  interface DeleteTransactionModalProps {
      id:String,
    isOpen: boolean;
    onClose: () => void;
  }
  
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const DeleteTransactionModal: React.FC<DeleteTransactionModalProps> = ({
      id,
    isOpen,
    onClose,
  }) => {
    const {deleteTransaction} =  useTransaction()
    const handleDeleteTransaction = (id:String) => {
        deleteTransaction(id)
        onClose()
    }
    return (
      <StyledModal
        open={isOpen}
        onClose={onClose}
      >
        <Box bgcolor="white" width="400px" p={2}>
          <Stack spacing={2}>
            <Typography variant="h5" component="h3">
              Delete Transaction
            </Typography>
            <Typography>
                Are you sure to delete this transaction ? 
            </Typography>
            <Stack direction="row" justifyContent="space-between">
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => {
                handleDeleteTransaction(id)
            }}>
              Delete
            </Button>
            </Stack>
          </Stack>
        </Box>
      </StyledModal>
    );
  };
  
  
  
  export default DeleteTransactionModal;
  