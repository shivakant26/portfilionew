import myImage from "../assets/images/shiva_img.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
  FaMapSigns,
  FaPaperPlane,
  FaGlobeAfrica,
  FaReact,
  FaAngular,
  FaHtml5,
  FaChalkboardTeacher,
  FaDev,
} from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactForm from "../component/ContentForm";
import ServiceCard from "../component/ServiceCard";
import { ExpCardData, serviceMenu } from "../utils/utils";
import ContactImage from "../assets/images/contact-image.jpg";
import ExperienceCard from "../component/ExperienceCard";
const HomePage = () => {
  return (
    <>
      <section className="banner">
        <div className="center_wr">
          <div className="banner_inner">
            <div className="bn-text">
              <p>Hellow !</p>
              <h1>
                I'am <span className="stylish-text">Frontend Developer</span>{" "}
                based in India
              </h1>
              <div className="btn-group">
                <a className="hire-btn" href="">
                  hire me
                </a>
                <a className="work-btn" href="">
                  my work
                </a>
              </div>
            </div>
            <div className="bn-image">
              <img src={myImage} alt="shiva" />
            </div>
          </div>
        </div>
      </section>
      {/* end banner section */}
      <section className="about">
        <div className="center_wr">
          <div className="about-inner">
            <div className="about-image">
              <img src={myImage} alt="shiva" />
            </div>
            <div className="about-text">
              <h2>About me</h2>
              <p>I'am software Developer from last 3.5 years</p>
              <ul>
                <li>
                  <span>Name : </span>
                  <span>Shivakant Tiwari</span>
                </li>
                <li>
                  <span>Date of birth : </span>
                  <span>November 22, 1993</span>
                </li>
                <li>
                  <span>Address : </span>
                  <span>sirmour Rewa</span>
                </li>
                <li>
                  <span>Zip codeZip : </span>
                  <span>486448</span>
                </li>
                <li>
                  <span>Email : </span>
                  <span>shivakanttiwari123@gmail.com</span>
                </li>
                <li>
                  <span>Phone : </span>
                  <span>7693882898</span>
                </li>
              </ul>
              <h5>15+ project completed</h5>
              <a href="" className="download-btn">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
      <section className="resume">
        <div className="center_wr">
          <h2>Resume</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth
          </p>
          <div className="card-container">
            {ExpCardData?.map((item, index) => {
              return <ExperienceCard data={item} key={index} />;
            })}
          </div>
        </div>
      </section>
      {/* end resume section */}
      <section className="service">
        <div className="center_wr">
          <h2 className="section-heading">services</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth
          </p>
          <div className="card-container">
            {serviceMenu?.map((item, index) => {
              const Icons = item.icon;
              return <ServiceCard item={item} index={index} Icons={Icons} />;
            })}
          </div>
        </div>
      </section>
      {/* end service section */}
      <section className="contact">
        <div className="center_wr">
          <h2>Contact me</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
          <div className="contacts">
            <div className="card-container">
              <div className="contact-card">
                <span>
                  <FaMapSigns />
                </span>
                <h5>Address</h5>
                <p>sirmour Rewa (m.p.)</p>
              </div>
              <div className="contact-card">
                <span>
                  <FaPhone />
                </span>
                <h5>CONTACT NUMBER</h5>
                <p>7693882898</p>
              </div>
              <div className="contact-card">
                <span>
                  <FaPaperPlane />
                </span>
                <h5>EMAIL ADDRESS</h5>
                <p>shivakanttiwari123@gmail.com</p>
              </div>
              <div className="contact-card">
                <span>
                  <FaGlobeAfrica />
                </span>
                <h5>WEBSITE</h5>
                <p>currently not Available</p>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-img">
              <img src={ContactImage} alt="contact-img" />
            </div>
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
    </>
  );
};

export default HomePage;
