import Person from "./Person/Person"
import React from 'react';

export default (props) => {
    if (!props.show) {
        return null;
    }


    return props.persons.map(person =>
        <Person
            key={person.id}
            name={person.name}
            age={person.age}
            change={(event) => props.changed(event, person.id)}
            click={() => props.clicked(person.id)}
        />
    );
}