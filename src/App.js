import React, {Component} from "react";
import Cars from "./Cars/Cars";
import About from "./About/About";
import './App.scss'
import {Route, Routes, NavLink, Redirect} from "react-router-dom";
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {
    state = {
        isLoggedIn: false
    }

    render() {
        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to="/"
                                className={({ isActive }) =>
                                    `link ${
                                        isActive
                                            ? "active"
                                            : // Couldn't do this before!
                                            "inactive-link"
                                    }`
                                }
                            >
                                Home

                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname: '/cars'
                            }}>Cars</NavLink>
                        </li>
                    </ul>
                </nav>

                <hr/>
                <div style={{textAlign: 'center'}}>
                    <h3>Is logged in {this.state.isLoggedIn ? 'true' : 'false'}</h3>
                    <button onClick={()=>this.setState({isLoggedIn: true})}>Login</button>
                </div>
                <hr/>
                <Routes>
                    <Route path="/"  element={<h1>Home page</h1>}/>
                    {this.state.isLoggedIn ? <Route path="/about" element={<About />} /> : null}
                    <Route path="/cars"  element={<Cars />} />
                    <Route path="/cars/:name"  element={<CarDetail />} />
                    <Route path='*' element={<h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
                </Routes>
                {/*<Cars />*/}
            </div>
        )
    }
}

export default App;
