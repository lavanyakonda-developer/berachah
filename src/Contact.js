import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div className="contact-container">
      <h3 style={{ paddingLeft: 16 }}>Contact us</h3>
      <div className="row mt-4">
        {/* Location */}
        <div className="col-12 col-md-4 mb-3 layout-bordered-item">
          <div className="d-flex flex-column align-items-center">
            <FaMapMarkerAlt className="icon-color icon icon-md  mb-2" />
            <p className="contact-address mb-0">
              Door No: 1-11/20/C, Sri Sairam Colony, old Hafizpet, Miyapur post,
              Hyderabad, Telangana, India 500049
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="col-12 col-md-4 mb-3 layout-bordered-item">
          <div className="d-flex flex-column align-items-center">
            <FaEnvelope className="icon-color icon icon-md  mb-2" />
            <a href="mailto:k.sambabu@yahoo.com">k.sambabu@yahoo.com</a>
          </div>
        </div>

        {/* Phone */}
        <div className="col-12 col-md-4 mb-3 layout-bordered-item">
          <div className="d-flex flex-column align-items-center">
            <FaPhoneAlt className="icon-color icon icon-md  mb-2" />
            <p className="mb-0">9989274863 and 9059516060</p>
          </div>
        </div>
      </div>
      <div className="social-media-icons">
        <h4>Reach out to us on social media</h4>
        <div className="social-icons">
          <a
            href="https://api.whatsapp.com/send?phone=9100685437"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="whatsapp-icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100010294026963"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="facebook-icon" />
          </a>
          <a
            href="https://www.instagram.com/berachahchurchmission"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="instagram-icon" />
          </a>
          <a
            href="https://www.youtube.com/@berachahswaram5627/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="youtube-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
