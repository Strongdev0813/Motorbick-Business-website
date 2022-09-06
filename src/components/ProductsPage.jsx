
import "./componentsProducts/products.css";
import Pictures from "./componentsProducts/Pictures";

import Products from "./Products.json";
const ProductsPage = () => {
  const Data = Products;
  console.log(Data);
  return (
    <div>
      <br /><br /><br /><br />
      <div className="titleProducts">
        <h1>Make Your Dream True</h1>
        <h2>choose your bike</h2>
      </div>
      <div className="PicturesDiv">
        {Data.map((product) => {
          return (
            <Pictures
              src={product.src}
              name={product.name}
              price={product.price}
            ></Pictures>
          );
        })}
      </div>
    </div>
  );
};
export default ProductsPage;
