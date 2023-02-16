import styles from "./_Register2.module.scss";
import { Form, Formik } from "formik";
import { makeStyles } from "@mui/material";
import { Container, Grid, Typography } from "@mui/material";
import * as Yup from "yup";
import FormsUi from "../../components/FormsUi";

export default function Register2() {
  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email..").required("Requirede"),
    phone: Yup.number().integer().typeError("Please enter a valid phone number").required("Required"),
    addressLine1: Yup.string().required("Required"),
    addressLine2: Yup.string(),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  });

  return (
    <div className={styles.container}>
      <img src="./images/loginbg.jpg" className={styles.background} />
      <Container maxWidth="md">
        <div className={styles.fromWrapper}>
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Your details</Typography>
                </Grid>

                <Grid item xs={6}>
                  <FormsUi name="firstName" label="First Name" />
                </Grid>

                <Grid item xs={6}>
                  <FormsUi name="lastName" label="Last Name" />
                </Grid>
                <Grid item xs={12}>
                  <FormsUi name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <FormsUi name="phone" label="Phone" />
                </Grid>

                <Grid item xs={12}>
                  <Typography>address</Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormsUi name="addressLine1" label="Address Line 1" />
                </Grid>
                <Grid item xs={12}>
                  <FormsUi name="addressLine2" label="Address Line 2" />
                </Grid>
                <Grid item xs={6}>
                  <FormsUi name="city" label="City" />
                </Grid>
                <Grid item xs={6}>
                  <FormsUi name="state" label="State" />
                </Grid>
                <Grid item xs={12}></Grid>

                <Grid item xs={12}>
                  <Typography>information</Typography>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </Container>
    </div>
  );
}
