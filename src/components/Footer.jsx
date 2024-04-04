import React from "react";
const Footer = () => {
  return (
    <>
        <footer>
  <div className="left-footer-container">
      <div className="left-container1">
          <span>JegaMart</span>
          <span>7b choba street, goldberg foreshore estate, alakahia, Rivers state.
            090111223445
          </span>
      </div>
      <div className="left-container2">
        <span>Quick Links</span>
        <ul className="left-container2-links">
          <a href="#">send money</a>
          <a href="#">pay bills</a>
          <a href="#">shopping</a>
          <a href="#">invoice settlement</a>
          <a href="#">download the app</a>
        </ul>
      </div>
  </div>

  <div className="right-footer-container">
    <div className="right-footer-container1">
      <span>support</span>
      <span>order taking</span>
      <span>contact us</span>
      <span>
        <p>stay connected</p>
          <div className="right-footer-container1-images"> 
            <img src="./images/facebook.png" alt=""/>
            <img src="./images/Twitter.png" alt=""/>
            <img src="./images/insta.png" alt=""/>
          </div>
      </span>
    </div>
    
    <div className="right-footer-container2">
        <span>Get latest deals</span>
        <span>our best promotions sent to your inbox</span>
        <span className="footer-input">
          <input type="text" placeholder="email-address"/>
          <button>suscribe</button>
        </span>
    </div>
  </div>
</footer>
    
    </>
  )
};
export default Footer;
