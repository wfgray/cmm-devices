import React, { Component } from 'react';
// Import widgets being used in this component
import NumberWidgetContainer from '../components/NumberWidgetContainer';
import DevicesWidgetContainer from '../components/DevicesWidgetContainer';
//import ListWidgetContainer from '../components/ListWidgetContainer';
import GraphWidgetContainer from '../components/GraphWidgetContainer';
import Widget from '../components/Widget';
import '../styles/NumberWidget.css';

// Add in styles
import '../styles/App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Add Widgets to display */} 
                <DevicesWidgetContainer href="http://localhost:8080/device" heading="Devices" colspan={2} rowspan={2}/>
           </div> 
    );
    }
}

export default App;






/*
<ListWidgetContainer href="http://localhost:3001/stats/top" heading="Top Ticket Answerers" rowspan={3} />
<NumberWidgetContainer href="http://localhost:3001/tickets/urgent" heading="Tickets Marked 'Urgent'" />
<NumberWidgetContainer href="http://localhost:3001/stats/response" heading="4 Hour Response %" />
 <NumberWidgetContainer href="http://localhost:3001/stats/solved" heading="7 Day Solved %"colspan={1} rowspan={1} />
                        
<NumberWidgetContainer href="http://localhost:8085/bob/bob/1.0/api/customer/01" heading="Open Ticket Total" />
<GraphWidgetContainer href="http://localhost:3001/tickets/progression" heading="Tickets Over Time" colspan={2} rowspan={2} />
<NumberWidgetContainer href="http://localhost:3001/tickets/today" heading="Tickets Opened Today" />

  */