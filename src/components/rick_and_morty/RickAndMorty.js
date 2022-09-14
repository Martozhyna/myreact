export default function Character (props) {

let {item:user} = props;

    return (
        <div className={'main'}>

            <div className={'photo'}>
                <img src={user.image} alt=""/>
            </div>

            <div className={'info'}>
                <h3>{user.id}.{user.name}</h3>
                <p>Status: {user.status} <br/> Species: {user.species} <br/> Gender: {user.gender} <br/> </p>
            </div>


        </div>
    )
}