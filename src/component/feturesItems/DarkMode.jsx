import React from "react";
import Form from "react-bootstrap/Form";

const DarkMode = ({ dashboardShrink }) => {
  return (
    <div>
      <Form.Check
        type="switch"
        id="custom-switch"
        // label="Dark Mode"
        label={`${dashboardShrink ? "" : "Dark Mode"}`}
      />
    </div>
  );
};

export default DarkMode;
