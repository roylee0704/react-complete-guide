import React, { useEffect, useRef } from 'react';

// webpack will pick this up and inject to html
// .css should be expressed explicitly, don't ignore.
import './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

const Person = (props) => {

    const inputEl = useRef(null);

    useEffect(() => {
        inputEl.current.focus();
    }, []);

    console.log('[Person] rendering...')
    return (
        <Aux>
            <p onClick={props.click}>My name is {props.name}, I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input
                type="text"
                onChange={props.change}
                value={props.name}
                ref={inputEl}
            />
        </Aux>
    );
};

export default withClass(Person, 'Person');