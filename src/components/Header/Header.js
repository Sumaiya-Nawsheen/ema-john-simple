import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav><a href="/shop">Shop</a>
            <Link to ="/review">Order Review</Link>
            <Link to ="/inventory">Manage Inventory</Link>
            <button onClick = {() => setLoggedInUser({})}>Sign out</button>
            </nav>
        </div>
    );
}

export default Header;