import React from "react";
import './FooterComp.css'

const FooterComp = () => {
  return (
    <>
      {/* <section>Footer Example 4</section> */}
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            CGC<span> Seller</span>
          </h3>

          <p class="footer-links">
            <a href="/" class="link-1">
              Home
            </a>

            <a href="/">Write</a>

            <a href="/">About</a>

            <a href="/">Faq</a>

            <a href="/">Contact</a>
          </p>

          <p class="footer-company-name">CGC Seller © 2022</p>
        </div>

        <div class="footer-center">
          {/* <div className="footer-center-con" style={{width:"70%", margin:"auto", display:"flex", justifyContent:"flex-start", flexDirection:"column", alignItems:"flex-start"}}>  */}
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Chandigarh Group of colleges</span> Landran, Mohali
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+91 9350320310</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">vivekparashartkd@gmail.com</a>
            </p>
          </div>
          </div>
        {/* </div> */}

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="/">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="/">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="/">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComp;
