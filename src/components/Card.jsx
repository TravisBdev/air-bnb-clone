export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt="olympic swimmer smiling" />
      <span>
        <img className="card-star" src="src\assets\star.png" alt="red star" />
        {props.rating.toFixed(1)} ({props.reviewCount}) • {props.country}
      </span>
      <p>{props.title}</p>
      <p>
        <strong>${props.price}</strong> / person
      </p>
    </div>
  );
}
