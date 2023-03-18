import { Link } from "react-router-dom";

function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <img src={image} alt={name} />
      <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
    </div>
  );
};

export default Card
