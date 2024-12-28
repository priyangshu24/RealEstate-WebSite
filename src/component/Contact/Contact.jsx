/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import { TbPhoneCall } from "react-icons/tb"
import { BsFillChatDotsFill } from "react-icons/bs"
import { HiChatBubbleBottomCenterText } from "react-icons/hi2"
import { MdEmail } from "react-icons/md"

const Contact = () => {
  return (
    <section className="c-wrap">
      {/* Left Side */}
      <div className="flexColStart c-left">
        <span className='orangeText'>Our Contacts</span>
        <span className='primaryText'>Easy to contact us</span>
        <span className='secondaryText'>
          We always ready to help by providing the best services for you
        </span>

        <div className="flexStart contactModes">
          {/* first row */}
          <div className="flexColStart row">
            {/* Call Mode */}
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <TbPhoneCall size={25}/>
                </div>
                <div className="flexColCenter detail">
                  <span className="primaryText">Call</span>
                  <span className="secondaryText">+1 234 5678</span>
                </div>
              </div>
              <div className="flexCenter button">Call Now</div>
            </div>

            {/* Chat Mode */}
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25}/>
                </div>
                <div className="flexColCenter detail">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">Start a live chat</span>
                </div>
              </div>
              <div className="flexCenter button">Chat Now</div>
            </div>
          </div>

          {/* second row */}
          <div className="flexColStart row">
            {/* Message Mode */}
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenterText size={25}/>
                </div>
                <div className="flexColCenter detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">Send a message</span>
                </div>
              </div>
              <div className="flexCenter button">Message Now</div>
            </div>

            {/* Email Mode */}
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdEmail size={25}/>
                </div>
                <div className="flexColCenter detail">
                  <span className="primaryText">Email</span>
                  <span className="secondaryText">info@example.com</span>
                </div>
              </div>
              <div className="flexCenter button">Email Now</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="c-right">
        <div className="img-cont">
          <img
            src="./img/contact.jpg"
            alt="Contact"
            style={{
              width: '100%',
              height: '100%',
              filter: 'none'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Contact