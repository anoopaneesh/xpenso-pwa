import { AppBar, ThemeProvider, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import OverviewCard from "../components/OverviewCard";
import TransactionList from "../components/TransactionList";
import { theme } from "../theme";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Expense Tracker" />
        <meta name="theme-color" content="#f635ef" />
        <title>Xpenso</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>
      <Navbar />
      <OverviewCard />
      <TransactionList />
    </ThemeProvider>
  );
};

export default Home;
