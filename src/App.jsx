//a react component - reuseable piece of UI
import React, { Component } from 'react';
import './App.css';
class App extends Component {
    render() {
        return(
        //className is keyword used 
        <div className="App">
            <div className="App-title">Countdown to December 25, 2017</div>
             <div>
                 <div className="Clock-days">14 days</div>
                 <div className="Clock-hours">10 hourss</div>
                 <div className="Clock-minutes">15 minutes</div>
                 <div className="Clock-seconds">20 seconds</div>
             </div>  
             <div> 
             <input placeholder='new date'/>
             <button>Submit</button>    
             </div>
        </div>
        )}
}

//exporting so that can be used
export default App;