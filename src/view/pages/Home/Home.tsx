/*export function Home() {
    return (
        <h1>Home Page</h1>
    );
}*/

import laptop from '../../../assets/products/ASUS.jpg';
// import laptop2 from '../../../assets/products/VivoBook.jpg';
// import laptop3 from '../../../assets/products/hp.jpg';
import {useEffect, useState} from "react";
import {Product} from "../../Common/Product/Product.tsx";

type ProductData = {
    id : number,
    name : string,
    price : string,
    currency : string,
    image : string
}

export function Home() {

    const [products, setProducts] = useState<ProductData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./product-data.json')
                const jsonData = await response.json();
                // console.log(jsonData);
                setProducts(jsonData);
                console.log(products);
            } catch (error){
                console.error('Error fetching data: ', error)
            }
        }
        fetchData();
    }, []);

    return (
        <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-purple-700 mb-6">Welcome to Our Platform</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover amazing features and services tailored just for you.
                Join our community and experience the difference.
            </p>
            <div className="mt-8">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
                    Get Started
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
                {/*

                <div
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col relative">
                     Product Image
                    <div className="h-40 bg-gray-100 rounded-md mb-4 overflow-hidden flex items-center justify-center">
                        <img
                            src={laptop}
                            alt="ASUS Laptop"
                            className="h-full w-full object-contain p-2"
                        />
                    </div>
                     Product Title
                    <h3 className="text-xl font-semibold text-purple-600 mb-2">ASUS</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">Powerful laptop with OLED display, AMD Ryzen
                        7 processor, and 16GB RAM for professional work.</p>
                     Price
                    <div className="flex items-center mb-4">
                        <span className="text-lg font-bold text-gray-900">Rs 555,999.00</span>
                    </div>
                     Add to Cart Button
                    <button
                        className="mt-auto w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center justify-center">
                        Add to Cart
                    </button>
                </div>

                <div
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col relative">
                     Product Image
                    <div className="h-40 bg-gray-100 rounded-md mb-4 overflow-hidden flex items-center justify-center">
                        <img
                            src={laptop2}
                            alt="ASUS Laptop"
                            className="h-full w-full object-contain p-2"
                        />
                    </div>
                     Product Title
                    <h3 className="text-xl font-semibold text-purple-600 mb-2">VivoBook</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">Powerful laptop with OLED display, AMD Ryzen
                        7 processor, and 16GB RAM for professional work.</p>
                     Price
                    <div className="flex items-center mb-4">
                        <span className="text-lg font-bold text-gray-900">Rs 555,999.00</span>
                    </div>
                     Add to Cart Button
                    <button
                        className="mt-auto w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center justify-center">
                        Add to Cart
                    </button>
                </div>

                <div
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col relative">
                     Product Image
                    <div className="h-40 bg-gray-100 rounded-md mb-4 overflow-hidden flex items-center justify-center">
                        <img
                            src={laptop3}
                            alt="ASUS Laptop"
                            className="h-full w-full object-contain p-2"
                        />
                    </div>
                     Product Title
                    <h3 className="text-xl font-semibold text-purple-600 mb-2">Hp</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">Powerful laptop with OLED display, AMD Ryzen
                        7 processor, and 16GB RAM for professional work.</p>
                     Price
                    <div className="flex items-center mb-4">
                        <span className="text-lg font-bold text-gray-900">Rs 555,999.00</span>
                    </div>
                     Add to Cart Button
                    <button
                        className="mt-auto w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center justify-center">
                        Add to Cart
                    </button>
                </div>*/}

                {
                    products.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }

            </div>

            {/* Product Grid */}
            <div className="flex flex-wrap gap-4 p-5 justify-center items-center mx-auto max-w-6xl mt-12">
                <div
                    className="w-28 h-32 bg-blue-300 rounded-lg shadow-md flex justify-center items-center text-xl font-medium transition-all hover:bg-blue-400 hover:scale-105">
                    <div className="p-2">
                        <img
                            src={laptop}
                            alt="Product"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
                <div
                    className="w-28 h-32 bg-blue-300 rounded-lg shadow-md flex justify-center items-center text-xl font-medium transition-all hover:bg-blue-400 hover:scale-105">
                    02
                </div>
                <div
                    className="w-28 h-32 bg-blue-300 rounded-lg shadow-md flex justify-center items-center text-xl font-medium transition-all hover:bg-blue-400 hover:scale-105">
                    03
                </div>
            </div>
        </div>
    );
}