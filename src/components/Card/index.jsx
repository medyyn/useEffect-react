const Card = ({ title, brand, description, price, thumbnail}) => {
  return (
    <div className="card">
      <img src={thumbnail} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-brand">{brand}</p>
        <p className="card-description">{description.substring(0, 60)}...</p>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

export default Card;

