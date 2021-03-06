import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../store/Store";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>REDUX STORE</span>
      <div>
        <Link className="navLink" to="/redux-toolkit">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items : {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
