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
    <div className="group flex flex-col justify-end items-center border-2 bg-white aspect-[3/4] gap-4 p-4 h-[360px] mt-10 ml-5 rounded-xl">
      <div className="h-2/6">
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
    </div>
  );
}

export default ProductTile;
