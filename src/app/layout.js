"use client"
import NavigationMenu from "@/Components/NavigtionMenu/NavigationMenu";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/Redux/Store/store";
import React,{ useState } from "react";
import Login from "@/Components/Login/Login";






export default function RootLayout({ children }) {

const [loginStatus,setLoginStatus]=useState(true)


  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        {loginStatus == true ? <section className='mainLayoutContainer'>
          <div><NavigationMenu/></div>
        <div className="mainLayoutChildren">{children}</div>
        </section>: <Login  setLoginStatus={setLoginStatus} />}
        </Provider>
      </body>
    </html>
  );
}
