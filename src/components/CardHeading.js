import React from 'react';

const CardHeading = (props) => {
    const {card} = props;
    console.log('head',card)
    return (
        <div>
      <div className="container">
        <div className="header">
          <p className="brand">gourmet</p>
          <h1 className="title">{card.text}</h1>
        </div>

        <div className="info-box">
          <div className="rating">
            <span className="rating-star">⭐</span>
            <span>{card.info.avgRating +' ('+ card.info.totalRatingsString + ')'} </span>
          </div>
          <span className="price">• {card.info.costForTwoMessage}</span>
          <p className="category">{card.info.cuisines.join(',')}</p>

          <div className="outlet-info">
            <span className="outlet-label">Outlet</span>
            <span className="outlet-name">{card.info.locality}</span>
          </div>

          <p className="delivery-time">50-55 mins</p>
        </div>
      </div>

      <div className="restaurant-menu-container">
        <div className="product-list"></div>
      </div>
    </div>
    );
};

// const styles = {
//     cardContainer: {
//         borderRadius: '10px',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//         padding: '20px',
//         maxWidth: '400px',
//         margin: '20px',
//         fontFamily: 'Arial, sans-serif',
//     },
//     restaurantName: {
//         fontSize: '24px',
//         fontWeight: 'bold',
//         marginBottom: '10px',
//     },
//     infoBox: {
//         backgroundColor: '#f5f5f5',
//         borderRadius: '10px',
//         padding: '15px',
//         fontSize: '14px',
//     },
//     ratingPrice: {
//         display: 'flex',
//         alignItems: 'center',
//         marginBottom: '10px',
//     },
//     rating: {
//         color: 'green',
//         fontWeight: 'bold',
//     },
//     ratingCount: {
//         color: '#777',
//     },
//     price: {
//         marginLeft: '5px',
//         color: '#555',
//     },
//     cuisine: {
//         color: 'orange',
//         fontWeight: 'bold',
//         marginBottom: '10px',
//     },
//     outletInfo: {
//         display: 'flex',
//         alignItems: 'center',
//         marginBottom: '5px',
//         color: '#555',
//     },
//     outletLabel: {
//         fontWeight: 'bold',
//         marginRight: '5px',
//     },
//     outletLocation: {
//         color: '#777',
//     },
//     deliveryTime: {
//         color: '#777',
//     },
// };

export default CardHeading;
