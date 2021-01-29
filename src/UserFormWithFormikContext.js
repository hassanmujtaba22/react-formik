import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function UserFormWithFormikContext() {
  return (
    <div>
      <h1>User Form With Formik Context</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          age: 0
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required().max(15).min(6),
          email: Yup.string().required(),
          age: Yup.number().required().max(50).min(18)
        })}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="name">Name: </label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage
                  name="name"
                  render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
                />
              </div>
              <div>
                <label htmlFor="email">Email: </label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage
                  name="email"
                  render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
                />
              </div>
              <div>
                <label htmlFor="age">Age: </label>
                <Field type="number" name="age" id="age" />
                <ErrorMessage
                  name="age"
                  render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
                />
              </div>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
