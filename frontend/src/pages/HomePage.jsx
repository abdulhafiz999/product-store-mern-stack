import { Rocket } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import ConfirmModal from "../components/ConfirmModal";

function HomePage() {
  // Funtion that fatches all the products from the database
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(null);
  console.log(products);

  async function getAllProducts() {
    //use the javascript fetch API to get the products
    const response = await fetch("http://localhost:3000/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.data);
      setProducts(data.data);

    } else {
      console.error("Failed to fetch products:");
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);
  

  return (
    <div className="border h-screen m-0">
      <div className="w-[90%] mx-auto">
        <h2 className="text-center flex justify-center items-center position-sticky">
          Current Products <Rocket size={18} />
        </h2>
        {/* This is grid container for the produtcs*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              setShowModal={setShowModal}
              setProductId={setProductId}
              refreshProducts={getAllProducts}
            />
          ))}
        </div>
      </div>
      {showModal && (
        <ConfirmModal
          setShowModal={setShowModal}
          productId={productId}
          refreshProducts={getAllProducts}
        />
      )}
    </div>
  );
}

export default HomePage;
