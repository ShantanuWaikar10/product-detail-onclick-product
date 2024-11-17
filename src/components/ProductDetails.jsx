import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataFromApi = async () => {
    await axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  const productDetail = data.filter((product) => product.id === parseInt(id));
  console.log(productDetail);

  return (
    <>
      {loading ? (
        <>
          <h1 className="grid place-items-center min-h-screen">Loading...</h1>
        </>
      ) : (
        <>
          <div className="px-32 py-10">
            <div className="p-5 border border-gray-800 grid place-items-center">
              <img
                className="w-[20vw] h-[50vh]"
                src={productDetail[0]?.image}
                alt={productDetail[0]?.title}
              />

              <h1 className="my-4 text-2xl font-bold">{productDetail[0]?.title}</h1>
              <p className="my-2 font-medium">{productDetail[0]?.description} </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
