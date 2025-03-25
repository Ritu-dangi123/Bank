import React from 'react'
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import "../css/footer.css"
const Footer = () => {
  return (
   <>
   <div id="mainfootear">
  <div id="footear">
    <div id="head">
      <h1>Subscribe us to Recieve <br/>Latest Updates</h1>

    </div>
    <div id="email">
      <div id="E">
        <h4>your email . . . . . . . .</h4>

      </div>
      <div id="s">
      <h4>Subscribe Now</h4>
      </div>
    </div>
  </div>
  </div>
  {/* footear section */}

  <footer id='mainf'>
    <div className="footear-section" id='fcc1'>
      <div id="cc1">
      
          <img src='logo-2.png'/>
          <h5>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Voluptatem harndi<br/> corrupti, beatae culpa id efusd <br/>reiciendis tium quae i ita.</h5>
          <div id="ficons">

          <TbBrandTwitterFilled />
          <FaApple />
           <FaTelegram />
          </div>
      

      </div>

    </div>
    
    <div className="footear-section" id='fcc2'>
      <div id="cc2">
        <ul>
          <h4>Usefull Links</h4>
          <li> <h6>Mobile Application</h6></li>
          <li><h6>Apply for loan</h6></li>
          <li><h6>creadit Card</h6></li>
          <li><h6>Digital gift</h6></li>
          <li><h6>goald loan</h6></li>
          <li><h6>insorance</h6></li>
        </ul>

      
      </div>
      </div>

      <div className="footear-section" id='fcc3'>
      <div id="cc3">
        <ul>
          <h4>Explore</h4>
          <li><h6>About Us</h6></li>
          <li> <h6>Carrers</h6></li>
          <li><h6>Career Detail</h6></li>
          <li><h6>Facileties</h6></li>
          <li><h6>Facileties</h6></li>
          <li><h6>Facileties</h6></li>

        </ul>
    </div>
      </div>


      <div className="footear-section" id='fcc3'>
      <div id="cc4">
      <h5>Find Our Branch & ATM</h5>
     <div id="ft1">

      <h4>Branch</h4>

     </div>

     <div id="ft2">
      <h4>Loaction</h4>
      
      </div>

      <div id="fb">
      <Button variant="danger" style={{width:"110px",height:"50px"}}>login</Button>
      </div>
    </div>
 
    
      </div>
  </footer>
  
   </>
  )
}

export default Footer
