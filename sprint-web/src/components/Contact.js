import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="contact">
      <span>Device Name :</span> <span id="values"> {props.name} </span>
      <br />
      <span>Color :</span> <span id="values">  {props.colors} </span>
      <br />
      <span>Memory :</span> <span id="values">  {props.memo} </span>
      <br />
      <span>SRP :</span> <span id="values">  {props.price} </span>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Contact;
