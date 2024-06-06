import './Logo.css'

function logo(props){
    return (
        <div className="card">
            <img className="photo" src={props.value.image} alt="" width={200} height={200} />
            <h2>{props.value.name}</h2>
            
        </div>
    )
    
}
export default logo;