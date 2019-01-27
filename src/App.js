import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';

class App extends Component {
  state = {
    selectedColor: 'white',
  }

  setColor = (color) => {
    this.setState({ selectedColor: color })
  }

  render() {
    return (
      <div className="App"style={{ backgroundColor: this.state.selectedColor}}>
      <h2>
        Buttons, Buttons!
      </h2>
      <div>
        <Button color={'green'} onClick={() => this.setColor('green')}>Green</Button>
        {/* 
        TODO: Change setColor handler so that it can be reused by all your buttons!
        hint: We don't want to write the color everytime, but we want instead to use the prop
        to set the color
        */}
      </div>
    </div> 
    );
  }
}

export default App;
