import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

export default () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Roy', age: 30 },
      { name: 'Earng', age: 27 },
      { name: 'SanSan', age: 0.6 }
    ],
  });


  const [otherState] = useState({
    otherState: 'some other value'
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Roy Lee', age: 31 },
        { name: 'Earng', age: 27 },
        { name: 'SanSan Lee', age: 0.6 }
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobby: Reading books..</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
};