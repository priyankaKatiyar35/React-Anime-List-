import {NavLink} from 'react-router-dom';
import classes from './SelectorHeader.module.css';
const SelectorHeader = ()=>{
    return (
        <header className={classes.header}>
         <nav>
            <ul>
                <li>
                <NavLink activeClassName={classes.active}  to='/welcome'>Anime Search</NavLink>
                </li>
                <li>
                <NavLink activeClassName={classes.active} to='/fav'>Favorite</NavLink>
                </li>
            </ul>
         </nav>
        </header>
    )
}

export default SelectorHeader;