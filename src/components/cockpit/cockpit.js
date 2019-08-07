import React, { useEffect } from 'react'
import classes from './cockpit.css'

const cockpit = (props) => {
  useEffect(() => {
    console.log('[cockpit.js] useEffect', props);
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[cockpit.js] cleanup work in useEffect');
    };
  }, []); //[] vykon8 sa len raz, [persons.person] - ked sa zmeni nieco v array

  useEffect(() => {
    console.log('[cockpit.js] 2nd useEffect');
    return () => {
      console.log('[cockpit.js] cleanup work in 2nd useEffect');
    };
  });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if(props.personsLength <= 2) {
      // classes.push('red');                      bez CSS modulov
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      // classes.push('bold');                       bez CSS modulov
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
            className={btnClass}
            onClick={props.clicked}>Toggle persons</button>
        </div>
        );
}

export default React.memo(cockpit);