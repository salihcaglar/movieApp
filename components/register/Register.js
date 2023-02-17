import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {db} from '../../config/firebase'
import { getDocs, collection} from 'firebase/firestore'


import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./_Register.module.scss";
import { useState, useEffect } from "react";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        StreamLab
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
let emailcode = "111";
const theme = createTheme();
const validationSchema = yup.object({
  email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
  password: yup.string("Enter your password").min(8, "Password should be of minimum 8 characters length").required("Password is required"),
  name: yup.string("enter name").required("isim kısmı boş bırakılamaz").min(3, "isim en az 3 karakter içermeli"),
  surname: yup.string("enter surname").required("soy-isim kısmı boş bırakılamaz").min(3, "isim en az 3 karakter içermeli"),
  code: yup.string("enter code"),
});

export default function SignUp() {

  const [movielist,setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies")

  useEffect(() => {
    const getMovieList = async () => {
      // read data 
      // set list
      try {
        const data = await getDocs(moviesCollectionRef)
      } catch (err) {
        console.log(err);
      }
    }

    getMovieList()
  }, [])

  const getMovieList = () => {

  }

  
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password, formik.values.name);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await createUserWithEmailAndPassword(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  const [registered, setRegistered] = useState(false);
  const [registerDone, setRegisterDone] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      surname: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setRegistered(true);
    },
  });

  const isRegistered = (e) => {
    e.preventDefault();

    if (formik.values.code === emailcode) {
      setRegisterDone(true);
    }
    return;
  };

  if (registerDone) {
    setTimeout(() => {
      window.location.replace("/login");
    }, 2000);
  }

  return (
    <>
      <img src="./images/loginbg.jpg" className={styles.background} />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className={styles.container}>
          <CssBaseline />
          {!registered ? (
            <Box
              sx={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="name" label="İsim giriniz" name="name" autoComplete="given-name" value={formik.values.name} onChange={formik.handleChange} error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="surname" label="Soy-isim giriniz" name="surname" autoComplete="given-surname" value={formik.values.surname} onChange={formik.handleChange} error={formik.touched.surname && Boolean(formik.errors.surname)} helperText={formik.touched.surname && formik.errors.surname} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth id="email" label="email giriniz" name="email" autoComplete="email" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth id="password" label="parola giriniz" name="password" type="password" value={formik.values.password} onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive inspiration, marketing promotions and updates via email." />
                  </Grid>
                </Grid>
                <Button onClick={signIn} type="submit" color="primary" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
                
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
                <Button onClick={signInWithGoogle} variant="outlined" color="secondary">
                  Google ile giriş yap
                </Button>
                <Button onClick={logout} style={{position:"absolute" , right:"20px", top:"100px "}} variant="outlined" color="warning">
                  çıkış yap
                </Button>
              </form>
              
            </Box>
          ) : !registerDone ? (
            <form onSubmit={(e) => isRegistered(e)}>
              <div className={styles.mailCode}>
                <span>{formik.values.email} mail adresinize gönderilen kodu giriniz.</span>
                <TextField fullWidth id="code" name="code" value={formik.values.code} onChange={formik.handleChange} error={formik.touched.code && Boolean(formik.errors.code)} helperText={formik.touched.code && formik.errors.code} />
                <Button type="submit" variant="outlined">
                  Onayla
                </Button>
              </div>
            </form>
          ) : (
            <div className={styles.successRegister}>
              <p>kaydınız başarıyla yapıldı.</p>
              <span>Giriş sayfasına yönlendiriliyorsunuz...</span>
            </div>
          )}
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
