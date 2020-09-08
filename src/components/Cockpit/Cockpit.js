import React, { useEffect } from 'react';
import Aux from '../../hoc/Aux';

const cockpit = props => {
    console.log('[Cockpit] rendering...')

    // []        = componentDidMount + unmounted
    // undefined = componentDidMount + componentDidUpdate (runs on every update cycle)
    useEffect(() => {
        console.log('[Cockpit] useEffect');

        setTimeout(() => {
            console.log('[Cockpit] Saved data to the cloud!')
        }, 1000);

        return () => {
            console.log('[Cockpit] clean up work in useEffect!')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit] 2nd useEffect')

        return () => {
            console.log('[Cockpit] clean up work in 2nd useEffect')
        }
    });

    const style = {
        backgroundColor: 'white',
        padding: '8px',
        font: 'inherit',
        border: '1px solid blue',
        cursor: 'pointer'
    }

    return (
        <Aux>
            <h1>{props.title}</h1>
            <p>This is really working</p>
            <button style={style} onClick={props.clicked}>Toggle Persons</button>
        </Aux>
    );
}

export default React.memo(cockpit);