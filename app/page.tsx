"use client";
import Products from "./Products";
import * as React from "react";
import Login from "./login/page";
import { auth } from "./firebase";
import CircularProgress from "@mui/material/CircularProgress";

function Prodected() {
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    auth.authStateReady().finally(() => {
      setloading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="font-bold text-[32px] ml-[100vh] mt-[40vh]">
        <CircularProgress size={"90px"} />
      </div>
    );
  } else {
    if (auth.currentUser) {
      return <Products />;
    }

    return <Login />;
  }
}

export default Prodected;
