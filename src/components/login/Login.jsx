import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function validate(values) {
  const errors = {};
  if (!values.name?.trim()) {
    errors.name = "Name cannot be empty";
  }
  if (!values.email?.trim()) {
    errors.email = "Email cannot be empty";
  }

  if (!values.password?.trim()) {
    errors.password = "Password cannot be empty";
  }

  return errors;
}

function Login() {
  const onSubmit = (values, { resetForm }) => {
    alert(`${values.name}  ${values.email} ${values.password}`);
    resetForm();
  };

  return (
    <>
  
      <div className="d-flex justify-content-center w-100 ">
        
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={validate}
          onSubmit={onSubmit}
        >
          
          <Form className="w-50">
          <h1 className="d-flex justify-content-center mt-3">Task 1</h1>
            <div className="mb-3">
              <label>Name</label>
              <Field
                type="text"
                name="name"
                className="form-control"
                placeholder="Tehran"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="tehran@gmail.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="12345"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>

            <Button type="submit" variant="outline-primary" className="w-100">
              Add
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Login;
