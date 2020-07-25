import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';


//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


//import Radium, {StyleRoot} from 'radium';

//import styled from 'styled-components';

// const StyledButton = styled.button`
// background-color: green;
//background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       font-weight: bold;
//       border: 2px solid black;
//       border-radius: 20px;
//       padding: 8px;
//       cursor: pointer;
//       &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//         color: black;
//       }
// `;

class App extends Component {
    state = {
        persons: [
            { id: '1', name: 'Max', age: 28 },
            { id: '2', name: 'Manu', age: 29 },
            { id: '3', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }


    // -----------Not Using this but kept for learn----------

    // switchNameHandler = (newName) => {
    //   // console.log('Was clicked!');
    //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    //   this.setState({
    //     persons: [
    //       { name: newName, age: 28 },
    //       { name: 'Manu', age: 29 },
    //       { name: 'Stephanie', age: 27 }
    //     ]
    //   })
    // }

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons })


        //--------Above line updateed this code--- so this is replace by above line code-----

        // this.setState({
        //   persons: [
        //     { name: 'Max', age: 28 },
        //     { name: event.target.value, age: 29 },
        //     { name: 'Stephanie', age: 26 }
        //   ]
        // })


    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }



    togglePersonHandler = (event) => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })

    }

    render() {
        // const style = {
        //   backgroundColor: 'green',
        //   color: 'white',
        //   font: 'inherit',
        //   fontWeight: 'bold',
        //   border: '2px solid black',
        //   borderRadius: '20px',
        //   padding: '8px',
        //   cursor: 'pointer',
        //   ':hover': {
        //     backgroundColor: 'lightgreen',
        //     color: 'black'
        //   }
        // };

        let persons = null;
        let btnClass = [classes.Button]

        if (this.state.showPersons) {
            persons = (

                <div> {
                    this.state.persons.map((person, index) => {
                        return  <Person
                        // <ErrorBoundary key= {person.id}> 
                       
                        click = {
                            () => this.deletePersonHandler(index)
                        }
                        name = { person.name }
                        age = { person.age }
                        key = { person.id }
                        changed = {
                            (event) => this.nameChangedHandler(event, person.id)
                        }
                        />
                        // </ErrorBoundary>
                    })
                } {
                    /* <Person
                                name={this.state.persons[0].name}
                                age={this.state.persons[0].age} />
                              <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, 'Max!')}
                                changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
                              <Person
                                name={this.state.persons[2].name}
                                age={this.state.persons[2].age} /> */
                } </div>

            );

            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //   backgroundColor: 'salmon',
            //   color: 'black'
            // }

            btnClass.push(classes.Red);

        }

        //---- First Way of dynamic styling-------

        //let classes= ['red','bold'].join(' ');

        //-----------Second way of styling----

        const assignedclasses = [];

        if (this.state.persons.length <= 2) {
            assignedclasses.push(classes.red); // classes = ['red'] will be used;
        }

        if (this.state.persons.length <= 1) {
            assignedclasses.push(classes.bold); // classes = ['bold'] will be used;
        }

        return (

            // <StyleRoot>
            <div className = { classes.App } >
            <h1 > Hi, this is my practice React App </h1>

            { /* //----------For first way of styling---------- */ } { /* <p className={classes}>This is really working!</p> */ }


            { /* second way of styling */ }

            <p className = { assignedclasses.join(' ') } > This is really working! </p>

            <button
            className = { btnClass.join(' ') }
            onClick = { this.togglePersonHandler } > Toggle Persons </button>


            {
                /* <StyledButton
                        alt={this.state.showPersons}

                          onClick={this.togglePersonHandler}>Toggle Persons</StyledButton> */
            }

            { persons }

            { /* ------------First way Of Using Conditional Statement-------------- */ }

            {
                /* { this.state.showPersons === true ? 


                          <div>
                            <Person
                              name={this.state.persons[0].name}
                              age={this.state.persons[0].age} />
                            <Person
                              name={this.state.persons[1].name}
                              age={this.state.persons[1].age}
                              click={this.switchNameHandler.bind(this, 'Max!')}
                              changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
                            <Person
                              name={this.state.persons[2].name}
                              age={this.state.persons[2].age} />
                          </div> : null

                        } */
            }


            </div>

            // </StyleRoot>

        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

// export default Radium(App);

export default App;