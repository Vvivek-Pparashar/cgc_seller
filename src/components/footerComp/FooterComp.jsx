import React from "react";
import "./FooterComp.css";
import { Link } from "react-router-dom";

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
            <Link to={"/"} class="link-1">
              Home
            </Link>

            <Link to={'/additem'}>Add-Item</Link>

            <Link to={"/aboutus"}>About us</Link>

            <Link to={"/faq's"}>FAQ's</Link>

            <Link to={"/contact"}>Contact</Link>
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
            <p><a href="tel:9350320310" style={{color:"white"}}>+91 9350320310</a></p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto: cgcseller@gmail.com">cgcseller@gmail.com</a>
            </p>
          </div>
        </div>
        {/* </div> */}

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Connect, trade, and save with CgcSeller, the online marketplace for
            college students. Buy, sell, and build a sustainable campus
            community by reusing items like textbooks, furniture, and
            electronics. Join us to revolutionize student trading and contribute
            to a more affordable and eco-friendly college experience.
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
