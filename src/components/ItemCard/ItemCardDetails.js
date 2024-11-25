const ItemCardsDetails = () => {
  return (
    <div className="product-item">
      <div className="product-info">
        <div className="product-title">
          <input type="checkbox" />
          <span>Almond Rocks Gift Box (250g)</span>
        </div>
        <p className="price">₹650</p>
        <p className="rating">⭐ 5.0 (6)</p>
        <p className="description">Almonds coated with dark chocolate.</p>
      </div>
      <div className="product-image">
        {/* <img src="your-image-url-here.png" alt="Almond Rocks Gift Box (250g)"> */}
        <button className="add-button">ADD</button>
      </div>
    </div>
  );
};

export default ItemCardsDetails;
