import {useEffect, useState} from "react";

import css from './Users.module.css';
import {userService} from "../../services";
import {User} from "../User/User";

function Users () {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    },[])
    return (
        <div className={css.Users}>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
}
export {Users}