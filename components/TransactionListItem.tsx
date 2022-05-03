import { Delete } from '@mui/icons-material'
import { IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import { getCategoryIcon } from '../constants/categories'
import { Transaction } from '../context/TransactionContext'
import DeleteTransactionModal from './DeleteTransactionModal'

interface TransactionListItemProps{
    item:Transaction
}

const TransactionListItem:React.FC<TransactionListItemProps> = ({item}) => {
    const [isOpen,setIsOpen] = useState(false)
  const openDeleteModal = () => {
      setIsOpen(true)
  }
  const closeDeleteModal = () => {
    setIsOpen(false)
  }
  const Icon = getCategoryIcon(item.category)
    return (
        <>
        <ListItem
            
        secondaryAction = {
            <IconButton onClick={openDeleteModal}>
                <Delete />
            </IconButton>
        }
    >
      <ListItemAvatar>
        <Icon />
      </ListItemAvatar>
      <ListItemText
        primary={item.amount}
        primaryTypographyProps={{
          variant: "h5",
          color: item.type === "expense" ? "red" : "green",
        }}
        secondary={<Typography>{item.category}</Typography>}
      />
    </ListItem>
    <DeleteTransactionModal id={item.id} isOpen={isOpen} onClose={closeDeleteModal} />
    </>
    )
}

export default TransactionListItem
