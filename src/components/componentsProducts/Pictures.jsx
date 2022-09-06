import Button from "@mui/material/Button";
import "./pictures.css";
const Pictures = (props) => {
  return (
    <div className="divBikes">
      <img className="bikeImg" alt="" src={props.src}></img>
      <div class="contentPicture">{props.name}</div>
      <div class="pricePicture">{props.price}</div>
      <Button className="buttonBuy" variant="contained">
        buy
      </Button>
    </div>
  );
};
export default Pictures;
