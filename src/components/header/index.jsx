import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-3 px-6 sm:px-4">
        <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-around">
          <div>
            <Link to={"/"}>
              <div className="flex">
                <span className="text-blue-400 font-extrabold text-xl border-t-4 border-dashed  pb-2">
                  fake<span className="text-orange-700">Store</span>
                </span>
              </div>
            </Link>
          </div>
          <div>
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
              <li>
                <div className="flex justify-center gap-4 align-middle mt-1">
                  <NavLink
                    className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                    to={"/"}>
                    Home
                  </NavLink>

                  <NavLink
                    Name="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                    to={"/cart"}>
                    View Cart
                  </NavLink>
                  <NavLink
                    className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                    to={"/services"}>
                    Services
                  </NavLink>
                  <NavLink
                    className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                    to={"/contact"}>
                    Contact
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex gap-3">
            <Link
              className="block rounded py-2 pl-3 pr-4 text-gray-700 font-semibold hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
              to="/login">
              Login
            </Link>
            <Link
              className="block rounded py-2 pl-3 pr-4 text-gray-700 font-semibold hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
              to="/register">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
