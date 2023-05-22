import React from "react";
import { ScrollRestoration } from "react-router-dom";
import FooterComp from "../footerComp/FooterComp";
import { Layout } from "antd";
import NavBar from "../navBar/NavBar";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Layout className="main">
        <NavBar />
        <Layout className="site-layout" id="main-comp">
          <div className="ab-m">
            <h3 className="ab-m-h3" style={{ fontSize: "30px" }}>
              About us :
            </h3>
            <p style={{ fontSize: "17px", lineHeight:"1.7rem" }}>
              Welcome to our website, the online platform that connects college
              students across campuses and promotes the reuse of items among
              them. Our mission is to simplify the process of buying and selling
              items for college students, while also contributing to the
              reduction of waste. We understand the financial burden of being a
              student, and we believe that the reuse of items within a college
              community can have a significant impact on students' budgets.
              <br />
              <br />
              Additionally, we want to promote sustainability by keeping items
              out of landfills and promoting a circular economy. Our platform
              allows college students to easily sell items they no longer need,
              such as textbooks, furniture, electronics, and other college
              essentials, to other students within their campus. We have created
              a user-friendly interface that makes listing items for sale and
              browsing for items to purchase a breeze.
              <br />
              <br />
              Our website also provides a messaging feature that allows buyers
              and sellers to communicate and coordinate the exchange of goods,
              ensuring a safe and secure transaction. We prioritize the safety
              of our users and have implemented various features to ensure a
              smooth and secure transaction.
              <br />
              <br />
              Our platform not only benefits students financially, but it also
              fosters a sense of community and collaboration. We believe that by
              connecting students and promoting the reuse of items, we can build
              a more sustainable and responsible college community.
              <br />
              <br />
              Thank you for choosing our platform. We hope you find it easy to
              use and that it contributes to making your college experience more
              affordable and sustainable.
            </p>
          </div>
        </Layout>
        <FooterComp />
      </Layout>
      <ScrollRestoration />
    </>
  );
};

export default AboutUs;
