import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartSlice";

function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <>
      <div className="mx-auto justify-center px-6 md:flex md:space-x-6 min-w-[400px] xl:px-0">
        <div className="rounded-lg min-w-[400px] mx-auto">
        <div class="justify-between mb-6 rounded-lg bg-white py-5 px-2 shadow-md  sm:flex sm:justify-start">
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="w-1/4 px-2">
            <img src={cartItem.image} alt="{cartItem.titile}" />
          </div>
          <div className="flex-col">
            <h1 className="block text-gray-900 font-normal">
              {cartItem.title.length <= 30
                ? cartItem.title
                : cartItem.title.slice(0, 30) + "..."}
            </h1>
            <span className="text-green-900 font-semibold">
              <p>
                Total:{cartItem?.price}$
              </p>
            </span>
          </div>

        </div>
        <div>
          <button
            onClick={handleRemoveFromCart} >
            Remove
          </button>
        </div>
          </div>
        </div>
        </div>
     
    </>
  );
}

export default CartTile;
