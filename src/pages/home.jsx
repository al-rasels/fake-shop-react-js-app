import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import ProductTile from "../components/product-tile";
import Pagination from "../components/footer/pagination";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of products per page

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

  // Calculate pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      {isLoading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Bars height={"120"} width={"120"} color="#007FFF" visible={true} />
        </div>
      ) : (
        <>
          <div className="bg-blue-50 mx-auto col-12 align-middle backdrop-blur-xl rounded-lg grid sm:grid-cols-2 md:grid-cols-4 max-w-6xl mt-20">
            {paginatedProducts.map((product, i) => (
              <ProductTile key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default Home;
