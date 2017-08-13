//a react component - reuseable piece of UI
import React, { Component } from 'react';

class App extends Component {
    render() {
        return(
        <div>
            <div>Countdown to December 25, 2017</div>
             <div>
                 <div>14 days</div>
                 <div>10 hourss</div>
                 <div>15 minutes</div>
                 <div>20 seconds</div>
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