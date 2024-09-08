import { IProduct } from "../../types";
import { useStore } from "../store/store";

type Props = {
  product: IProduct;
  quantity: number;
};

const CartItem = ({ product, quantity }: Props) => {  
  const removeFromCart = useStore(state => state.removeFromCart)


  return (
    <div className="flex justify-between items-center border-b pb-4 pt-2">
      <div className="flex flex-col justify-between">
        <div className="font-bold">{product.name}</div>
        <div className="flex gap-4 items-center">
          <div className="text-red-c font-bold">{quantity}x</div>
          <div className="text-rose-400 text-sm">
            <span>@</span> {product.price}
          </div>
          <div className="text-red-c">${product.price * quantity}</div>
        </div>
      </div>

      <div className="">
        <button className="border rounded-full p-1 border-rose-400 hover:border-2 transition-all duration-150" onClick={() => removeFromCart(product)}>
          <img src="./images/icon-remove-item.svg" alt="remove" className="" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
