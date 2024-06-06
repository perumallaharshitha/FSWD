import './Body.css';

function Body(props) {
  return (
    <div className="card">
      <img className="photo" src={props.value.image} alt="Content" />
      <h2 className="head">{props.value.head}</h2>
      <p className="para">{props.value.des}</p>
      <p className="title">{props.value.title}</p>
      <p className="date">{props.value.date}</p>
    </div>
  );
}

export default Body;
