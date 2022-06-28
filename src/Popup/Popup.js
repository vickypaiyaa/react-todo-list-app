import React, { useState } from "react";
import "./Popup.css";

const Popup = (props) => {
  const [value, setValue] = useState(props.edit.text);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.update(value);
  };
  return (
    <div className="outer">
      <center>
        <div className="popup">
          <center>
            <h1>Update the selected todo task!</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" value={value} onChange={handleChange}></input>
              <input type="submit" value="Update"></input>
            </form>
          </center>
        </div>
      </center>
    </div>
  );
};

export default Popup;
