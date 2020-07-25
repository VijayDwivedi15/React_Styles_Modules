import React from 'react';
import classes from './Person.css';
//import Radium from 'radium';

//import styled from 'styled-components';


// const StyleDiv = styled.div`
// width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
//     border-radius: 20px;
//     background-color:paleturquoise;


// @media (min-width:500px)
// {

//         width:450px;

// }



//     border: 1px solid rebeccapurple;
//     border-radius: 10px;


// `;

const person = (props) => {

    // const style = {
    //     '@media (min-width : 500px)': {
    //         width: '450px'
    //     }
    // };

// const rnd= Math.random();
// if(rnd>0.7)
// {
// throw new Error("Something went wrong");
// }


    return (

        // <StyleDiv>

        <div className = { classes.Person } >
        <p onClick = { props.click } > I 'm {props.name} and I am {props.age} years old!</p> 
        <p> { props.children } </p> 
        <input type = "text"
        onChange = { props.changed }
        value = { props.name }
        className = "textcol" />
        </div>

        // </StyleDiv>
    )
};

// export default Radium(person);

export default person;