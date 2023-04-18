import Carousel from 'react-bootstrap/Carousel';

const HomeCarousel = () => (
  <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://ik.imagekit.io/nvnw6o7ew/pexels-scott-webb-1029599_nAvZy6l52.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665789420591"
        alt="First slide"
      />
      <Carousel.Caption>
        <h2>Rent Easy</h2>
        <p>Renting a house has never been easier.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://ik.imagekit.io/nvnw6o7ew/pexels-pixabay-259588_gl6O-UIeh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665789570701"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h2>Easy to List Your House</h2>
        <p>Listing your house has never been easier.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://ik.imagekit.io/nvnw6o7ew/pexels-frans-van-heerden-1438832_Ww2FvkQQI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665789784085"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h2>Safe & Respectful</h2>
        <p>Your everyday smile is our priority.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;