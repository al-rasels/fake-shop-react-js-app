import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";
import ReactStars from "react-rating-stars-component";
function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  function handleAddToCart() {
    dispatch(addToCart(product));
  }
  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }
  return (
    <article className="flex bg-white flex-col items-center my-3 mx-2 rounded-xl px-2 py-4 gap-y-1 shadow-sm hover:border-blue-100 hover:border-4 hover:transform hover:scale-105 duration-300 w-80 h-72">
      <div className="h-[150px] relative flex items-end overflow-hidden rounded-xl object-cover">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover h-full w-full"
        />
      </div>

      <h3 className="text-slate-700 font-sm mx-3">{product.title}</h3>
      <div className="pointer-events-none">
        <ReactStars
          count={5}
          size={24}
          value={Math.round(product.rating["rate"])}
          fullIcon={<i className="fa fa-star">{5}</i>}
          activeColor="#ffd700"
          disabled
        />
      </div>
      <div className="my-2">
        <div class="flex align-center justify-between gap-3">
          <div class="text-lg font-bold text-blue-500 block">
            $ {product.price}
          </div>

          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="text-sm rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            {cart.some((item) => item.id === product.id)
              ? "Added to cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductTile;
