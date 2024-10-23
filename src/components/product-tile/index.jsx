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
    <div className="group flex flex-col justify-end items-center border-2 bg-white aspect-[3/4] gap-4 p-4 h-[360px] mt-10 ml-5 rounded-xl">
      <div className="h-2/6">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover h-full w-full"
        />
      </div>
      <div>
        <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
          {product?.title}
        </h1>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
