 import React, { useState} from 'react'
 import Carousel from 'react-bootstrap/Carousel';
 import "./Productpage.css"
 import rednike from '../../images/rednike.png'
 import star from '../../images/star.png'
 import nike2 from '../../images/nike2.png'
import nike3 from '../../images/nike3.png'
import nike4 from '../../images/nike4.png'
import nike6 from '../../images/nike6.png'
// import nike from '../../images/nike.png'
 import nike7 from '../../images/nike7.PNG'
 import nike8 from '../../images/nike8.PNG'
 import star2 from '../../images/star2.png'
 import cart2 from '../../images/cart2.png'
 import hearts from '../../images/hearts.png'
 import whitefacebook from '../../images/whitefacebook.png'
 import whitetwitter from '../../images/whitetwitter.png'
 import Tab from "../../Components/Tabscomponent/Tab"
import Shoecard from "../../Components/Shoecard/Shoecard"
import rate from "../../images/rate.png"
import wallet from "../../images/wallet.png"
import wallet2 from "../../images/wallet2.png"
import bluenike from "../../images/bluenike.png"
import SCarousel from "../../Components/Carousel/SCarousel"



 const Productpage = () => {
    const [quantity, setQuantity]= useState(1);

  const handleDecrement=()=>{
    if (quantity > 1){
      setQuantity(prevCount=> prevCount-1);
    }
    
  }
  const handleIncrement=()=>{
    if (quantity < 10){
      setQuantity(prevCount=> prevCount+1);
    }
    
  }
  //Quantity increment and decrement ends
// image slider 
const imgs=[
    {id:0, value: nike3},
    {id:1, value:nike4},
    {id:2, value:rednike},
    {id:3, value:nike6},
  ]
  const [sliderData, setSliderData]= useState(imgs[0])
  const handleClick=(index)=>{
    console.log(index);
    const slider=imgs[index];
    setSliderData(slider);
  }
  //card component
    const [data]= useState ([{
        image: nike2,
        heading: ' Nike Air Max 270 React',
        star: rate,
        prices:'  $299,43'
    },
      {
        image: wallet,
        heading: ' Nike Air Max 270 React',
        star: rate,
        prices:'$299,43'

      },
      {
        image: wallet2,
        heading: ' Nike Air Max 270 React',
        star: rate,
        prices:' $299,43'
      },
      {
        image: bluenike,
        heading: ' Nike Air Max 270 React',
        star: rate,
        prices:' $299,43'
      }
  ])
   return (
     <div>
       <div className="productpage-container">
          <div className="nike">
            <img src={sliderData.value} height="300" width="300" alt=""/>
            <div className='flex-row'>
            {
              imgs.map((data, i)=>
              <div className='thumbnails'>
              <img className={sliderData.id===i?"clicked":""} key={data.id}src={data.value} alt=""onClick={()=>handleClick(i)} height="80" width="80"/>
              </div>
              )
            } 
            </div>
            </div>
        <div className="product-desc">
            <p>Nike Airmax 270 React</p>
                <div className="review">
                    <div className="star">
                        <img src={star}alt=""/> 
                        <img src={star}alt=""/> 
                        <img src={star}alt=""/> 
                        <img src={star}alt=""/>
                        <img src={star2}alt=""/>
                    </div>
                    <div className="submitted">
                        <p className='review'>0 reviews</p>
                        <p className="submit">Submit a review</p>
                    </div>
              </div>
              <hr className="thin" />
              <p className="dollars">$299,43 <small>$534,33 </small> <small className="off">24% Off</small></p>
              <small className="object">
                Availability:   In stock <br></br>
                Categories:     Accessories <br></br>
                Free shipping <br></br>
                <hr className="thin" />
                Select colors: <input type="radio" id ='blue' name='colors' value='blue'/> <input type="radio" name='colors' id= 'red' value="red"/> <input type="radio" id='black' name='colors' value="black"/> <input type="radio" name='colors' id= 'yellow' value="yellow"/>
                <br></br>
                Size:<select className="size" name="lang" id="lang">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                      </select>
                    <br></br>
                    <div className="cart">
                      <div className="input-group">
                        <button type='button' onClick={handleDecrement}className='input-group-text'>-</button>
                        <div className='form-control text-center'>{quantity}</div>
                        <button type='button'onClick={handleIncrement} className='input-group-text'>+</button>
                      </div>
                      <div className="cart2">
                      <small className='to'><img src={cart2} alt=''/>   Add To Cart</small>
                      <small className='love'><img src={hearts} alt=''/></small>
                      </div>
                    </div>
                </small>
                <hr className="thin"></hr>
              <div className="social-media">
                <button className="facebook"><img src={whitefacebook} alt=''/> Share on Facebook</button>
                 <button className="twitter"><img src={whitetwitter} alt=''/> Share on Twitter</button>
              </div>
        </div>
        <div className="right">
          <p>BEST SELLERS </p>
              <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nike2}
          alt="First slide"
          
        />
        <Carousel.Caption>
           
        </Carousel.Caption>
        <div className="desc">
            <div className="star">
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/>
          <img src={star2}alt=""/>
        </div>
        <p className='price'>$499 <small className='price'>$599</small></p>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nike7}
          width='1%'
          alt="Second slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
        <div className="desc">
            <div className="star">
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/>
          <img src={star2}alt=""/>
        </div>
        <p className='price'>$599 <small className='price'>$699</small></p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {nike8}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
         <div className="desc">
            <div className="star">
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/>
          <img src={star2}alt=""/>
        </div>
        <p className='price'>$699 <small className='price'>$799</small></p>
        </div>
      </Carousel.Item>
    
    </Carousel>

    
        </div>
        <div className="tab-container">
        <Carousel/>
      </div>
      
    </div>
    <div className="tab-container">
      <Tab/>
    </div>
    <div className='related'>
      <h2> RELATED PRODUCTS</h2>
      <div className="related-container">
        {data.map((item) =>(
        <Shoecard image={item.image} heading={item.heading} star={item.star} prices={item.prices}/>
     )
     )}
     <button className='hot'>HOT</button>
     </div>
     </div>
     </div>
   )
 }
 
 export default Productpage