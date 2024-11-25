import { useEffect, useState } from "react";
import { RES_API } from "../utils/constants";
import "./RestaurantMenu.css";
import Shimmer from "./shimmer/Shimmer";
import ItemCardsDetails from "./ItemCard/ItemCardDetails";
import CollapsibleCard from "./CollapsibleCard";
import CardHeading from "./CardHeading";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=344287&cata"
    );

    const json = await data.json();
    const menuInfo = json?.data?.cards;
    // json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[12]?.card ?.card?.itemCards;
    // setItemCount(menuInfo.length);
    setResInfo(menuInfo);
    console.log(menuInfo);
  };

const Heading = ({ card }) => {
  return (
    <div>
      {card.headerStyling && (
        <div className="header">
          <h1 className="title">{card.text}</h1>
        </div>
      )}
      {/* {card.info && <CardHeading card={card}></CardHeading>} */}
      {/* {card.tabs && (
  <CollapsibleCard title="Regular Dosa (8)">
    
    {<span>{JSON.stringify(card.tabs)}</span>}
  </CollapsibleCard>
)} */}
    </div>
  );
};
  const CardDisplay = ({ cards }) => {
    return (
      <div className="card-container">
        {cards.map((item, index) => {
          if (item.card) {
            const { card } = item.card;
            return (
              <div key={index} > 
              {(card.info || card.headerStyling) && <Heading card={card} />}
              {(card.info || card.headerStyling) && <Heading card={card} />}
               
              </div>
            );
          }
        })}
      </div>
    );
  };

  if (resInfo === null) return <Shimmer />;
  return (
    <div className="container">
      <CardDisplay cards={resInfo} />
    </div>
  );
};

export default RestaurantMenu;
