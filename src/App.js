import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Products from './Products'
import Cart from './Cart'
import Login from './Login'
import './App.css';
import React from 'react'

class App extends React.Component{
  state={
    Electronics:[
      {
        image:"https://m.media-amazon.com/images/I/61S4+l6oCgL._SX679_.jpg", 
        name:"Yale Standard Home Electronic Safe",
        description:"Uses 4 AA size batteries (1.5V). In case of battery failure, the safe can be operated with a manual override function with 2 security override keys supplied., Incorrect Entry Alarm feature - Inputting the incorrect code 4 times sounds an internal alarm for 3 minutes and locks out the code pad for that time. Manual override can be used during alarm. ",
        price:4292
      },
      {
        image:"https://m.media-amazon.com/images/I/51aHlnjVH-L._AC_UL480_FMwebp_QL65_.jpg",
        name:"MI 360° Home Security Wireless Camera",
        description:"Dual Band Wi-fi Connection l 3 Million 1296p| Full Color in Low-Light | AI Human Detection, White",
        price:3293
      },
      {
        image:"https://m.media-amazon.com/images/I/51+xYuXifNL._SY879_.jpg",
        name:"APC Back-UPS BX600C-IN 600VA / 360W",
        description:"Compact Design Line Interactive UPS with Load Capacity of 360Watts / 600VA. Output Frequency (sync to mains) : 47 - 63 Hz Sync to mains",
        price:3299
      },
      {
        image:"https://m.media-amazon.com/images/I/51QhMz8eC8L._SX679_.jpg",
        name:"Qubo Smart WiFi Wireless Video Doorbell",
        description:"PROUDLY INDIAN: Qubo Smart Video Doorbell is Designed & Made in INDIA; TRUST OF HERO GROUP: Our Round-the-Clock Customer Service & Wide field Network not only resolves your all concerns & queries but rather ensures complete peace of mind for Lifetime.",
        price:4989
      },
      {
        image:"https://m.media-amazon.com/images/I/61Is7sICRJL._SX679_.jpg",
        name:"beatXP Kitchen Scale Multipurpose Portable Electronic Digital Weighing Scale",
        description:"A wide LCD screen display makes this scale easy to read, and it automatically locks its reading when the data is stable",
        price:189
      },
      {
        image:"https://m.media-amazon.com/images/I/31ce1uGv6uL.jpg",
        name:"ATOM A 302 Electronic Digital Hanging Stainless Steel Hook Luggage Portable Scale with LCD Display for Industrial Fishing Factory Use Capacity 50Kg",
        description:"This mini hanging scale weigh up to 50 kg weight and gives you accurate precision measuring for effective results.You can easily choose different weighing modes such as Lb/Kg.Set the scale to your desired measurement by pressing the Unit(U) button.",
        price:249
      },
      {
        image:"https://m.media-amazon.com/images/I/61ojx645HqL._SX679_.jpg",
        name:"HP w200 HD 720P 30 FPS Digital Webcam",
        description:"Resolution and Frame rate: Max. 1280 x 720P, Max. 30Fps | Focus type: fixed. Swivel 270°adjustable| Microphone: Single digital mi 1 year manufacturer warranty on the device from the date of purchase. Adjustable clip",
        price:1199
      },
      {
        image:"https://m.media-amazon.com/images/I/6121CvrxsiS._SX679_.jpg",
        name:"Ohuhu 9 inches Electronic Drawing Doodle Board",
        description:"There’s nothing like a color screen to bring your drawings alive! Every stroke is captured with the pressure-sensitive LCD screen, which features bright colors, a clear image and smooth writing. What’s more, this eye-friendly screen doesn’t flare or strain your eyes, and LCD writing tablet is a great creative outlet for your kids.",
        price:919
      },
      {
        image:"https://m.media-amazon.com/images/I/41MWUiL9dzL.jpg",
        name:"Solnoi Electronics Absolute Native Electronics Red YB27A LED AC 60-500V Digital Voltmeter ",
        description:"Adopting the capacitance step-down principle design, not suitable for high frequency occasionUsed to monitor the household voltmeter, also applied to other AC voltmeter measuring.Good stability and high measurement accuracy.",
        price:324
      }

   

  
   


      ]
  }
  render(){
  return(
    <div>
        <BrowserRouter>
          <Navigation/>
          <Routes>
          <Route>
             <Route path="/" element={<Home/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/Products" element={<Products appliances={this.state.Electronics}/>}/>
             <Route path="/Cart" element={<Cart/>}/>
          </Route>
          </Routes>
        </BrowserRouter>
        

    </div>
    )
}
}
export default App;































