import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";
import { fetchProducts } from "../store/ProductSlice";
const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products/");
    //   const productObj = await res.json();
    //   setProducts(productObj);
    //   console.log(products);
    // };
    // fetchProducts();
  }, []);
  const onAddCartHandler = (product) => {
    dispatch(add(product));
  };
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
