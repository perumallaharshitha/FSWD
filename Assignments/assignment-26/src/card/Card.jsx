import './Card.css'

function Card(props){
    return (
        <div className="card">
            <img className="photo" src={props.value.link} alt="" width={200} height={285}  />
            <h2 className="font">{props.value.title}</h2>
            <p className="font">{props.value.description}</p>
            <p className="cat">{props.value.category}</p>
            <p className="rating">Rating - {props.value.rating.rate} • {props.value.rating.count}</p>
            <h3 className="h3">₹{props.value.price}</h3>
            
            
            
        </div>
    )
}
export default Card;