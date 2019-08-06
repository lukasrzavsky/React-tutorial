import React from 'react';
import classes from './Person.css';

const Person = ({ name, age, children, changed, clicked, id }) => (
    <div className={classes.Person} >
        <p onClick={() => clicked(id)}>I am {name} and I am {age} years old</p>
        <p>{children}</p>
        <input type="text" onChange={(event) => changed(event, id)} value={name} />
    </div>
)

export default Person;