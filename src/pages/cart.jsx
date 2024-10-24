import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex justify-center bg-blue-50">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 w-1/2 mx-auto">
            <div className="flex-col flex justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="text-red-800 text-lg font-bold">
                Your Cart Summery
              </h1>
              <p>
                <span
                  className="text-gray-800 font-bold
              ">
                  Total Items
                </span>
                <span>:{cart.length}</span>
              </p>
              <p>
                <span
                  className="text-gray-800 font-bold
              ">
                  Total Ammout
                </span>
                <span>:{totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is Empty
          </h1>
          <Link to={"/"}>
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4 mt-5">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
