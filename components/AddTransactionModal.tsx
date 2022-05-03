import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Box,
  Radio,
  RadioGroup,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { categories } from "../constants/categories";
import { useTransaction } from "../context/TransactionContext";

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [tranType, setTranType] = useState<"expense" | "income">("expense");
  const [tranAmount, setTranAmount] = useState(0);
  const [tranCategory, setTranCategory] = useState("Food");
  const [tranDate, setTranDate] = useState<Date | null>(new Date());
  const { addTransaction } = useTransaction();
  const handleTranTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setTranType(value as "expense" | "income");
  };
  const handleTranAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTranAmount(Number(event.target.value));
  };
  const handleTranCategoryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTranCategory(event.target.value);
  };
  const handleTranDateChange = (value: Date | null) => {
    setTranDate(value);
  };
  const handleAddTransaction = () => {
    addTransaction({
      id:"",
      type: tranType,
      amount: tranAmount,
      category:tranType == 'expense' ? tranCategory : 'Income',
      date: tranDate,
    });
    clearStates();
    onClose();
  };
  const clearStates = () => {
    setTranAmount(0);
    setTranCategory("Food");
    setTranType("expense");
    setTranDate(new Date());
  };
  return (
    <StyledModal
      open={isOpen}
      onClose={() => {
        clearStates();
        onClose();
      }}
    >
      <Box bgcolor="white" width="400px" p={2}>
        <Stack spacing={2}>
          <Typography variant="h5" component="h3">
            Add Transaction
          </Typography>
          <TransactionType value={tranType} setValue={handleTranTypeChange} />
          <TextField
            label="Amount"
            placeholder="50"
            value={tranAmount}
            onChange={handleTranAmountChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
          />
          {tranType == "expense" && (
            <TextField
              select
              label="Category"
              value={tranCategory}
              onChange={handleTranCategoryChange}
            >
              {categories.map((item) => (
                <MenuItem key={item.name} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          )}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Date&Time picker"
              onChange={handleTranDateChange}
              value={tranDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button variant="contained" onClick={handleAddTransaction}>
            Add
          </Button>
        </Stack>
      </Box>
    </StyledModal>
  );
};

interface TransactionTypeProps {
  value: "expense" | "income";
  setValue: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

const TransactionType: React.FC<TransactionTypeProps> = ({
  value,
  setValue,
}) => {
  return (
    <FormControl>
      <FormLabel id="transaction-type-group">Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="transaction-type-group"
        name="type"
        value={value}
        onChange={setValue}
      >
        <FormControlLabel value="expense" control={<Radio />} label="Expense" />
        <FormControlLabel value="income" control={<Radio />} label="Income" />
      </RadioGroup>
    </FormControl>
  );
};

export default AddTransactionModal;
