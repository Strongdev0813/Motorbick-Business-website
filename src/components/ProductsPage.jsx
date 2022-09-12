import "./componentsProducts/productsPage.css";
import BuyProducts from "./componentsProducts/BuyProducts";
import Products from "./Products.json";

const ProductsPage = () => {
  const Data = Products;
  console.log(Data);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="titleProducts">
        <h1>Make Your Dream Come True</h1>
        <h2>choose your bike</h2>
      </div>
      <div className="PicturesDiv">
        {Data.map((product) => {
          return (
            <BuyProducts
              src={product.src}
              name={product.name}
              price={product.price}
            ></BuyProducts>
          );
        })}
      </div>
    </div>
  );
};
export default ProductsPage;
