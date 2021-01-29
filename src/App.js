import React from "react";
import "./styles.css";
import UserForm from "./UserForm";
import UserFormWithFormik from "./UserFormWithFormik";
import UserFormWithFormikYup from "./UserFormWIthFormikYup";
import UserFormWithFormikContext from "./UserFormWithFormikContext";
import UserFormWithFormikMaterialUI from "./UserFormWithFormikMaterialUI";

export default function App() {
  return (
    <div className="App">
      <UserForm />
      <hr />
      <UserFormWithFormik />
      <hr />
      <UserFormWithFormikYup />
      <hr />
      <UserFormWithFormikContext />
      <hr />
      <UserFormWithFormikMaterialUI />
    </div>
  );
}
