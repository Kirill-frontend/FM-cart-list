import { IProduct } from "../../types";
import { useStore } from "../store/store";

type Props = {
  product: IProduct;
};

type updateHandlerType = "increment" | "decrement";

const FoodCard = ({ product }: Props) => {
  const { updateCart, cart, addToCart, removeFromCart } = useStore((state) => state);

  const productInCart = cart.find((el) => el.product.name === product.name);

  const addHandler = () => {
    addToCart(product);
  };

  const updateHandler = (type: updateHandlerType) => {
    if (type === 'increment' && productInCart) {
      updateCart(product, ++productInCart.quantity);
    }
    if (type === 'decrement' && productInCart && productInCart.quantity === 1) {
      removeFromCart(product);
    }
    if (type === 'decrement' && productInCart) {
      updateCart(product, --productInCart.quantity);
    }
  };

  return (
    <>
      <div className=" flex-[0_0_25.5%]">
        <div className="flex flex-col pt-5">
          {/* image */}
          <div className="w-64 h-64">
            <img
              src={product.image.desktop}
              alt="food"
              className={`min-h-full rounded-2xl ${productInCart ? 'border-2 border-red-c' : ''} `}
            />
          </div>
          {/* button add cart */}
          <div className=" flex relative justify-center -top-6">
            {!productInCart ? (
              <button
                onClick={() => addHandler()}
                className="border rounded-3xl flex items-center gap-2 border-red-c px-6 py-2 bg-white transition-colors hover:bg-rose-c-100 duration-200"
              >
                <img src="/images/icon-add-to-cart.svg" alt="add to cart" /> Add
                to Cart
              </button>
            ) : (
              <div className="rounded-3xl flex items-center justify-between gap-11 text-white bg-red-c py-2 px-6">
                <button className="rounded-full border border-white px-2" onClick={() => updateHandler('decrement')}>
                  -
                </button>
                <div className=""> {productInCart?.quantity} </div>
                <button className="rounded-full border border-white px-2" onClick={() => updateHandler('increment')}>
                  +
                </button>
              </div>
            )}
          </div>
          {/* category */}
          <div className="text-gray-400 capitalize"> {product.category} </div>
          {/* title */}
          <div className="text-base text-rose-c-900 font-bold">
            {product.name}
          </div>
          {/* price */}
          <div className="text-red-c font-bold text-lg">${product.price}</div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
