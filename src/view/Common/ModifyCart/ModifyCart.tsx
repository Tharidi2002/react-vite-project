import { useEffect, useState } from "react";
import type { CartItem } from "../../../model/CartItem.ts";
import type { ProductData } from "../../../model/ProductData.ts";

export const itemsList: CartItem[] = [];

interface ModifyCartProps {
    data: { product: ProductData }; // Made required since you're using it in useEffect
}

export function ModifyCart({ data }: ModifyCartProps) {
    const [itemCount, setItemCount] = useState(1);

    useEffect(() => {
        if (data?.product) {
            const existingItem = itemsList.findIndex(
                item => item.product.id === data.product.id
            );

            if (existingItem >= 0) {
                // Update existing item count
                itemsList[existingItem].itemCount = itemCount;
            } else {
                // Add new item if it doesn't exist
                itemsList.push({
                    product: data.product,
                    itemCount: itemCount
                });
            }
        }
    }, [itemCount, data?.product]); // Added dependencies

    const decreaseItemCount = () => {
        setItemCount(prevValue => {
            if (prevValue > 1) {
                return prevValue - 1;
            }
            alert("Minimum quantity is 1");
            return prevValue;
        });
    };

    const increaseItemCount = () => {
        setItemCount(prevValue => prevValue + 1);
    };

    return (
        <div className="flex items-center justify-between w-full max-w-[120px] border border-gray-300 rounded-md overflow-hidden">
            <button
                onClick={decreaseItemCount}
                className={`flex-1 py-1 transition-colors duration-200 flex items-center justify-center ${
                    itemCount <= 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800'
                }`}
                disabled={itemCount <= 1}
                aria-label="Decrease quantity"
            >
                -
            </button>

            <span className="flex-1 text-center text-sm font-medium text-gray-700 py-1 border-x border-gray-300">
                {itemCount}
            </span>

            <button
                onClick={increaseItemCount}
                className="flex-1 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center justify-center"
                aria-label="Increase quantity"
            >
                +
            </button>
        </div>
    );
}