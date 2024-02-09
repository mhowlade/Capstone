import { Link } from "react-router-dom";
import SearchFunction from "./searchfunction";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navBar">
      <ul>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <b>Home</b>
        </Link>
        <Link to="/dogs" style={{ textDecoration: "none", color: "black" }}>
        <b>Dogs</b>
        </Link>
        <Link to="/cats" style={{ textDecoration: "none", color: "black" }}>
        <b>Cats</b>
        </Link>
        <Link to="/aquatic" style={{ textDecoration: "none", color: "black" }}>
        <b>Aquatic</b>
        </Link>
        <Link to="/birds" style={{ textDecoration: "none", color: "black" }}>
        <b>Birds</b>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
        <b>Cart</b>
        </Link>
      </ul>
      
    </div>
  );
}

export default Navbar;
