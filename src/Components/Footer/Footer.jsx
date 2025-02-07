// import React from 'react';
// import './footer.css';
// import { FiSend } from "react-icons/fi";
// import { MdTravelExplore } from "react-icons/md";
// import { BsTwitter } from 'react-icons/bs';
// import { FaGithub, FaTripadvisor } from 'react-icons/fa';
// import { FiChevronRight } from "react-icons/fi";

// const Footer = () => {
//   return (
//     <section className='footer'>
//       <div className="videoDiv">
//         <video src="/assets/v3.mp4" loop autoPlay muted type="video/mp4"></video>
//       </div>
//       <div className="secContent container">
//         <div className="contactDiv flex">
//           <div className="text">
//             <small>KEEP IN TOUCH</small>
//             <h2>Travel with us</h2>
//           </div>
//           <div className="inputDiv flex">
//             <input type="text" placeholder='Enter Email Address' />
//             <div className="btn flex" type='submit'>
//                 SEND <FiSend className="icon"/>
//             </div>
//           </div>
//         </div>

//         <div className="footerCard flex">
//           <div className="footerIntro flex">
//             <div className="logoDiv">
//               <a href="#" className='logo flex'>
//                 <MdTravelExplore className='icon' /> Travel.
//               </a>
//             </div>
//             <div className="footerParagraph">
//               A footer paragraph is a section at the bottom of a page that contains additional information...
//             </div>
//             <div className="footerSocials">
//               <BsTwitter className="icon" />
//               <FaGithub className='icon'/>
//               <FaTripadvisor className="icon" />
//             </div>
//           </div>

//           <div className="footerLinks grid">
//             <div className="linkGroup">
//               <span className="groupTitle">OUR AGENCY</span>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Services</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Insurance</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Agency</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Tourism</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Payment</li>
//             </div>
            
//             <div className="linkGroup">
//               <span className="groupTitle">LAST MINUTE</span>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> WestBengal</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Maharashtra</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Karnataka</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Madhya Pradesh</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Patna</li>
//             </div>
//           </div>
          
//           <div className="footerLinks grid">
//             <div className="linkGroup">
//               <span className="groupTitle">PARTNERS</span>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Bookings</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Rentcars</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> HotelWorlds</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Trivago</li>
//               <li className="footerlist flex"><FiChevronRight className='icon'/> Tripadvisor</li>
//             </div>
//           </div>
//           <div className="footerDiv flex">
//             <small>BEST TRAVEL WEBSITE</small>
//             <small>COPYRIGHTS RESERVED-HAMSA DIXIT 2025</small>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;



import React, { useEffect } from 'react';
import './footer.css';
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaTripadvisor } from 'react-icons/fa';
import { FiChevronRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Footer = () => {
  
  useEffect(() => {
    const video = document.querySelector(".videoDiv video");
    if (video) {
      video.load(); // Ensure video loads properly
    }
  }, []);

  return (
    <motion.section 
      className='footer'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="videoDiv" variants={fadeUp}>
        <video src="/assets/v3.mp4" loop autoPlay muted type="video/mp4"></video>
      </motion.div>

      <motion.div className="secContent container" variants={fadeUp}>
        <motion.div className="contactDiv flex" variants={fadeUp}>
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className="btn flex">
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </motion.div>

        <motion.div className="footerCard flex" variants={fadeUp}>
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdTravelExplore className='icon' /> Travel.
              </a>
            </div>
            <p className="footerParagraph">
              Discover the world with us! Explore the best destinations, find great deals, and travel with ease.
            </p>
            <div className="footerSocials">
              <BsTwitter className="icon" />
              <FaGithub className='icon'/>
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <ul className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Services</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Insurance</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Agency</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Tourism</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Payment</li>
            </ul>
            
            <ul className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerlist flex"><FiChevronRight className='icon'/> West Bengal</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Maharashtra</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Karnataka</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Madhya Pradesh</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Patna</li>
            </ul>

            <ul className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Bookings</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Rentcars</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> HotelWorlds</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Trivago</li>
              <li className="footerlist flex"><FiChevronRight className='icon'/> Tripadvisor</li>
            </ul>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - HAMSA DIXIT 2025</small>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Footer;
