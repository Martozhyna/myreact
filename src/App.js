import {useState} from "react";

import {Launches} from "./components";


const App = () => {
    const [launche, setLaunche] = useState(null);

    return (
        <div>
            <Launches/>
        </div>
    );
};

export {App};