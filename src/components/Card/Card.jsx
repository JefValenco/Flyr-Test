const Card = (props) => {
  return (
    <div className="card_content">
      <img className="card_contentImage" src={props.image} alt="img" />

      <div className="card_contentDetails">
        <ul class="discoverListCard">
          <li className="card_h1">{props.destination}</li>
          <li className="card_p1">
            From {props.startingPrice}
            <span className="decimal">.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
