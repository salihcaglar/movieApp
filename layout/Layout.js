import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import { Audio } from  'react-loader-spinner'
// import { useEffect, useState } from "react";

const Layout = ({ children }) => {

  // const [isLoading, setIsLoading] = useState(true);
  // const handleLoading = () => {
  //   setIsLoading(false);
  //   }
    
  //   useEffect(()=>{
  //   window.addEventListener("load",handleLoading);
  //   return () => window.removeEventListener("load",handleLoading);
  //   },[])
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
  // ):(<Audio
  //   height = "80"
  //   width = "80"
  //   radius = "9"
  //   color = 'green'
  //   ariaLabel = 'three-dots-loading'     
  //   wrapperStyle
  //   wrapperClass
  // />);
};

export default Layout;
