import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchListProducts() {
    setIsLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (data) {
      setProducts(data);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchListProducts();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="min-h-screen w-Full flex justify-center items-center">
          <Bars
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}></Bars>
        </div>
      ) : (
        <div className="bg-slate-100 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItems) => (
                <ProductTile product={productItems} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
export default Home;
