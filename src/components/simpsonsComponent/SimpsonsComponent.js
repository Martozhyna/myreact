 function SimpsonsComponent (props) {
    let {itemName, info, pic} = props;
    let classNameItem = 'card'
    return (
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <p>{info}</p>
            <img src={pic} alt={itemName}/>
        </div>
    );
}

 export default SimpsonsComponent;