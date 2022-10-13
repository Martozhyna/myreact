import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css';

function Header () {
    let navigate = useNavigate();
    return (
        <>
            <div className={css.Header}>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>
            <div className={css.btn}>
                <button onClick={() => navigate(-1)}>Prev</button>
                <button onClick={() => navigate(1)}>Next</button>
            </div>
        </>
    );
}
export {Header}