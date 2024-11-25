import StarRating from "./StarRating";
import { CDN_URL } from "../utils/constants";
import "./shimmer/shimmer.css"


 
  const RestaurantCard = (props) => {
    // const data = props.resData;
    // const {resData} = props;
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      sla,
      costForTwo,
      cuisines,
    } = resData?.info;
    const text = costForTwo.split(" ");
    
  
    return (
      <div className="Res-Card">
        <div className="Res-Image-Container">
          <img className="Res-Image" src={CDN_URL + cloudinaryImageId} alt="res-logo-image" />
        </div>
  
        <div className="Res-Card-Content">
          <div className="Res-Name-Container">
            <h2 className="Res-Name">{name.substring(0, 15)+(name.length > 15 ? "..." : "")}</h2>
            <div className="Res-Details ">
              <div className="Res-Rating newClass">
                <StarRating rating ={ avgRating}/>
                <h4 className=""> &nbsp;{ avgRating}</h4>
              </div>
             
              <h4 className="Res-Delivery-Time "><span>&#8226;</span> {sla.deliveryTime} mins</h4>
              <h4 className="Res-Cost"><span>&#8226;</span>{costForTwo.split(" ")[0]}</h4>
            </div>
          </div>
          <h4 className="Res-Cuisine">{cuisines.join(", ")}</h4>
        </div>
      </div>
    );
  };

  export default RestaurantCard;
  