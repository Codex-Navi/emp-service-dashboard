"use client"
import NavigationMenu from "@/Components/NavigtionMenu/NavigationMenu";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/Redux/Store/store";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        <section className='mainLayoutContainer'>
          <div><NavigationMenu/></div>
        <div className="mainLayoutChildren">{children}</div>
        </section>
        </Provider>
      </body>
    </html>
  );
}
