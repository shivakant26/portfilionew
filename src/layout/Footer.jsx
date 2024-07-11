import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LinksMenu, serviceMenu } from "../utils/utils";

const Footer = () => {
  return (
    <footer>
      <div className="center_wr">
        <div className="footer-inner">
          <div className="ft-about">
            <h3 className="heading">About</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul>
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="ft-links">
            <h3 className="heading">Links</h3>
            <ul>
              {LinksMenu?.map((item, index) => {
                return (
                  <li key={index}>
                    <span>
                      <FaArrowRight />
                    </span>
                    <a href={item.url}>{item.labelName}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ft-service">
            <h3 className="heading">Services</h3>
            <ul>
              {serviceMenu?.map((item, index) => {
                return (
                  <li key={index}>
                    <span>
                      <FaArrowRight />
                    </span>
                    <a href={item.url}>{item.labelName}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ft-have-ques">
            <h3 className="heading">Have a Questions?</h3>
            <ul>
              <li>
                <span>
                  <FaLocationDot />
                </span>
                <span>
                  Mayur Nager musakedi Inodre , India
                </span>
              </li>
              <li>
                <span>
                  <FaPhone />
                </span>
                <span>7693882898</span>
              </li>
              <li>
                <span>
                  <MdEmail />
                </span>
                <span>shivakanttiwari123@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
