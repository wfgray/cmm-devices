import React, { Component } from 'react';

// Import widgets being used in this component
import NumberWidgetContainer from '../components/NumberWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';
import GraphWidgetContainer from '../components/GraphWidgetContainer';


import axios from "axios";
import ContactList from "./components/ContactList";
import Widget from '../components/Widget';
//2  import NumberDisplay from '../components/NumberDisplay';
//3  import NumberWidget from '../components/NumberWidget';

// Add in styles
import '../styles/App.css';

class App extends Component {



    // default state object
    state = {
        contacts: []
    };

    componentDidMount() {
        axios
            .get("https://my-json-server.typicode.com/vivek-2/devices/Devices")
            .then(response => {
                // create an array of contacts only with relevant data
                const newContacts = response.data.map(c => {
                    return {
                        id: c.id,
                        name: c.title,
                        colors: c.color,
                        memo: c.memory,
                        price: c.srp
                    };
                });

                // create a new "state" object without mutating
                // the original state object.
                const newState = Object.assign({}, this.state, {
                    contacts: newContacts
                });

                // store the new state object in the component's state
                this.setState(newState);
            })
            .catch(error => console.log(error));
    }






    render() {
        return (
            <div className="App">
                {/* Add Widgets to display */}
                <ListWidgetContainer href="http://localhost:3001/stats/top" heading="Top Ticket Answerers" rowspan={3} />
                <GraphWidgetContainer href="http://localhost:3001/tickets/progression" heading="Tickets Over Time" colspan={2} rowspan={2} />
                <NumberWidgetContainer href="http://localhost:3001/tickets/today" heading="Tickets Opened Today" />
                <NumberWidgetContainer href="http://localhost:3001/tickets/urgent" heading="Tickets Marked 'Urgent'" />
                <NumberWidgetContainer href="http://localhost:3001/stats/response" heading="4 Hour Response %" />
                <NumberWidgetContainer href="http://localhost:3001/stats/solved" heading="7 Day Solved %" />

                < device heading="Devices" />

                <div>
                    <Widget heading="Equipment" >
                        <ContactList contacts={this.state.contacts} />
                    </Widget>

                </div>

            </div>


        );
    }
}

export default App;