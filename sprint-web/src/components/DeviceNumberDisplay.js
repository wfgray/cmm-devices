import React, { Component } from 'react';


// Import styling
import '../styles/DeviceNumberDisplay.css';

class DeviceNumberDisplay extends Component {
    render() {
        // Only display "of xx" when a max prop is available
        let price = null;

        if (this.props.price !== undefined) {
            price =
                <span className="price">
                    has a price of {this.props.price}
                </span>;
        }
        
        var arr1 = [];
        for (var key in this.props) {
            arr1.push(this.props[key]);
        }
        var arr2 = [];
        for (var key in this.props) {
            arr2.push(key, this.props[key]);
        }
        var arr3 = Object.values(this.props);

        const myDevices = arr3.map((myDevice, index) =>
        // Only do this if items have no stable IDs
            <li key={index}>
                {index},{myDevice}
            </li>
        );

        return (
            <div className="DeviceNumberDisplay">
                <span className="value">
                    Device {this.props.value}
                </span>
                
                 { } {price}
                 
                 {myDevices}
            
            </div>
        );
    }
}

// Enforce the type of props to send to this component
DeviceNumberDisplay.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    price: React.PropTypes.number,
    value: React.PropTypes.number
}

export default DeviceNumberDisplay;