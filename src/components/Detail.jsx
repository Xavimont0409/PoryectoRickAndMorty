import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const KEY = "6f4ee369837f.a61f890756f88c233753";

  useEffect(() => {
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      });
  }, [id]);
  

  return (
    <div>
      {character.origin?.name ? (
        <>
          <button>
            <Link to="/home">Home</Link>
          </button>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt={character.name} />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Detail;
