import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Navbar() {
    const { logout } = React.useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = (event) => {
        event.preventDefault();
        logout();
        history.push('/');
    };

    return (
        <nav>
            <div className="nav-wrapper blue darken-1 navbar">
                <span href="/" className="brand-logo">
                    Сокращение ссылок
                </span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/create">Создать</NavLink>
                    </li>
                    <li>
                        <NavLink to="/links">Ссылки</NavLink>
                    </li>
                    <li>
                        <a href="/" onClick={logoutHandler}>
                            Выйти
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
