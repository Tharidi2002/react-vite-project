import {useState} from "react";

export function ModifyCart() {

    const [itemCount, setItemCount] = useState(1);

    const decreaseItemCount = () =>{
        setItemCount(preValue => preValue > 1
            ? preValue - 1
            : (alert("Don't decrease below 1"), preValue))
    }
    const increaseItemCount = () => {
        setItemCount(preValue => preValue +1);
    }

    return (
        <div className="flex items-center justify-between w-full max-w-[120px] border border-gray-300 rounded-md overflow-hidden">
            <button onClick={decreaseItemCount}
                className={`flex-1 py-1 transition-colors duration-200 flex items-center justify-center 
                ${itemCount <= 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800'}`
                }
                disabled={itemCount <= 1} aria-label="Decrease quantity"> - </button>

            <small className="flex-1 text-center text-sm font-medium text-gray-700 py-1 border-x border-gray-300">
                {itemCount}
            </small>

            <button onClick={increaseItemCount} className="flex-1 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center justify-center"
                    aria-label="Increase quantity"> + </button>
        </div>
    );
}