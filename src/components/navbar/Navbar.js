import React, { Component } from 'react';
import './navbar.scss';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handelToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return <div className="contanier">
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src="https://via.placeholder.com/250x60" alt="logo"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handelToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/jobs">Vacatures</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    }
}
