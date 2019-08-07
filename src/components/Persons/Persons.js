import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent { //PureComponent sleduje vsetky zmeny componentov - nahradza shoulComponentUpdate...
        // static getDerivedStateFromProps(props, state) {
        //         console.log('[Persons.js] getDerivedStateFromProps');
        //         return state;
        // }

        // componentWillReceiveProps(props) {
        //         console.log('[Persons.js] componentWillReceiveProps, props')
        // }

        // shouldComponentUpdate(nextProps, nextState) {
        //         console.log('[Persons.js] shouldComponentUpdate');
        //         if(
        //                 nextProps.persons !== this.props.persons || 
        //                 nextProps.changed !== this.props.changed || 
        //                 nextProps.clicked !== this.props.clicked
        //                 ) {
        //                 return true;
        //         } else {
        //                 return false;
        //         }
        // }

        getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
        }

        // componentWillUpdate() {

        // }

        componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
        }

        componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
        }

        render() {
        console.log('[Persons.js] rendering...');
        return props.persons.map((person, index) => {
        return (
                <Person
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        click={() => props.clicked(index)}
                        changed={(event) => props.changed(event, person.id)} />
        );
});
        }
}

// {/* map sluzi pre pracu s array, v podstate foreach */ }
// const Persons = (props) => {
//         console.log('[Persons.js] rendering...')
//         return props.persons.map((person, index) => {
//         return (
//                 <Person
//                         name={person.name}
//                         age={person.age}
//                         key={person.id}
//                         click={() => props.clicked(index)}
//                         changed={(event) => props.changed(event, person.id)} />
//         );
// });
// };
export default Persons;