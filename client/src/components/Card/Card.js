import './card.scss'

const Card = () => {
  return (
    <div className="card">
      <div className="overlay">
        <div className="text">
          <h4>
            Blockchain pioneers bringing transparency, trust, and security to
            supply.
          </h4>
          <a href="#" className="btn">
            Visit
          </a>
        </div>
      </div>
      <div className="img">
        <img src="/images/website.jpg" alt="" />
      </div>
    </div>
  );
};

export default Card;
