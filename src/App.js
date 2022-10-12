 import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import React from 'react'
 import Header from "./Components/Header/Header"
 import Nav from "./Components/Nav/Nav"
 import Footer from "./Components/Footer/Footer"
 import ProductPage from "./Pages/ProductPage/Productpage"
 import CartPage from "./Pages/Cartpage/Cartpage"
 import Contactpage from "./Pages/Contactpage/Contact"
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



 

function App() {
    return (
        <BrowserRouter>
          <div className='App'>
            <Header/>
            <Nav/>
            <Routes>
              <Route path ='/' element ={<ProductPage/>}/>
              <Route path= '/contactpage' element ={ <Contactpage/>}/>
              <Route path= '/cartpage' element ={<CartPage/>}/>
            </Routes>
             
            <Footer/>
          </div>      
        </BrowserRouter>
    );
}

export default App;
{/* <Route path ='/' element = {<Home/>}/> */}
      //  <Route path ='ContactUs' element ={<ContactUs/>}/>
      //  <Route path ='AboutUs' element ={<AboutUs/>}/>
 