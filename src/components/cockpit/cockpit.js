import React from 'react'
import classes from './cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if(props.persons.length <= 2) {
      // classes.push('red');                      bez CSS modulov
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      // classes.push('bold');                       bez CSS modulov
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
            className={btnClass}
            onClick={props.clicked}>Toggle persons</button>
        </div>
        );
}

export default cockpit;