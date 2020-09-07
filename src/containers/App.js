import React, { useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
      <Cockpit title="App title" clicked={togglePersonsHandler} />
      <Persons persons={personsState.persons} show={showPersonsState.showPersons} clicked={deletePersonHandler} changed={nameChangedHandler} />
    </div>
  );
};