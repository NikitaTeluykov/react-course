import './App.css';
import React from "react";
import Car from "./Car/Car";

function App() {
    const divStyle = {
        textAlign: 'center'
    }

    return (
        <div style={divStyle}>
            <h1 style={{color: 'blue', fontSize: '20px'}}>Hello world!</h1>
            <Car name={'Ford'} year = {2018}>
                <p style={{color: 'red'}}>Color</p>
            </Car>
            <Car name={'Audi'} year={2016} >
                <p style={{color: 'blue'}}>Color</p>
            </Car>
                <Car name={'Mazda'} year={2010} />
        </div>
    )
  // return React.createElement(
  //     'div',
  //     {
  //         className: 'App'
  //     },
  //     React.createElement(
  //         'h1',
  //         null,
  //         'Hello world!'
  //     )
  // );
}

export default App;
