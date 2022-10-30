/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInputField from "components/SoftInput/SoftInputField";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { signup } from "middleware/actions/user.action";

function SignUp() {
  const dispatch = useDispatch();

  const [agreement, setAgremment] = useState(true);

  const onSubmit = (values) => {
    console.log(values);
    dispatch(signup(values));
  };

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout
      title="Welcome!"
      description="Use this as an initial landing point for creating a user instance. More information will be asked."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
          <RegistrationForm onSubmit={onSubmit} />

          {/* <SoftBox mb={2} display="flex" alignItems="center">
              <Checkbox
                color="primary"
                checked={agreement}
                onChange={handleSetAgremment}
              />
              <SoftTypography
                variant="caption"
                fontWeight="regular"
                color="text"
              >
                I agree with the{" "}
                <Link to="/pages/terms" target="_blank">
                  Terms and Conditions
                </Link>
                .
              </SoftTypography>
            </SoftBox> */}
        </SoftBox>
        <SoftBox textAlign="center" mb={2}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Have an account?
            <Link to="/auth/sign-in" className="text-dark ms-1">
              Sign In
            </Link>
          </SoftTypography>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

// validation functions
const required = (value) => (value ? undefined : "Required");
const mustBeEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : required(value);
const isSamePassword = (value, allValues) =>
  value !== allValues.password ? "Passwords must match" : required(value);

const RegistrationForm = (onSubmit) => (
  <Form
    onSubmit={(vals) => console.log(vals)}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <SoftBox mb={2}>
          <Field
            name="name"
            component={SoftInputField}
            validate={required}
            type="text"
            placeholder="Name"
          />
        </SoftBox>

        <SoftBox mb={2}>
          <Field
            name="email"
            component={SoftInputField}
            validate={mustBeEmail}
            type="email"
            placeholder="Email"
          />
        </SoftBox>

        <SoftBox mb={2}>
          <Field
            name="password"
            component={SoftInputField}
            type="password"
            placeholder="Password"
          />
        </SoftBox>

        <SoftBox mb={2}>
          <Field
            name="confirmPassword"
            component={SoftInputField}
            validate={isSamePassword}
            type="password"
            placeholder="Confirm Password"
          />
        </SoftBox>

        <SoftBox textAlign="center" mt={4} mb={1}>
          <SoftButton
            type="submit"
            variant="contained"
            color="dark"
            fullWidth
            disabled={submitting}
          >
            sign up
          </SoftButton>
        </SoftBox>
      </form>
    )}
  />
);

export default SignUp;

// <SoftBox mb={2}>
//   <SoftInput placeholder="Name" />
// </SoftBox>
// <SoftBox mb={2}>
//   <SoftInput type="email" placeholder="Email" />
// </SoftBox>
// <SoftBox mb={2}>
//   <SoftInput type="password" placeholder="Password" />
// </SoftBox>
// <SoftBox mb={2}>
//   <SoftInput type="password" placeholder="Confirm Password" />
// </SoftBox>
