import React, {Component, Fragment} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

//Hook
// class Person extends Component {
//     render() {
//         console.log('[Person.js rendering...]')
//         return (
//             <div className={classes.Person} >
//                 <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
//                 <p>{this.props.children}</p>
//                 <input type="text" onChange={this.props.changed} value={this.props.name} />
//             </div>
//         )

//     }
// }


const Person = ({ name, age, children, changed, clicked, id }) => {
    console.log('[Person.js rendering...]')
    return (
        // <div className={classes.Person} >
        <Fragment>
            <p onClick={() => clicked(id)}>I am {name} and I am {age} years old</p>
            <p>{children}</p>
            <input type="text" onChange={(event) => changed(event, id)} value={name} />
        {/* </div> */}
        </Fragment>
    )
}

export default withClass(Person, classes.Person);