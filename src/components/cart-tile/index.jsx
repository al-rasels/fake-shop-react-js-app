import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartSlice";

function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <>
      <div className="flex item p-5 jus  bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            className="h-28 rounded-lg"
            src={cartItem.image}
            alt="{cartItem.titile}"
          />
          <div className="ml-10 self-start spcae-y-5">
            <h1 className="text-xl text-white border-2 rounded-lg font-bold">
              {cartItem?.title}
            </h1>
            <p className="text-white font-extrabold">{cartItem?.price}$</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartTile;
