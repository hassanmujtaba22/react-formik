import React, { useRef, useState } from "react";

export default function UserForm() {
  const name = useRef();
  const age = useRef();
  const [nameError, setNameError] = useState();
  const [ageError, setAgeError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.current.value && !age.current.value) {
      setNameError("Name field is required..");
      setAgeError("Age field is required..");
    } else {
      console.log(name.current.value);
      console.log(age.current.value);
      if (!name.current.value) {
        setNameError("Name field is required..");
      }
      if (!age.current.value) {
        setAgeError("Age field is required..");
      }
      if (name.current.value.length > 20) {
        setNameError("Name field must be less then 20 characters");
      }
      if (name.current.value.length < 6) {
        setNameError("Name field must be greater then 6 characters");
      }
    }
  };
  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input ref={name} type="text" id="name" />
          <div style={{ color: "red" }}>{nameError}</div>
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input ref={age} type="number" id="age" />
          <div style={{ color: "red" }}>{ageError}</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
