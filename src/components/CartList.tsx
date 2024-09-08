import { useState } from "react";
import { useStore } from "../store/store";
import CartItem from "./CartItem";
import ConfirmOrderModal from "./ConfirmOrderModal";

const CartList = () => {  
  const {cart, clearCart} = useStore((state) => state);
  const [open, setOpen] = useState<boolean>(false)


  const getOrderTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  const handleConfirmOrder = () => {
    setOpen(false)    
    clearCart()
  }
  

  return (
    <div className="flex-1 px-6 py-3 md:px-0 md:py-0">
      <div className="bg-white py-6 px-4 rounded-lg">
        <h1 className="text-2xl text-red-c font-bold">Your Cart (0)</h1>
        {/* empty block */}
        {!cart.length ? (
          <div className="flex flex-col items-center pt-6">
            <div className="">
              {" "}
              <img
                src="./images/illustration-empty-cart.svg"
                alt="empty cart"
              />{" "}
            </div>
            <div className="text-rose-400">
              Your added items will appear here
            </div>
          </div>
        ) : (
          <>
            {cart.length ?
              cart.map((item) => (
                <CartItem
                  product={item.product}
                  quantity={item.quantity}
                  key={item.product.name}
                />
              )) : ""}
            <div className="flex items-center justify-between pt-6">
              <div className="">Order total:</div>
              <div className="font-bold text-xl">${getOrderTotal()}</div>
            </div>
            <div className="flex justify-center items-center py-4 rounded-xl bg-rose-50 mt-4">
              <img src="./images/icon-carbon-neutral.svg" alt="tree" />
              <span className="ml-2">
                This is <span className="font-bold">carbon-neutral </span>
                delivery
              </span>
            </div>
            <div className="mt-6">
              <button onClick={() => setOpen(true)} className="rounded-full py-4 border-none bg-red-c hover:bg-red-700 transition-colors duration-300 text-white font-bold w-full">
                Confirm Order
              </button>
            </div>
          </>
        )}
      </div>
      <ConfirmOrderModal open={open} setOpen={handleConfirmOrder} />
    </div>
  );
};

export default CartList;
