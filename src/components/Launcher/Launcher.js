import React from "react";
const Launche = ({launche, getLaunche, addLaunche}) => {
    const {flight_number, mission_name, launch_year} = launche;
    return (
        <div>
            <h1>{flight_number}. {mission_name}</h1>
            <h2> -  -  -{launch_year} -  -  -</h2>
            <img src="https://images2.imgbox.com/9a/96/nLppz9HW_o.png" alt="mission_patch_small"/>
        </div>
    )
};

export {Launche};