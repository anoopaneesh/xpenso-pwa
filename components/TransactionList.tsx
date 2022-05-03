import { Box, Divider, List, styled } from "@mui/material";

import React, { useState } from "react";
import { getCategoryIcon } from "../constants/categories";
import { useTransaction } from "../context/TransactionContext";
import DeleteTransactionModal from "./DeleteTransactionModal";
import TransactionListItem from "./TransactionListItem";

const StyledList = styled(List)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "25px",
});
const StyledDiv = styled("div")(({ theme }) => ({
  marginBottom: "16px",
  minWidth:"100%",
  [theme.breakpoints.up("sm")]:{
      minWidth:"25rem"
  }
 
}));

const TransactionList = () => {
  const { transactions } = useTransaction();
  return (
    <>
      <StyledList>
        {transactions.map((item, index) => {
          return (
            <StyledDiv key={index}>
              <TransactionListItem item={item} />
              <Divider component="li" />
            </StyledDiv>
          );
        })}
      </StyledList>
    </>
  );
};

export default TransactionList;
