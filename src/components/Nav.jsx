import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";
import "../hojas-de-estilos/Nav.css";

function Nav(props) {
  return (
    <nav className="navbar">
        <ul>
            <h1 className="logo">Rick and Morty</h1>
            <li><Link to="/About">ABOUT</Link></li>
            <li><Link to="/home">HOME</Link></li>
            <li><SearchBar onSearch={props.onSearch} /></li>
            <li onClick={()=>{props.logout()}}><Link>LOGOUT</Link></li>
          </ul>
    </nav>
  );
}

export default Nav;
