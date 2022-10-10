 import React from 'react'
 import Header from "./Components/Header/Header"
 import Nav from "./Components/Nav/Nav"
 import Footer from "./Components/Footer/Footer"
 import ProductPage from "./Pages/ProductPage/Productpage"
 import CartPage from "./Pages/Cartpage/Cartpage"
 import Contactpage from "./Pages/Contactpage/Contact"
 const App = () => {
   return (
     <div>
      <Header/>
      <Nav/>
      <ProductPage/>
      <CartPage/>
      <Contactpage/>
      <Footer/>
     </div>
   )
 }
 
 export default App