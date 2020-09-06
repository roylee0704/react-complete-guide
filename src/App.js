import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

export default () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'abc', name: 'Roy', age: 30 },
      { id: 'def', name: 'Earng', age: 27 },
      { id: 'ghi', name: 'SanSan', age: 0.6 }
    ],
  });

  const [showPersonsState, setShowPersonsState] = useState({
    showPersons: false,
  });

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(person => person.id === id)
    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons
    });
  }

  const togglePersonsHandler = () => {
    setShowPersonsState({
      showPersons: !showPersonsState.showPersons
    });
  }

  const deletePersonHandler = (id) => {
    const personIndex = personsState.persons.findIndex(person => person.id === id);
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);

    setPersonsState({
      persons
    });
  }

  const listPerson = (show) => {
    if (!show) {
      return null;
    }

    return (
      <div>
        {
          personsState.persons.map(person =>
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              change={(event) => nameChangedHandler(event, person.id)}
              click={() => deletePersonHandler(person.id)}
            />
          )
        }
      </div>
    )
  };


  // inline-style: 
  // - pros: to scope the style to targeted element
  // - cons: limitation
  const style = {
    backgroundColor: 'white',
    padding: '8px',
    font: 'inherit',
    border: '1px solid blue',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is really working</p>
      <button style={style} onClick={togglePersonsHandler}>Toggle Persons</button>
      {listPerson(showPersonsState.showPersons)}
    </div>
  );
};