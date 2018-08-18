import React, { Component } from 'react';

// Import widgets being used in this component
import NumberWidgetContainer from '../components/NumberWidgetContainer';
import DevicesWidgetContainer from '../components/DevicesWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';
import GraphWidgetContainer from '../components/GraphWidgetContainer';

// Add in styles
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Add Widgets to display */}
                <ListWidgetContainer href="http://localhost:3001/stats/top" heading="Top Ticket Answerers" rowspan={3} />
                <NumberWidgetContainer href="http://localhost:8085/bob/bob/1.0/api/customer/01" heading="Open Ticket Total" />
                <GraphWidgetContainer href="http://localhost:3001/tickets/progression" heading="Tickets Over Time" colspan={2} rowspan={2} />
                <NumberWidgetContainer href="http://localhost:3001/tickets/today" heading="Tickets Opened Today" />
                <NumberWidgetContainer href="http://localhost:3001/tickets/urgent" heading="Tickets Marked 'Urgent'" />
                <DevicesWidgetContainer href="http://localhost:3001/tickets/devices" heading="Devices 'Urgent work'" />
                <NumberWidgetContainer href="http://localhost:3001/stats/response" heading="4 Hour Response %" />
                <NumberWidgetContainer href="http://localhost:3001/stats/solved" heading="7 Day Solved %" />
                <DevicesWidgetContainer href="http://localhost:8080/device/Device::6009787" heading="From My Rest API" />
            </div>
        );
    }
}

export default App;

