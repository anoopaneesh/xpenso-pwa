import { useState, useContext, createContext, useEffect } from "react";
import { v4 as uuid } from "uuid";
export interface Transaction {
  id: String;
  type: "expense" | "income";
  amount: number;
  category: string;
  date: Date | null;
}

interface TransactionContextProps {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: String) => void;
}

const TransactionContext = createContext({} as TransactionContextProps);

interface TransactionProviderProps {
  children: React.ReactNode;
}

const TransactionProvider: React.FC<TransactionProviderProps> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    let trans = localStorage.getItem("transactions");
    console.log(trans);
    if (trans !== null) {
      setTransactions(JSON.parse(trans));
    }
  }, []);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((oldState) => {
      transaction.id = uuid();
      addToCache([transaction, ...oldState]);
      return [transaction, ...oldState];
    });
  };

  const deleteTransaction = (id: String) => {
    let newTransactions = transactions.filter((item) => item.id != id);
    addToCache(newTransactions);
    setTransactions(newTransactions);
  };

  const addToCache = (trans: Transaction[]) => {
    localStorage.setItem("transactions", JSON.stringify(trans));
  };
  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;

export const useTransaction = () => useContext(TransactionContext);
