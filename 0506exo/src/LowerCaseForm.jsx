import React, { useState } from "react";

const LowerCaseForm = () => {
  const [value, setValue] = useState("");

  const changeValue = (e) => {
    console.log(e.target.value);
    setValue(e.target.value.toLowerCase());
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitForm}>
      <p>This is the Lower Case Form</p>
      <label>Type something in CAP here: </label>
      <input type="text" value={value} onChange={changeValue} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LowerCaseForm;
