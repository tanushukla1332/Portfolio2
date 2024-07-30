import React from 'react';
import { Parallax } from 'react-parallax';

export default function App() {
  return (
    <>
      <Images />
    </>
  );
}

const Images = () => {
  return (
    <div>
      <Parallax
        bgImage="https://cdn.pixabay.com/photo/2020/09/27/03/38/woman-5605529_1280.jpg"
        bgImageAlt="The woman"
        strength={200}
        style={{ height: '100vh' }} // You can adjust height as needed
      >
        <div style={{ height: '100vh '}}  className="text-8xl text-white text-center font-bold flex justify-center items-center" >
          HII SHIVANI .
        </div>
      </Parallax>
      <Parallax
        bgImage="https://cdn.pixabay.com/photo/2020/09/27/03/38/woman-5605529_1280.jpg"
        bgImageAlt="The woman"
        strength={200}
        style={{ height: '100vh' }} // You can adjust height as needed
      >
        <div style={{ height: '100vh' }}  className="text-8xl text-white text-center font-bold flex justify-center items-center">
        Tell Me About Yourself
     </div>
      </Parallax>
      <Parallax
        bgImage="https://cdn.pixabay.com/photo/2020/09/27/03/38/woman-5605529_1280.jpg"
        bgImageAlt="The woman"
        strength={200}
        style={{ height: '100vh' }} // You can adjust height as needed
      >
      <div style={{ height: '100vh' }}  className="text-8xl text-white text-center font-bold flex justify-center items-center">
      What are you doing
   </div>
      </Parallax>
      <Parallax
        bgImage="https://cdn.pixabay.com/photo/2020/09/27/03/38/woman-5605529_1280.jpg"
        bgImageAlt="The woman"
        strength={200}
        style={{ height: '100vh' }} // You can adjust height as needed
      >
      <div style={{ height: '100vh' }}  className="text-8xl text-white text-center font-bold flex justify-center items-center">
      Good Night
   </div>
      </Parallax>
    </div>
  );
};

