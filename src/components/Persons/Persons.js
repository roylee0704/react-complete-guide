import Person from "./Person/Person"
import React from 'react';

const Persons = (props) => {
    if (!props.show) {
        return null;
    }

    console.log('[Persons] rendering...')

    return props.persons.map(person =>
        <Person
            key={person.id}
            name={person.name}
            age={person.age}
            change={(event) => props.changed(event, person.id)}
            click={() => props.clicked(person.id)}
        />
    );
};

export default React.memo(Persons);