import React from "react";
import "./Contact.css";
import { MessageOutlined, WechatOutlined } from "@ant-design/icons";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";

const Contact = () => {
  return (
    <>
      <h3 className="cu-m-h3">Contact us :</h3>
      <div className="cu-m-c">
        <div className="cu-m-c-ch">
          <div className="cu-m-c-ch-ih">
            <QuestionAnswerOutlinedIcon />
          </div>
          <div className="cu-m-c-ch-c">
            <h3>Chat to us</h3>
            <p>Our friendly team is here to help</p>
            <p>
              <a href="mailto: cgcseller@gmail.com">cgcseller@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="cu-m-c-ch">
          <div className="cu-m-c-ch-ih">
            <PinDropOutlinedIcon />
          </div>
          <div className="cu-m-c-ch-c">
            <h3>Visit us</h3>
            <p>Come say hello at our office hq</p>
            <a href="https://www.google.com/maps/place/Chandigarh+Group+of+Colleges+(CGC)+-+Landran/@30.6869352,76.6622655,17z/data=!3m1!4b1!4m6!3m5!1s0x390fef154b91a85b:0x4d8b9df97e986631!8m2!3d30.6869306!4d76.6648404!16s%2Fg%2F1tqfzqn1" target="__blank">Hostel SadBhavana, CGC Landran, Mohali</a>
          </div>
        </div>

        <div className="cu-m-c-ch">
          <div className="cu-m-c-ch-ih">
            <AddIcCallOutlinedIcon style={{paddingLeft:"-5px", paddingTop:"1px" }}/>
          </div>
          <div className="cu-m-c-ch-c">
            <h3>Call us</h3>
            <p>Mon-Fri from 8am to 5pm</p>
            <div className="call-p-name">
              <a href="tel:9350320310">+91 9350320310</a> <p>( Vivek Parashar )</p>
            </div>
            <div className="call-p-name">
              <a href="tel:7814587473">+91 7814587473</a> <p>( Harshit Mahajan )</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
