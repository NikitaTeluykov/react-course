import './App.css';
import React, {Component} from "react";
import Car from "./Car/Car";

class App extends Component {
    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010},
        ],
        pageTitle: 'React Components',
        showCars: false
    }

    onChangeName(name, index) {
        const cars = [...this.state.cars]
        cars[index].name = name;

        this.setState({
            cars
        })
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat()

        cars.splice(index, 1);
        console.log(cars)
        this.setState({cars})
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }

        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeName={(e)=>this.onChangeName(e.target.value, index)}
                        onDelete={this.deleteHandler.bind(this, index)}
                    />
                )
            })
        }

        return (
            <div style={divStyle}>
                <h1 style={{color: 'blue', fontSize: '20px'}}>{this.state.pageTitle}</h1>

                <button onClick={this.toggleCarsHandler}>Toggle cars</button>

                {cars}
            </div>
        )
    }
}

export default App;
