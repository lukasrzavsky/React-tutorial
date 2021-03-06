import React, {Component, Fragment} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

//Hook
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js rendering...]')
        return (
            <div className={classes.Person} >
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                // ref={(inputEl) => {this.inputElement = inputEl}} 
                ref={this.inputElementRef}
                type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )

    }
}


// const Person = ({ name, age, children, changed, clicked, id }) => {
//     console.log('[Person.js rendering...]')
//     return (
//         // <div className={classes.Person} >
//         <Fragment>
//             <p onClick={() => clicked(id)}>I am {name} and I am {age} years old</p>
//             <p>{children}</p>
//             <input type="text" onChange={(event) => changed(event, id)} value={name} />
//         {/* </div> */}
//         </Fragment>
//     )
// }

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

};

export default withClass(Person, classes.Person);