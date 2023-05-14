import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}:any) {
  return (
    <>
    <Head>
    <title>Dra. Kenia Carrera</title>
        <meta name="description" content="take control of your money" />
        <link rel="shortcut icon" href="/icon-192x192.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         
    </Head>
    <Navbar/>
    <main>{children}</main> 
    <Footer/>
    </>
  )
}
