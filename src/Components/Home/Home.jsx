// import React from 'react';
// import './home.css';
// import { GrLocation } from 'react-icons/gr';
// import { HiFilter } from 'react-icons/hi';
// import { FiFacebook } from 'react-icons/fi';
// import { SiInstagram } from 'react-icons/si';
// import { FaTripadvisor } from 'react-icons/fa';
// import { BsList } from 'react-icons/bs';
// import { TbApps } from 'react-icons/tb';

// const Home = () => {
//   return (
//     <section className="home">
//       <div className="overlay"></div>
//       <video className="bgVideo" src="/assets/video1.mp4" muted autoPlay loop playsInline></video>

//       {/* This is the main content, placed inside the video */}
//       <div className="homeContent">
//         <div className="textDiv">
//           <span className="smallText">Our Packages</span>
//           <h1 className="homeTitle">Search Your Dream Destination</h1>
//         </div>

//         <div className="cardDiv grid">
//           <div className="destinationInput">
//             <label htmlFor="city">Search Your Destination</label>
//             <div className="input flex">
//               <input type="text" placeholder="Enter name here.." />
//               <GrLocation className="locationIcon" />
//             </div>
//           </div>
//           <div className="dateInput">
//             <label htmlFor="date">Select your date:</label>
//             <div className="input flex">
//               <input type="date"  />
//             </div>
//           </div>
//           <div className="priceInput">
//             <div className="label_total flex">
//               <label htmlFor="price">Max Price</label>
//              <h3 className="total">$5000</h3>
//             </div>
//             <div className="input flex">
//               <div className="input flex">
//                 <input type="range" max="5000" min="1000" />
//               </div>
//             </div>
//             <div className="searchOptions flex">
//               <HiFilter className="icon"/>
//               <span>MORE FILTERS</span>
//             </div>

//           </div>
//         </div>
//         <div className="homeFooterIcons flex">
//           <div className="rightIcons">
//           <FiFacebook className="icon"/>
//             <SiInstagram className="icon"/>
//             <FaTripadvisor className="icon"/>

//           </div>
//           <div className="leftIcons">
            
//             <BsList className="icon"/>
//             <TbApps className="icon"/>
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;





import React, { useEffect } from 'react';
import './home.css';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { FaTripadvisor } from 'react-icons/fa';
import { BsList, BsTwitter } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true }); // Initialize AOS
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video
        className="bgVideo"
        src="/assets/v1.mp4"
        muted
        autoPlay
        loop
        playsInline
      ></video>

      {/* Content inside the video */}
      <div className="homeContent" data-aos="fade-in">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search Your Dream Destination</h1>
        </div>

        <div className="cardDiv" data-aos="fade-in">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here.." />
              <GrLocation className="locationIcon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>

            <div className="searchOptions flex">
              <HiFilter className="icon" />
              <span>MORE FILTERS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Icons Positioned Outside the Box */}
      <div className="homeFooterIcons" data-aos="fade-in">
        <div className="rightIcons">
          <FaGithub className="icon" />
          <SiInstagram className="icon" />
          <FaTripadvisor className="icon" />
        </div>
        <div className="leftIcons">
          <BsList className="icon" />
          <BsTwitter className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Home;
