import React from 'react';

// webpack will pick this up and inject to html
// .css should be expressed explicitly, don't ignore.
import './Person.css';

export default (props) => {
    console.log('[Person] rendering...')

    return (
        <div className="Person">
            <p onClick={props.click}>My name is {props.name}, I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
}