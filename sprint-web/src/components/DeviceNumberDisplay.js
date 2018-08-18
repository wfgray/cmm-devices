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
                    Price of {this.props.price}
                </span>;
        }

        return (
            <div className="DeviceNumberDisplay">
                <span className="value">
                    {this.props.value}
                </span>
                {price}
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