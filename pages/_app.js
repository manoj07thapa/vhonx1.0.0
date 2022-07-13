import "../styles/globals.css";
import { Fragment } from "react";
import Navbar from "../components/header/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <div className="divide-y-1 divide-green-900 divide-dashed">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
