import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function UserFormWithFormikYup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: 0
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is a field required").max(15).min(6),
      age: Yup.number().required("Age is a field required").max(50).min(18)
    })
  });

  return (
    <div>
      <h1>User Form With Formik Yup</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div style={{ color: "red" }}></div>
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input type="number" id="age" {...formik.getFieldProps("age")} />
          {formik.errors.age ? (
            <div style={{ color: "red" }}>{formik.errors.age}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
