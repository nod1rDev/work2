"use client"
import { Link } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "./firebase";

function Products() {
  return (
    <div className="font-bold text-[28px] ml-[50vh] mt-[25vh] ">
      Siz kirdingiz agar hohlasongiz chiqib keting
      <Link href="/">
        <span
          onClick={() => signOut(auth)}
          className="font-[400] p-2 rounded-lg bg-slate-400"
        >
          Chiqib ketish
        </span>
      </Link>
    </div>
  );
}

export default Products;
