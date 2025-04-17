import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Product(props) {
  const productData = useLoaderData();

  console.log("productData", productData);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-10xl px-4 sm:px-6 sm:py-10  lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
         Product List
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData.products.map((item) => {
            return (
              <div className="group relative" key={item.id}>
                
                <Link to={`/main/product/${item.id.toString()}`}>
                <img
                  src={item.images[0]} 
                  alt="Front of men&#039;s Basic Tee in black."
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                  
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                       {item.title}
                     
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.category} - {item.availabilityStatus}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{item.price}</p>
                </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;

export async function productLoader() {
    try{
 const response = await fetch("https://dummyjson.com/products");
  const responseData = await response.json();
  return responseData;
    } catch(error) {
        console.log(error)
}
}
