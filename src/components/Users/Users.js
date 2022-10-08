import {UserForm} from "../UserForm/UserForm";
import {useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from "../User/User";

function Users () {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    },[])


    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <div>
                {
                    users.map(value => <User key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}
export {Users}