import { useEffect } from "react";
import { STATUS } from "../store/ProductSlice";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";
import { fetchProducts } from "../store/ProductSlice";
import { useSelector } from "react-redux";
const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const onAddCartHandler = (product) => {
    dispatch(add(product));
  };
  if (status === STATUS.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status === STATUS.ERROR) {
    return <h2 style={{ color: "red" }}>Error...</h2>;
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>$ {product.price}</h5>
          <button onClick={() => onAddCartHandler(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
