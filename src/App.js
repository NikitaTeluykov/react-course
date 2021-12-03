import classes from './App.module.scss';
import React, {Component} from "react";
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false)

class App extends Component {
    constructor(props) {
        console.log('App constructor')
        super(props);

        this.state = {
            clicked: false,
            cars: [
                {name: 'Ford', year: 2018},
                {name: 'Audi', year: '2016'},
                {name: 'Mazda', year: 2010},
            ],
            pageTitle: 'React Components',
            showCars: false
        }
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
        this.setState({cars})
    }

    componentDidMount() {
        console.log('App componentDidMount')
    }



    render() {
        console.log('App render')
        const divStyle = {
            textAlign: 'center'
        }

        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            index = {index}
                            onChangeName={(e)=>this.onChangeName(e.target.value, index)}
                            onDelete={this.deleteHandler.bind(this, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }

        return (
            <div style={divStyle} className={classes.App}>
                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter />
                </ClickedContext.Provider>


                <hr/>
                <h1>{this.props.title}</h1>
                <button onClick={this.toggleCarsHandler} style={{marginTop: '20px'}}>Toggle cars</button>
                <button onClick={()=> this.setState({clicked: true})}>Change clicked</button>
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: "20px"
                }}>
                    {cars}
                </div>
            </div>
        )
    }
}

export default App;
