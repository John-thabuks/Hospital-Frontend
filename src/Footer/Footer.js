import React from 'react'
import './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
    return (

        <>
            <div className="footer">

                <div className='footerLogo'>
                    {/* <img src="../../images/Footer_Logo.png" alt="" /> */}
                </div>

                <div className='footerInTouch'>
                    <h2>Get in Touch With Us</h2>
                    <h3><FaPhoneAlt className='phone' /> +254 111 049 900</h3>
                    <a href='mailto:info@aarhospital.com'><MdOutlineMailOutline className='email' /> info@aarhospital.com</a >
                    <h3><MdLocationPin className='location' /> AAR Hospital, Muthaiga North Rd, Kiambu road
                        opp Karura Forest</h3>
                    <div className='socialMedia'>
                        <CgFacebook className='facebook' size="30px" />
                        <SlSocialTwitter className='X' size="30px" />
                        <IoLogoInstagram className='instagram' size="30px" />
                        <TiSocialYoutube className='youTube' size="30px" />
                    </div>
                </div>

                <div className='quickLinks'>
                    <h2>Quick Links</h2>
                    <a href="https://aarhospital.com/faq/">FAGs</a>
                    <a href="https://aarhospital.com/news/">News</a>
                    <a href="https://aarhospital.com/contact-us/">Feedback Portal</a>
                    <a href="https://aarhospital.com/whistleblower/">Whistleblower Services</a>
                    <a href="https://aarhospital.com/downloads/">Downloads</a>
                    <a href="https://aarhospital.com/work-with-aar/">Work With Us</a>
                    <a href="https://aarhospital.com/tenders/">Tenders</a>
                </div>

                <div className='affiliates'>
                    <h2>Our Affiliates</h2>
                    <a href="http://www.hhi-ms.com/">Hospital Holdings Investment (HHI)</a>
                    <a href="https://aar-healthcare.com/ke/">AAR Healthcare Kenya</a>
                    <a href="https://aar-healthcare.com/ug/">AAR Healthcare Uganda</a>
                    <a href="https://kampalahospital.com/">Kampala Hospital</a>
                    <a href="https://nakaserohospital.com/">Nakasero Hospital</a>
                </div>
            </div>
        </>
    )
}

export default Footer