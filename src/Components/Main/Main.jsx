// import React from 'react'
// import './main.css'
// import img from '/assets/img1.jpg'

// const Data = [
//   {
//     id: 1,
//     imgSrc: "/assets/img1.jpg", // Ensure correct path
//     destTitle: "Taj Mahal",
//     location: "Agra, Uttar Pradesh",
//     grade: "A+",
//     fees: "₹50 (Indians), ₹1100 (Foreigners)",
//     description: "The Taj Mahal, a symbol of love, is one of the most iconic monuments in the world."
//   }
// ];

// //   {
// //     id: 2,
// //     imgSrc: "/assets/qutub-minar.jpg", // Add your image path here
// //     destTitle: "Qutub Minar",
// //     location: "Delhi",
// //     grade: "A",
// //     fees: "₹30 (Indians), ₹500 (Foreigners)",
// //     description: "Qutub Minar is a UNESCO World Heritage site and one of Delhi's most famous historical monuments."
// //   },
// //   {
// //     id: 3,
// //     imgSrc: "/assets/gateway-of-india.jpg", // Add your image path here
// //     destTitle: "Gateway of India",
// //     location: "Mumbai, Maharashtra",
// //     grade: "A",
// //     fees: "Free",
// //     description: "The Gateway of India is a monumental archway located in the city of Mumbai, India."
// //   },
// //   {
// //     id: 4,
// //     imgSrc: "/assets/jaipur-palace.jpg", // Add your image path here
// //     destTitle: "Jaipur City Palace",
// //     location: "Jaipur, Rajasthan",
// //     grade: "A",
// //     fees: "₹50 (Indians), ₹200 (Foreigners)",
// //     description: "The City Palace in Jaipur is a beautiful example of Rajasthan's royal heritage and architectural splendor."
// //   },
// //   {
// //     id: 5,
// //     imgSrc: "/assets/varanasi-ghats.jpg", // Add your image path here
// //     destTitle: "Varanasi Ghats",
// //     location: "Varanasi, Uttar Pradesh",
// //     grade: "A+",
// //     fees: "Free",
// //     description: "The ghats of Varanasi are an important religious and cultural site, where rituals are performed along the Ganges."
// //   },
// //   {
// //     id: 6,
// //     imgSrc: "/assets/kerala-backwaters.jpg", // Add your image path here
// //     destTitle: "Kerala Backwaters",
// //     location: "Kerala",
// //     grade: "A+",
// //     fees: "Varies (Boat rides)",
// //     description: "The backwaters of Kerala are a network of interconnected canals, rivers, lakes, and inlets, offering a unique experience."
// //   },
// //   {
// //     id: 7,
// //     imgSrc: "/assets/lotus-temple.jpg", // Add your image path here
// //     destTitle: "Lotus Temple",
// //     location: "Delhi",
// //     grade: "A",
// //     fees: "Free",
// //     description: "The Lotus Temple is a Baháʼí House of Worship and a symbol of unity, known for its lotus-shaped architecture."
// //   },
// //   {
// //     id: 8,
// //     imgSrc: "/assets/andaman-islands.jpg", // Add your image path here
// //     destTitle: "Andaman Islands",
// //     location: "Andaman and Nicobar Islands",
// //     grade: "A+",
// //     fees: "Varies (Beach access, water sports)",
// //     description: "The Andaman Islands offer pristine beaches, coral reefs, and clear blue waters, ideal for a tropical getaway."
// //   },
// //   {
// //     id: 9,
// //     imgSrc: "/assets/rishikesh.jpg", // Add your image path here
// //     destTitle: "Rishikesh",
// //     location: "Uttarakhand",
// //     grade: "A",
// //     fees: "Free",
// //     description: "Rishikesh is the 'Yoga Capital of the World', known for its spiritual centers, temples, and adventure sports."
// //   },
// //   {
// //     id: 10,
// //     imgSrc: "/assets/udaipur-lake.jpg", // Add your image path here
// //     destTitle: "Lake Palace, Udaipur",
// //     location: "Udaipur, Rajasthan",
// //     grade: "A",
// //     fees: "₹200 (Entry to the palace)",
// //     description: "Lake Palace is a beautiful palace located on Lake Pichola, offering scenic views and a rich royal history."
// //   }
// // ];





