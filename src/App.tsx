import { useEffect } from "react";
import CartList from "./components/CartList";
import FoodList from "./components/FoodList";
import { useStore } from "./store/store";
import { productList } from "../data";

function App() {
  const setProducts = useStore((state) => state.setProducts);
  useEffect(() => {
    setProducts(productList);
  }, [setProducts]); // fake fetch data

  return (
    <>
      <div className="container mx-auto flex justify-between pt-10 max-[425px]:flex-col">
        <FoodList />
        <CartList />
      </div>
    </>
  );
}

export default App;
