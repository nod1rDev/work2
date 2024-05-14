"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { InputLabel, MenuItem, Select } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
  const router = useRouter();
  const [value, setValue] = React.useState<any>();

  const handleChange = (e: any) => {
    const name = e.target.value;
    name == 1
      ? setValue("Respublika")
      : name == 2
      ? setValue("Toshkent")
      : name == 3
      ? setValue("Samarqand")
      : name == 4
      ? setValue("Andijon")
      : name == 5
      ? setValue("Namangan")
      : name == 6
      ? setValue("Fargona")
      : name == 7
      ? setValue("Jizzax")
      : name == 8
      ? setValue("Navoi")
      : name == 9
      ? setValue("Xorazim")
      : name == 10
      ? setValue("Buxoro")
      : name == 11
      ? setValue("Qashqadaryo")
      : name == 12
      ? setValue("Qoraqalpogiston")
      : name == 13
      ? setValue("Sirdaryo")
      : name == 14
      ? setValue("Surxandaryo")
      : null;
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: any = new FormData(event.currentTarget);
    console.log({
      password: data.get("password"),
    });
    const email = value + "@gmail.com";
    console.log(email);

    signInWithEmailAndPassword(
      auth,
      email.toLowerCase(),
      data.get("password").toLowerCase()
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.reload();
        router.push("/");
      })
      .catch((error) => {
        alert("Sizda muamo bor qayta urinib korin");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <InputLabel id="demo-simple-select-label">Select name</InputLabel>
            <Select
              fullWidth
              value={1}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
            >
              <MenuItem value={1}>Respublika</MenuItem>
              <MenuItem value={2}>Toshkent</MenuItem>
              <MenuItem value={3}>Samarqand</MenuItem>
              <MenuItem value={4}>Andijon</MenuItem>
              <MenuItem value={5}>Namangan</MenuItem>
              <MenuItem value={6}>Fargona</MenuItem>
              <MenuItem value={7}>Jizzax</MenuItem>
              <MenuItem value={8}>Navoi</MenuItem>
              <MenuItem value={9}>Xorazim</MenuItem>
              <MenuItem value={10}>Buxoro</MenuItem>
              <MenuItem value={11}>Qashqadaryo</MenuItem>
              <MenuItem value={12}>Qoraqalpogiston</MenuItem>
              <MenuItem value={13}>Sirdaryo</MenuItem>
              <MenuItem value={14}>Surxandaryo</MenuItem>
            </Select>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
