function User (props) {
    let {item} = props;
    return (
        <div>
            <h3>{item.id}. {item.name}</h3>
            <p>Username: {item.username}
            <br/>
            Phone: {item.phone}</p>
        </div>
    )
}
export {User}