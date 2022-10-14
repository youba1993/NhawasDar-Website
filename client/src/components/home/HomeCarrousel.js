import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/nvnw6o7ew/pexels-scott-webb-1029599_nAvZy6l52.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665789420591"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Rent Easy</h3>
          <p>Rent a house never been such easy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/nvnw6o7ew/pexels-pixabay-259588_gl6O-UIeh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665789570701"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Easy to list your house</h3>
          <p>Liste your House Hustle free </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/nvnw6o7ew/pexels-frans-van-heerden-1438832_Ww2FvkQQI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665789784085"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Safe & Respectful</h3>
          <p>
          Your Everyday Smile is our Priority
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;