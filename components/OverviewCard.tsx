import { Box, Card, CardContent, Stack, styled, Typography,useTheme } from "@mui/material";
import React,{useState,useEffect} from "react";
import { useTransaction } from "../context/TransactionContext";
const StyledBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});



const OverviewCard = () => {
    const theme = useTheme()
   const {transactions} =  useTransaction()
   const [income,setIncome] = useState(0)
   const [expense,setExpense] = useState(0)
   useEffect(()=>{
    const totalIncome = transactions.reduce((prev,curr)=>{
        if(curr.type === 'income'){
            return prev+curr.amount
        }
        return prev
    },0)
    const totalExpense = transactions.reduce((prev,curr)=>{
        if(curr.type === 'expense'){
            return prev+curr.amount
        }
        return prev
    },0)
    setIncome(totalIncome)
    setExpense(totalExpense)
   },[transactions])
  return (
    <StyledBox>
      <Card sx={{
          minWidth:"100%",
          [theme.breakpoints.up("sm")]:{
          minWidth:"25rem"
      }}}>
        <CardContent>
          <Stack justifyContent="center" direction="row" divider={<hr/>} spacing={2}>
            <Box>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Income
              </Typography>
              <Typography variant="h3" color="green">
                {`₹${income}`}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Expense
              </Typography>
              <Typography variant="h3" color="red">
              {`₹${expense}`}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </StyledBox>
  );
};

export default OverviewCard;
