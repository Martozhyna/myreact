import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./components/user/Users";
import User from "./components/user/User";

function App() {
    let [users, setUsers] = useState([]);

    let [chosenUser, setChosenUser] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    },[])

    const chooseUser = (id) => {
        getUser(id).then(value => setChosenUser(value.data));
    }
  return (
    <div className="App">
<h2>Users information</h2>
        <div>
            {
                chosenUser?.name
            }
        </div>
        {
            users.map(value => <User key={value.id} item={value} chooseUser={chooseUser}/>)
        }
    </div>
  );
}

export default App;
