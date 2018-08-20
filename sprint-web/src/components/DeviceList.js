import React from "react";
import PropTypes from "prop-types";

// import the Contact component
import Device from "../components/Device";

function DeviceList(props) {
  return (
    <div>{props.devices.map(c => <Device key={c.id} name={c.name} colors={c.colors} memo={c.memo} price={c.price} />)}</div>
  );
}


DeviceList.propTypes = {
  devices: PropTypes.array.isRequired
};

export default DeviceList;
