import React, { useContext } from 'react';
import logo from '../assets/logo.jpg'
import Button from './UI/Button';
import CartContext from '../store/CartContext';

const Header = () => {

    const { items } = useContext(CartContext)
    
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Food Order App logo" />
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button className='text-button' textOnly = {true}>Cart ({items.length}) </Button>
                        </nav>
        </header>
    )
}

export default Header