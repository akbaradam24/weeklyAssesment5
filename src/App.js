//import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Item from "./component/Item";
// import Checkout from "./component/Checkout";

function App() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_API_URL}/items`,
    }).then((result) => {
      setItems(result.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Navbar">
          <h2>Toko Buah Ewing</h2>
        </div>
        <div className="Products">
          {items.map((item, index) => (
            <Item key={index} product={item} />
          ))}
        </div>

        <div className="navbar-secondary">
          <h4>Total Belanja : {0}</h4>
          <Link to="/checkout">
            <button type="button" className="btn-checkout">
              Checkout
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
