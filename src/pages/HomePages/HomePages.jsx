import { useEffect, useState } from "react";
import { Product } from "../../componenets/Product";
import axios from "axios";

export const HomePages = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => setProducts(res.data.products));
    }, []);
    return (
        <div>             
            <p className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Shop</p>
            <ul className="grid grid-cols-3 gap-4">
            {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
        </div>
    );
};