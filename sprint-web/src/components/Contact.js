import React from "react";
import PropTypes from "prop-types";
import "../components/device.css";

function Contact(props) {
  return (
    <div className="contact">
      <span id="mainDevice"> Device Name :</span> <span id="values"> {props.name} </span>
      <br />
      <span id="newDevice">Color :</span> <span id="values">  {props.colors} </span>
      <br />
      <span id="newDevice">Memory :</span> <span id="values">  {props.memo} </span>
      <br />
      <span id="newDevice">SRP :</span> <span id="values">  {props.price} </span>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Contact;
