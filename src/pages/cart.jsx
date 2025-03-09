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
    <div className="h-screen  bg-blue-50 pt-20">
      <h1 class="mb-10 text-center text-2xl font-bold mt-10">Cart Items</h1>
      {cart && cart.length ? (
        <>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="w-1/3 grid md:grid-cols-2 mx-auto py-5 px-2">
              <div className="flex-col flex justify-center items-center p-3">
                {cart.map((cartItem) => (
                  <CartTile cartItem={cartItem} />
                ))}
              </div>
            </div>
            <div className="w-1/3 rounded-lg ">
              <div className="flex flex-col justify-center bg-white items-center p-5 mt-14 hover:shadow-md hover:scale-105 duration-300 text-gray-800 shadow-sm">
                <h1 className="text-gray-700 text-lg font-bold">
                  Your Cart Summery
                </h1>
                <p>
                  <span className="text-gray-800 font-bold  ">Total Items</span>
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
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is Empty
          </h1>
          <Link to={"/"}>
            <button className="bg-blue-950 text-white border-2 rounded-lg font-bold p-4 mt-5">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
