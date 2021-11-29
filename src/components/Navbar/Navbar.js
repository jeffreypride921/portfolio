import React from 'react';
import { MenuItems } from './MenuItems';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

class Navbar extends React.Component{
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked}) 
    }
    closeMenu = () => {
        this.setState({clicked: false})
    }

    render(){
        return(
            <nav className='NavbarItems'>
                <Link smooth to="#">
                    <h1 className="nav-header">JP</h1>
                </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} onClick={this.closeMenu}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}> 
                                <Link smooth to={item.url} className={item.cName}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar