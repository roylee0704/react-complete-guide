import React from 'react';

export default (props) => {

    const style = {
        backgroundColor: 'white',
        padding: '8px',
        font: 'inherit',
        border: '1px solid blue',
        cursor: 'pointer'
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is really working</p>
            <button style={style} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}