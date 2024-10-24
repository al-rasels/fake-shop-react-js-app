import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";
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
    <article className="flex bg-white flex-col items-center gap-3 mt-10 ml-5 rounded-xl px-2 py-3 shadow-sm hover:border-gray-200 hover:border-2 hover:transform hover:scale-105 duration-300 w-80">
      <div className="h-[150px] relative flex items-end overflow-hidden rounded-xl object-cover ">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover h-full w-full"
        />
      </div>

      <h3 className="text-slate-700 font-sm mx-3">{product.title}</h3>
      <div>
        <div class="my-3 flex items-center justify-between gap-5">
          <p class="text-lg font-bold text-blue-500">{product.price} ৳</p>

          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="text-sm space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            {cart.some((item) => item.id === product.id) ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductTile;
