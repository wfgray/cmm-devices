import React, { Component } from 'react';

// Import request module
import axios from 'axios';
import Widget from '../components/Widget';

// Import components
import DeviceList from "../components/DeviceList";


class DevicesWidgetContainer extends Component {
    state = {
        devices: []
        
      };
    
      componentDidMount() {
        axios
          .get(this.props.href)
          .then(response => {
            
           var equip = response.data;
            console.log(equip.length);
            
            // create an array of contacts only with relevant data
            var newContacts = response.data.map(c => {
              return {
                  id: c.id,
                name: c.sku,
                colors: c.color,
                memo: c.memory,    
                price: c.Price   
              };
            });
    
            // create a new "state" object without mutating
            // the original state object.
            const newState = Object.assign({}, this.state, {
                devices: newContacts
            });
    
            // store the new state object in the component's state
            this.setState(newState);
          })
          .then(response => 
            {
            var count = response.json();
                console.log (count); }   )
          
          .catch(error => console.log(error));
      }
    
      render() {
        return (
<Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan}>
<div>    
            <DeviceList devices={this.state.devices} />

          </div>
       </Widget>
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

