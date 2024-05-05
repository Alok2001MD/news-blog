import React from "react";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import ProjectsCard from "./components/projects/ProjectsCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carddetails from "./components/projects/Carddetails"
import Contact from "./components/contacts/Contact";
import Subscibe from "./components/contacts/subscribe";

export function Home() {
  return (
    <>
      <Banner />
      <ProjectsCard />
    </>
  );
}

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
       <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article/:index" element={<Carddetails/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/subscribe" element={<Subscibe/>} />
        </Routes>
        <Footer />
        <FooterBottom />
       </BrowserRouter>
    </div>
  );
}

export default App;


  
  
  

// function App() {

//   return (
//     <div className='bg-black'>
//       <BrowserRouter>
//       <Navbar/>
//        <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path="/article/:index" element={<ArticleDetails/>} />
//         <Route path='/contact' element={<Contactus/>}/>
//         <Route path='/subscribe' element={<Subscibe/>}/> 
//         </Routes>
//  <Footer/>
 
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App




