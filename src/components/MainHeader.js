//  This prevents the website from re-rendering everything the way it would for an <a></a>.
//import {Link} from 'react-router-dom';

//  Unlike the regular link, NavLink highlights the page u are currently on,
//  the way u want a Nav to. Adds the "activeClassName" css prop!
import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
    return <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to="/welcome">
                        Welcome
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/products">
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
};

export default MainHeader;