import React, { useState } from "react";

const CollapsibleCard = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };
  const SubCardDetials = () => {
    <div>
      <div className="container">
        <div className="header">
          <p className="brand">gourmet</p>
          <h1 className="title"></h1>
        </div>

        <div className="menu">
          <span className="menu-item active">Order Online</span>
          <span className="menu-item">Dineout</span>
        </div>

        <div className="info-box">
          <div className="rating">
            <span className="rating-star">⭐</span>
            <span>4.5 (3.6K+ ratings)</span>
          </div>
          <span className="price">• ₹400 for two</span>
          <p className="category">Desserts</p>

          <div className="outlet-info">
            <span className="outlet-label">Outlet</span>
            <span className="outlet-name">Banjara Hills</span>
          </div>

          <p className="delivery-time">50-55 mins</p>
        </div>
      </div>

      <div className="restaurant-menu-container">
        <div className="product-list"></div>
      </div>
    </div>;
  };
  return (
    <div
      style={{
        border: "1px solid #ddd",
        margin: "10px 0",
        borderRadius: "4px",
      }}
    >
      <div
        onClick={toggleCard}
        style={{
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "#f5f5f5",
          fontWeight: "bold",
        }}
      >
        <SubCardDetials></SubCardDetials>
        {title} <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div style={{ padding: "10px" }}>{children}</div>}
    </div>
  );
};

export default CollapsibleCard;
