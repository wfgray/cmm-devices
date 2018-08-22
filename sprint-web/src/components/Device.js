import React from "react";
import PropTypes from "prop-types";
import "../components/device.css";

function Device(props) {
  return (
    <div className="contact">
      <span id="mainDevice"> SKU :</span> <span id="values"> {props.name} </span>
      <br />
     
      <span id="newDevice">SRP :</span> <span id="values">  {props.price} </span>
    </div>
  );
}

Device.propTypes = {
  name: PropTypes.string.isRequired
};

export default Device;

/* <span id="newDevice">Color :</span> <span id="values">  {props.colors} </span>
<br />
<span id="newDevice">Memory :</span> <span id="values">  {props.memo} </span>
<br />

*/