import React from 'react';

export default (props) => {
    return (
        <div>
            <p>My name is {props.name}, I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    );
}