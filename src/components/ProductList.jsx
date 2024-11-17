import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const getDataFromApi = async () => {
    await axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setData(response.data);
      setLoading(false)
    });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <h1 className="grid place-items-center min-h-screen">Loading...</h1>
        </>
      ) : (
        <>
          <div className="p-10 grid grid-cols-3 gap-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="p-5 border border-gray-800 grid place-items-center"
              >
                <img className="w-[20vw] h-[20vw]" src={item?.image} alt={item?.title} />

                <h1 className="my-4 text-2xl font-bold">{item?.title.slice(0,20)}</h1>
                <p className="my-2 font-medium">{item?.description.slice(0,100)}</p>
                <Link
                  className="bg-slate-300 mt-3 rounded-md px-7 py-2"
                  to={`/product/${item.id}`}
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProductList;
