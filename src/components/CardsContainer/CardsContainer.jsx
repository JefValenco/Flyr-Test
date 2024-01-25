import Card from "../Card/Card";

const CardsContainer = ({ currentDestinations }) => {
  return (
    <div className="cardContainer_container">
      {currentDestinations.map((destination) => {
        return (
          <div>
            <Card
              type={destination.type}
              image={destination.image}
              destination={destination.destination}
              startingPrice={destination.startingPrice}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
