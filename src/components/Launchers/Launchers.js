import {useEffect, useState} from "react";
import {launcheService} from "../services";
import {Launche} from "./Launche";

const Launches = ({getLaunches}) => {
    const [launches, setLaunche] = useState([]);
    useEffect(() => {
        launcheService.getAll().then(({data}) =>
            data.filter(launche => launche.launch_year != 2020)).then(launches=>setLaunche(launches))
    }, [])

    return (
        <div>
            {
                launches.map(launche => <Launche key={launche.flight_number} launche={launche}/>)
            }
        </div>
    );
};

export {Launches};