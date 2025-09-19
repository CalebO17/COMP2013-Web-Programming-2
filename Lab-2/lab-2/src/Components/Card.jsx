export default function Card(props) {
  return (
    <div className="Card-Component">
      <img src={props.image} alt="" width="100px" />
      <h2 className="State">{props.country}</h2>
      <p className="Hotel-Name">{props.hotel}</p>
      {props.rating < 4.0 ? (
        <p className="Bad-Rating">{props.rating} ★</p>
      ) : (
        <p className="Good-Rating">{props.rating} ★</p>
      )}
      <p className="Price">{props.price}</p>
    </div>
  );
}
