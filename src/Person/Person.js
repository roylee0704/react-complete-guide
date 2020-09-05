import React from 'react';

export default (props) => {
    return (
        <div>
            <p onClick={props.click}>My name is {props.name}, I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    );
}