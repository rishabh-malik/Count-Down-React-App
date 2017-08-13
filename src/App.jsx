//a react component - reuseable piece of UI
import React, { Component } from 'react';
import './App.css';
import Clock from './Clock'

class App extends Component {
        //adding states
        constructor(props){
        super(props);
        //in react states are objects which are key value pairs
        this.state={
            deadline:'December 25, 2017',
            newDeadLine:''
        }    
    }
    
    changeDeadline(){
        //this.setState changes the state
        //this.setState({deadline:'November 25,2017'})
        this.setState({deadline:this.state.newDeadLine});
    }

    render() {
        return(
        //className is keyword used 
        <div className="App">
            <div className="App-title">Countdown to {this.state.deadline}</div>
          
            <Clock/>
             <div> 
             <input placeholder='new date'
             onChange={event=>this.setState({newDeadLine:event.target.value})}
             />
             <button onClick={() => this.changeDeadline()}>
                 Submit</button>    
             </div>
        </div>
        )}
}

//exporting so that can be used
export default App;