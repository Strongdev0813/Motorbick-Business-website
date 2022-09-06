import Carousel from 'react-bootstrap/Carousel';
import './caruselhome.css'
const CaruselHome=() => {
  return (
    <div className='carusel'>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/x7j9qwvpvr5s/6BcVNz5e7QYWefhpt1E8mg/670bfb56fcb2a73b6d04d6920b161961/2022-05-12-Shop-Banner-Wide-663x249-02.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://immagini.insella.it/sites/default/files/styles/contenuto-news-big-anteprima/public/news_anteprima/2022/06/multistrada_expedition_001_uc398332_high.jpeg?itok=OuKyngUZ"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.motorvalley.it/wp-content/uploads/2018/04/Ducati-Travel-DreamTour-2018-05-Gallery-1920x1080.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CaruselHome;