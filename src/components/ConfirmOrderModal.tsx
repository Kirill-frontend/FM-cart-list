// import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useStore } from "../store/store";

type Props = {
  open: boolean;
  setOpen: () => void;
};

export default function ConfirmOrderModal({ open, setOpen }: Props) {
  const { cart } = useStore((state) => state);

  const getOrderTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex flex-col sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10">
                  <img
                    src="./images/icon-order-confirmed.svg"
                    alt="order confirm"
                    className="w-10 h-10"
                  />
                </div>
                <div className="mt-3 w-full">
                  <DialogTitle
                    as="h3"
                    className="text-3xl font-bold mt-4 leading-6 text-gray-900"
                  >
                    Order Confirmed
                  </DialogTitle>
                  <div className="text-gray-400 mt-4 mb-6">
                    We hope you enjoy your food!
                  </div>
                  <div className="mt-2 p-4 bg-rose-c-50 w-full rounded-xl">
                    {cart.map((item) => (
                      <div key={item.product.name} className="border-b flex justify-between items-center mb-4 pb-2">
                        <div className="flex items-center gap-2">
                          {/* image */}
                          <div className="">
                            <img
                              src={item.product.image.thumbnail}
                              alt={item.product.name}
                              className="w-10 h-10 rounded-lg"
                            />
                          </div>
                          {/* titles */}
                          <div className="flex flex-col">
                            <div className=""> {item.product.name} </div>
                            <div className="flex gap-3">
                              <div className="text-red-c font-bold">
                                {" "}
                                {item.quantity}x{" "}
                              </div>
                              <div className="text-gray-400">
                                {" "}
                                <span className="text-gray-400 text-sm">
                                  @
                                </span>{" "}
                                ${item.product.price}{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="font-bold text-lg">
           
                          ${item.product.price * item.quantity}{" "}
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between">
                      <div className="">Order total</div>
                      <div className="font-bold text-xl">
          
                        ${getOrderTotal()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button onClick={setOpen} className="w-full bg-red-c text-white rounded-full py-4">Start new Order</button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
