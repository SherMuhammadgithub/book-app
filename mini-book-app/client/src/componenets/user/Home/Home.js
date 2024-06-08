// Home.js
import React from 'react';
import { Carousel } from 'flowbite-react';
import Books from '../Book/Books';
import Team from './Team';
import Faq from './Faq';

// import { useUser } from '../UserContext';


function Home({ image1, image2, image3, mentor }) {
  // const {user} = useUser();

  return (
    // <div className="homepage">
    //   <h1>Hello {user ? user.id : 'Unknown User'} and welcome to the home</h1>
    // </div>
    <>


      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[80vh] relative">
        <Carousel>
          <img src={image3} alt="..." />
          <img src={image1} alt="..." />
          <img src={image2} alt="..." />
          <img src={image3} alt="..." />
          <img src={image2} alt="..." />
        </Carousel>
      </div>
      <Books />
      <Faq />
      <Team mentor={mentor} />
    </>
  );
}

export default Home;