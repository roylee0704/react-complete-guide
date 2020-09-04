import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Roy', age: 30 },
      { name: 'Earng', age: 27 },
      { name: 'SanSan', age: 0.6 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Roy Lee', age: 31 },
        { name: 'Earng', age: 27 },
        { name: 'SanSan Lee', age: 0.6 }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby: Reading books..</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