// const Main = () => {
//   return (
//     <section className='main container section'>
//       <div className="secTitle">
//         <h3 className="title">
//           Most Visited Places
//         </h3>
//       </div>
//       <div className="secContent grid">
//         {
//           Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
//             return(
//               <div className="singleDestination">
//                 <div className="imageDiv">
//                   <img src={img} alt="" />
//                 </div>
//               </div>
//             )
//           })
//         }

//       </div>

//     </section>
//   )
// }

// export default Main;






import React, { useEffect } from 'react';
import './main.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Data = [
  {
    id: 1,
    imgSrc: "/assets/img1.jpg",
    destTitle: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    grade: "A+",
    fees: "₹50 ",
    description: "The Taj Mahal, a symbol of love, is one of the most iconic monuments in the world."
  },
  {
    id: 2,
    imgSrc: "/assets/img2.jpg",
    destTitle: "Qutub Minar",
    location: "Delhi",
    grade: "A",
    fees: "₹30 ",
    description: "Qutub Minar is a UNESCO World Heritage site and one of Delhi's most famous historical monuments."
  },
  {
    id: 3,
    imgSrc: "/assets/img3.jpg",
    destTitle: "Gateway of India",
    location: "Mumbai, Maharashtra",
    grade: "A",
    fees: "Free",
    description: "The Gateway of India is a monumental archway located in the city of Mumbai, India."
  },
  {
    id: 4,
    imgSrc: "/assets/img4.jpg",
    destTitle: "Jaipur City Palace",
    location: "Jaipur, Rajasthan",
    grade: "A",
    fees: "₹100",
    description: "The City Palace in Jaipur is a beautiful example of Rajasthan's royal heritage and architectural splendor."
  },
  {
    id: 5,
    imgSrc: "/assets/img5.jpg",
    destTitle: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    grade: "A+",
    fees: "Free",
    description: "The ghats of Varanasi are an important religious and cultural site, where rituals are performed along the Ganges."
  },
  {
    id: 6,
    imgSrc: "/assets/img6.jpg",
    destTitle: "Kerala Backwaters",
    location: "Kerala",
    grade: "A+",
    fees: "Varies (Boat rides)",
    description: "The backwaters of Kerala are a network of interconnected canals, rivers, lakes, and inlets, offering a unique experience."
  },
  {
    id: 7,
    imgSrc: "/assets/img7.jpg",
    destTitle: "Lotus Temple",
    location: "Delhi",
    grade: "A",
    fees: "Free",
    description: "The Lotus Temple is a Baháʼí House of Worship and a symbol of unity, known for its lotus-shaped architecture."
  },
  {
    id: 8,
    imgSrc: "/assets/img8.jpg",
    destTitle: "Andaman Islands",
    location: "Andaman and Nicobar Islands",
    grade: "A+",
    fees: "Varies (Beach access, water sports)",
    description: "The Andaman Islands offer pristine beaches, coral reefs, and clear blue waters, ideal for a tropical getaway."
  },
  {
    id: 9,
    imgSrc: "/assets/img9.jpg",
    destTitle: "Rishikesh",
    location: "Uttarakhand",
    grade: "A",
    fees: "Free",
    description: "Rishikesh is the 'Yoga Capital of the World', known for its spiritual centers, temples, and adventure sports."
  },
  {
    id: 10,
    imgSrc: "/assets/img10.jpg",
    destTitle: "Lake Palace, Udaipur",
    location: "Udaipur, Rajasthan",
    grade: "A",
    fees: "₹200",
    description: "Lake Palace is a beautiful palace located on Lake Pichola, offering scenic views and a rich royal history."
  }
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true }); // Initialize AOS
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle" data-aos="fade-down">
        <h3 className="title">Most Visited Places</h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
          <div className="singleDestination" key={id} data-aos="fade-up">
            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{location}</span>
              </span>

              <div className="fees flex">
                <div className="grade">
                  <span>{grade}</span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>

              <div className="desc">
                <p>{description}</p>
              </div>

              <button className="btn flex">
                DETAILS <HiOutlineClipboardCheck className="icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
