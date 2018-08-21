import React, { Component } from 'react';

// Import request module
import axios from 'axios';

// Import components
import DeviceNumberWidget from '../components/DeviceNumberWidget';

class DevicesWidgetContainer extends Component {
    constructor() {
        super();

        // Set initial state
        this.state = {
            loading: false,
            min: undefined,
            max: undefined,
            price: undefined,
            value: undefined
        }

        // Bind function to refer to component
        this.getData = this.getData.bind(this);
    }

    // Fetch data when the component is added
    componentDidMount() {
        this.getData().then(_ => {
            // Re-fetch every minute
            //this.interval = setInterval(this.getData, 60000);
        });
    }

    // Fetch new data
    getData() {
        // Tell the Widget component we're currently loading
        this.setState({ loading: true });

        // Fetch data
        return axios.get(this.props.href)
            .then(response => {
                // Build a new state
                let newState = { loading: false };

                // Populate state with new data
                if (response.data.hasOwnProperty("min")) {
                    newState["min"] = response.data.min;
                }
                if (response.data.hasOwnProperty("max")) {
                    newState["max"] = response.data.max;
                }

                if (response.data.hasOwnProperty("value")) {
                    newState["value"] = response.data.value;
                }
                if (response.data.hasOwnProperty("Price")) {
                    newState["price"] = response.data.Price;
                }
                if (response.data.hasOwnProperty("SKU")) {
                    newState["value"] = response.data.SKU;
                }

                // Update state with data
                this.setState(newState);
            })
            .catch(error => {
                // At least tell the Widget component we have stopped loading
                console.log(error);
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            // Render the number widget
            <DeviceNumberWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} price={this.state.price} min={this.state.min} max={this.state.max} value={this.state.value} loading={this.state.loading} />
        );
    }
}

// Enforce the type of props to send to this component
DevicesWidgetContainer.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    href: React.PropTypes.string.isRequired
}

export default DevicesWidgetContainer;

