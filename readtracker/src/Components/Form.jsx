import React, { useState, useEffect } from 'react';

const Form = ({ onchange, onsubmit }) => (
  <form onSubmit={onsubmit}>
    <input type="text" onChange={onchange} placeholder="Type keywords to search books" />
    <button className="btn" type="submit">Search</button>
  </form>
);

export default Form;
