import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-form">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.email === "admin123@gmail.com" && values.password === "123456") {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/dashboard");
          } else {
            alert("Invalid user or password");
          }
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <h2>Login here</h2>
            <div className="form-field">
              <input
                type="email"
                name="email"
                placeholder="UserName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div className="form-field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>
            </div>
            <div className="form-field">
              <button className="login-btn" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
