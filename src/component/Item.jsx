import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import updateCart from "../Redux/Action/checkoutCart";

const Item = ({ product }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (qty !== 0) {
      dispatch(updateCart({ ...product, qty }));
    }
  }, [qty]);

  const handleQuantityChange = (evt) => {
    //console.log(evt);
    setQty(parseInt(evt.target.value, 10));
    // dispatch(updateCart(product));
  };

  const handleQuantityMinus = (evt) => {
    setQty(qty - 1);
    // dispatch(updateCart(product));
  };
  const handleQuantityPlus = (evt) => {
    setQty(qty + 1);
    // dispatch(updateCart(product));
  };
  //   console.log(qty);
  return (
    <div className="Product">
      <img className="ImgProduct" src={product.image.url} alt="Product-Name" />
      <p>{product.productName}</p>
      <p>Stok :{product.availableQuantity}</p>
      <p>Harga: {product.price}</p>
      <button className="btn " onClick={handleQuantityMinus}>
        -
      </button>
      <input type="number" value={qty} onChange={handleQuantityChange} />
      <button className="btn " onClick={handleQuantityPlus}>
        +
      </button>
    </div>
  );
};
export default Item;
