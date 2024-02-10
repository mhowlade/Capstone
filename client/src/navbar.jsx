import { Link } from "react-router-dom";
import SearchFunction from "./searchfunction";
import "./styles/navbar.css";

function Navbar() {
  return (<>
    <div className="header">
      <div className="brand">
        <h1>BB Pet Emporium</h1>
      </div>
        <div className="cartcontainer">
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <b>Cart</b>
        </Link>
        </div>
    </div>
    <div className="categories">
      <ul>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <b>Featured</b>
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
      </ul>
    </div>
    </>
  );
}

export default Navbar;
