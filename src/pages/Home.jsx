import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Home() {
  return (
    <div>
      <h2>WELCOME TO HOME PAGE</h2>
      <p>This is accessible after login</p>

      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src="https://via.placeholder.com/600x400?text=Image+1" alt="Slide 1" />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400?text=Image+2" alt="Slide 2" />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400?text=Image+3" alt="Slide 3" />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400?text=Image+4" alt="Slide 4" />
          <p className="legend">Image 4</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
