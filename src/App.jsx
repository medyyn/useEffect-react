import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card/index";
import Mode from "./components/Mode/index";
import Loading from "./components/Loading/index";
import "./style.css";
import Search from "./components/Search/index";

const App = () => {
  const url = "https://dummyjson.com/products";
  const [inpValue, setInpValue] = useState("")
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setIsLoading(false)
      setProducts(data.products);
    });
  }, []);
  const [isLoading, setIsLoading] = useState(true)
  if (isLoading){
    return <Loading/>
  }
  return (
    <>
      <Mode />
      <Search inpValue={inpValue} setInpValue={setInpValue}/>
      <div className="container">
        {products.map((product) => (
          <Card key={product.id} {...product} inpValue={inpValue}/>
        ))}
      </div>
    </>
  );
};

export default App;
