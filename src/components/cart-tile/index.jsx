import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartSlice";

function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <>
      <div className="flex items-center py-3 px-5 bg-white shadow-sm mt-2 mb-2 ms-4 justify-center rounded-xl text-gray-900">
        <div className="flex">
          <div className="max-w-20 max-h-20 px-2">
            <img src={cartItem.image} alt={cartItem.titile} />
          </div>
          <div className="mx-3 align-middle spcae-y-5">
            <h1 className="text-gray-900 font-light w-64">
              {cartItem.title.length <= 30
                ? cartItem.title
                : cartItem.title.slice(0, 30) + "..."}
            </h1>
            <span className="flex my-2 gap-2">
              <p className="text-gray-900 text-sm font-bold">
                Total:{cartItem?.price}$
              </p>
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="text-white bg-blue-700 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default CartTile;
