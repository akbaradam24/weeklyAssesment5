import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="Checkout">
      <header className="Checkout-header">
        <div className="Checkout-Navbar">
          <h2>Toko Buah Ewing</h2>
          <Link to="/">
            <button type="button">Home</button>
          </Link>
        </div>
      </header>
      <section>
        <h1>Nanti Belanjaan mu tampil disini</h1>
      </section>
      <div className="navbar-secondary">
        <h4>Total Belanja : {0}</h4>
        <Link to="/payment">
          <button type="button" className="btn-payment">
            Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
