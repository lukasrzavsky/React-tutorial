// import React, { useState } from 'react';
import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person'
import Validation from '../Validation/ValidationComponent'
import Char from '../Char/Char'
import Cockpit from '../components/cockpit/cockpit'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 25 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 21 }
    ],
    showPersons: false,
    userInput: '',
    showCockpit: true,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount () {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  // componentWillMount () {
  //   console.log('[App.js] componentWillMount')
  // }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Matus', age: 29 },
        { name: 'Andrea', age: 21 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //slice skopiruje array
    const persons = [...this.state.persons] //lepsie riesenie kopirovania array
    const filteredPersons = persons.filter(person => person.id !== personIndex)
    this.setState({ persons: filteredPersons });
  }

  nameChangedHandler = (event, id) => { //nefunguje so spravnym indexom
    const personIndex = this.state.persons.findIndex(p => { //ak sa id osoby zhoduje s id komponentu
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const { showPersons } = this.state;
    this.setState(
      { showPersons: !showPersons });
  }

  //User Input handlers
  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedtext = text.join('');
    this.setState({ userInput: updatedtext });
  }

  render() {
    console.log('[App.js] render')
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)} />
    });

    const { persons } = this.state;

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({ showCockpit: false})}}>Remove cockpit</button>
        { this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler} />
          :null}
        {this.state.showPersons && (
          persons.map(person => (
            <Person
              id={person.id}
              key={person.id}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
              name={person.name}
              age={person.age}
            >
              {person.children}
            </Person>
          ))
        )}
        <hr />
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />

        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}


// // React hook
// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Max', age: 25},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 21}
//     ],
//     otherState: 'Some text'
//   })

//   const switchNameHandler = (newName) => {
//     setPersonsState({persons: [
//       { name: newName, age: 25},
//       { name: 'Matus', age: 29},
//       { name: 'Andrea', age: 21}
//     ],
//     otherState: personsState.otherState
//   })
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I am a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={() => switchNameHandler('Lukas')}>Switch name</button>  {/* // to iste co bind, ale bind sa odporuca */}
//       <Person 
//       name ={personsState.persons[0].name} 
//       age={personsState.persons[0].age}/>
//       <Person 
//       name ={personsState.persons[1].name} 
//       age={personsState.persons[1].age}
//       click = {switchNameHandler.bind(this, 'Luk')}> My hobbies are sport</Person>
//       <Person 
//       name ={personsState.persons[2].name} 
//       age={personsState.persons[2].age}/>
//     </div>
//   );
//     // return React.createElement('div', {classname: App}, React.createElement('h1', null, 'I am a React App'));
// }

export default App;


