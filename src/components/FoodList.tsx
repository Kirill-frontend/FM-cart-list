import { useStore } from "../store/store";
import FoodCard from "./FoodCard";

const FoodList = () => {
  const products = useStore((state) => state.products);
  

  return (
    <div className="flex-[0_0_70%]">
      <h1 className="font-bold max-[425px]:ml-5 text-3xl">Desserts</h1>
      {/* desserts list */}
      <div className="flex flex-wrap justify-around">
        {!products.length
          ? "No products available"
          : products.map((product) => <FoodCard key={product.name} product={product} />)}
      </div>
    </div>
  );
};

export default FoodList;
