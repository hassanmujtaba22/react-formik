import React from "react";
import { useFormik } from "formik";

export default function UserFormWithFormik() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: 0
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name field is required.";
      } else if (values.name.length > 20) {
        errors.name = "Name field must be less then 20 characters";
      }
      return errors;
    }
  });

  return (
    <div>
      <h1>User Form With Formik</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? (
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
          {formik.errors.email && formik.touched.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {formik.errors.age && formik.touched.age ? (
            <div style={{ color: "red" }}>{formik.errors.age}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
