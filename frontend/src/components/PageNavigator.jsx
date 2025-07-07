// // src/components/PageNavigator.jsx

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
// import '../styles/PageNavigator.css';

// const pages = ['/home', '/about', '/projects', '/skills', '/contact'];

// const PageNavigator = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const currentIndex = pages.indexOf(location.pathname);

//   const goToNext = () => {
//     if (currentIndex < pages.length - 1) {
//       navigate(pages[currentIndex + 1]);
//     }
//   };

//   const goToPrevious = () => {
//     if (currentIndex > 0) {
//       navigate(pages[currentIndex - 1]);
//     }
//   };

//   return (
//     <>
//       {currentIndex > 0 && (
//         <button className="circle-btn left-btn" onClick={goToPrevious}>
//           <FaChevronLeft />
//         </button>
//       )}
//       {currentIndex < pages.length - 1 && (
//         <button className="circle-btn right-btn" onClick={goToNext}>
//           <FaChevronRight />
//         </button>
//       )}
//     </>
//   );
// };

// export default PageNavigator;
