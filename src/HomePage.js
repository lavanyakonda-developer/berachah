import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import testimonialPH from "./images/testimonials-person-1.jpeg";
import _ from "lodash";
import { extractFileIdFromGoogleDriveLink } from "./Utils";
import bannerImg from "./images/banner.jpeg";

const carouselData = [
  {
    heading: "WELCOME TO BERACHAH!",
    subHeading: "The place where God dwells",
    text: "The purpose of Berachah Church is to present the Gospel of Jesus Christ.",
    image: bannerImg,
    buttonText: "About us",
    key: "about",
  },
  {
    heading: "Our services",
    subHeading: "Join our services",
    text: "In Berachah Church, Children ministry,Youth ministry; Women's ministry and Men's ministry are like four pillars of the Church.",
    image: bannerImg,
    buttonText: "Learn more",
    key: "services",
  },
  {
    heading: "Pray with us",
    subHeading: "Join the Prayer",
    text: "Feel free to join our church and the family of Berachah that will help you on your way to discovering the power of Jesus Christ.",
    image: bannerImg,
    buttonText: "Prayer request",
    key: "request",
  },
];

const testimonials = [
  {
    image: testimonialPH,
    heading:
      "I've never been part of a church that's just getting started, so this is all new territory for me. It's incredible to see God at work, bringing people together.",
    name: "Russell Smith",
    role: "Parishioner",
  },
  {
    image: testimonialPH,
    heading:
      "For the first time in years, I am truly excited about being in a Sunday morning service. I haven't worshipped and learned like I am now in quite some time.",
    name: "Same Edwards",
    role: "Parishioner",
  },
];

const galleryPics = [
  extractFileIdFromGoogleDriveLink(
    "https://drive.google.com/file/d/1-kYWmnmLr8tnCAa09e3ENh_NLzH_Pwy_/view?usp=sharing"
  ),
  extractFileIdFromGoogleDriveLink(
    "https://drive.google.com/file/d/1iwyioZ01sge_V7j6nhp1SuW_k-NjmSzG/view?usp=sharing"
  ),
  extractFileIdFromGoogleDriveLink(
    "https://drive.google.com/file/d/1CDQDkd33AHAMw1mXuf-XS1FXZ0Wtcka8/view?usp=sharing"
  ),
  extractFileIdFromGoogleDriveLink(
    "https://drive.google.com/file/d/129FoTjLrxREzWYzk8Oe_EQCLKMehjTQE/view?usp=sharing"
  ),
  extractFileIdFromGoogleDriveLink(
    "https://drive.google.com/file/d/1HTb2NWYKFgnk7HVnYjsFc8uMvQfQ-8sR/view?usp=sharing"
  ),
  extractFileIdFromGoogleDriveLink(
    "https://drive.google.com/file/d/1J-2F77HX26MYaCaf_t5lp7_BrBsW97vx/view?usp=sharing"
  ),
];

const HomePage = (props) => {
  const { index, handleSelect, handleTabChange } = props;

  return (
    <>
      {/* Carousel */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {_.map(carouselData, (carousel) => {
          return (
            <Carousel.Item>
              <img src={carousel.image} />
              <Carousel.Caption>
                <div className="container-carousel-text">
                  <span
                    className="carousel-heading-text"
                    style={{ visibility: "visible" }}
                  >
                    {carousel.heading}
                  </span>
                  <span
                    className="carousel-sub-heading-text"
                    style={{
                      visibility: "visible",
                      textAlign: "left",
                      lineHeight: "40px",
                    }}
                  >
                    {carousel.subHeading}
                  </span>
                  <p
                    className="carousel-para-text"
                    style={{ visibility: "visible", textAlign: "left" }}
                  >
                    {carousel.text}
                  </p>
                  <div className="button-outer">
                    <a
                      className="button button-lg button-primary button-winona"
                      style={{
                        visibility: "visible",
                        textDecoration: "none",
                      }}
                      onClick={() => handleTabChange(carousel.key)}
                    >
                      <div className="content-original">
                        {carousel.buttonText}
                      </div>
                    </a>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      {/* Father's Section */}

      <section className="section section-sm pb-0">
        <div className="common-container">
          <div className="row justify-content-center flex-lg-row-reverse">
            <div
              className="col-md-10 col-lg-6"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={
                  "https://drive.google.com/uc?export=view&id=1NRu3lIGQqcvU7oVu8pHVBftKSRDQEefy"
                }
                alt=""
                style={{ height: "auto" }}
              />
            </div>
            <div className="col-md-10 col-lg-6 col-xl-5 align-self-center">
              <h3 style={{ paddingBottom: 20, paddingTop: 16 }}>
                Welcome! We love God!
              </h3>
              <h5>
                Greetings in the precious name of our Lord and Saviour Jesus
                Christ, to whom belongs the honor and glory forever and ever.
              </h5>
              <p style={{ fontSize: 14, padding: "12px 0px" }}>
                Pastor K. Sam Babu, accepted Jesus Christ as his personal
                saviour and was baptized at the age of 16 years in the year
                1989. He was saved under the ministry of God’s servants and
                Founders of BERACHAH Ministries Pastor. P. Yesupadam and Mrs. P.
                Prabhavathi Yesupadam and entered into full time ministry in
                obedience to God’s calling in the year 1992.
              </p>
              <div
                className="button-outer"
                style={{
                  paddingBottom: 16,
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => handleTabChange("about")}
              >
                <a
                  className="button button-lg button-primary button-winona"
                  style={{ textDecoration: "none" }}
                >
                  <div className="content-original">Learn more</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section For services */}

      <section className="section section-lg text-center bg-gray-100">
        <div className="common-container">
          <h3>Services</h3>
          <div className="row row-xxl-100 offset-top-6">
            <div className="col-sm-6 col-md-6 cd-lg-4">
              <article className="box-creative">
                <div className="box-creative-icon">
                  <svg
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M85.4297 76.5076V49.0002L77.7806 41.3511H60.1172V33.702L62.9297 36.5145L68.6399 30.8042L45 7.16431L21.3601 30.8044L27.0703 36.5147L29.8828 33.7022V41.3513H12.2194L4.57031 49.0002V76.5074H0V82.8355H90V76.5074H85.4297V76.5076ZM76.9069 43.4607L81.8288 48.3825H60.1172V43.4607H76.9069ZM83.3203 50.4919V76.5076H60.1172V50.4919H83.3203ZM27.0703 33.5315L24.3431 30.8042L45 10.1475L65.6569 30.8044L62.9297 33.5315L45 15.6018L27.0703 33.5315ZM45 56.8201C40.5415 56.8201 36.9141 60.4475 36.9141 64.906V76.5076H31.9922V31.5928L45 18.585L58.0078 31.5928V76.5076H53.0859V64.906C53.0859 60.4473 49.4585 56.8201 45 56.8201ZM50.9766 64.906V76.5076H39.0234V64.906C39.0234 61.6104 41.7045 58.9294 45 58.9294C48.2955 58.9294 50.9766 61.6104 50.9766 64.906ZM13.0931 43.4607H29.8828V48.3825H8.17119L13.0931 43.4607ZM6.67969 50.4919H29.8828V76.5076H6.67969V50.4919ZM87.8906 80.7263H2.10938V78.6169H87.8906V80.7263Z"
                      fill="#1C2647"
                    ></path>
                    <path
                      d="M53.0859 35.0232H48.1641V30.1013H41.8359V35.0232H36.9141V41.3513H41.8359V49.0857H48.1641V41.3513H53.0859V35.0232ZM50.9766 39.242H46.0547V46.9763H43.9453V39.242H39.0234V37.1326H43.9453V32.2107H46.0547V37.1326H50.9766V39.242Z"
                      fill="#1C2647"
                    ></path>
                    <path
                      d="M18.2812 55.4138C14.5981 55.4138 11.6016 58.4104 11.6016 62.0935V71.5857H24.9609V62.0935C24.9609 58.4104 21.9644 55.4138 18.2812 55.4138ZM17.2266 69.4763H13.7109V64.5544H17.2266V69.4763ZM17.2266 62.4451H13.7109V62.0935C13.7109 59.9363 15.2135 58.1249 17.2266 57.6473V62.4451ZM22.8516 69.4763H19.3359V64.5544H22.8516V69.4763ZM22.8516 62.4451H19.3359V57.6473C21.349 58.1249 22.8516 59.9363 22.8516 62.0935V62.4451Z"
                      fill="#1C2647"
                    ></path>
                    <path
                      d="M78.3984 62.0935C78.3984 58.4104 75.4019 55.4138 71.7188 55.4138C68.0356 55.4138 65.0391 58.4104 65.0391 62.0935V71.5857H78.3984V62.0935ZM70.6641 69.4763H67.1484V64.5544H70.6641V69.4763ZM70.6641 62.4451H67.1484V62.0935C67.1484 59.9363 68.651 58.1249 70.6641 57.6473V62.4451ZM76.2891 69.4763H72.7734V64.5544H76.2891V69.4763ZM76.2891 62.4451H72.7734V57.6473C74.7865 58.1249 76.2891 59.9363 76.2891 62.0935V62.4451Z"
                      fill="#1C2647"
                    ></path>
                  </svg>
                </div>
                <h4 className="box-light-title">
                  <a style={{ textDecoration: "none", fontSize: 18 }}>
                    Children Ministry
                  </a>
                </h4>
                <p>
                  Berachah Church conducts Children Club on every Saturday from
                  5:00 PM to 6:00 PM and Sunday school during Church Worship
                  from 8:30 AM to 11:30 AM.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-md-6 cd-lg-4">
              <article className="box-creative">
                <div className="box-creative-icon">
                  <svg
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M32.429 65.0881L20.1243 52.7834H9.49219V49.9709H0V74.5803H9.49219V71.7678H13.6257L22.0632 80.2053H43.2422V69.6584H27.8587L32.429 65.0881ZM7.38281 72.4709H2.10938V52.0803H7.38281V72.4709ZM41.1328 71.7678V78.0959H22.9368L14.4993 69.6584H9.49219V54.8928H19.2507L29.446 65.0881L25.3125 69.2216L19.0269 62.9362L17.5354 64.4275L24.8755 71.7678H41.1328Z"
                        fill="#1C2647"
                      ></path>
                      <path
                        d="M80.5078 49.9709V52.7834H69.8757L57.571 65.0881L62.1413 69.6584H46.7578V80.2053H67.9368L76.3743 71.7678H80.5078V74.5803H90V49.9709H80.5078ZM80.5078 69.6584H75.5007L67.0632 78.0959H48.8672V71.7678H65.1243L72.4644 64.4275L70.9729 62.9362L64.6875 69.2216L60.5542 65.0881L70.7495 54.8928H80.5078V69.6584ZM87.8906 72.4709H82.6172V52.0803H87.8906V72.4709Z"
                        fill="#1C2647"
                      ></path>
                      <path
                        d="M39.375 66.1427C41.1418 66.1427 42.6345 64.9514 43.0947 63.3302H54.4922V51.9329C56.1134 51.4725 57.3047 49.9798 57.3047 48.213V39.1636L47.4609 33.5386V29.4961C50.6447 28.9888 53.0859 26.2248 53.0859 22.9005C53.0859 19.5615 47.8689 11.9122 47.2739 11.0511L46.4062 9.79492L45.5386 11.0511C44.9437 11.9124 39.7266 19.5615 39.7266 22.9005C39.7266 26.2247 42.1678 28.9888 45.3516 29.4961V32.3331L35.5078 26.7081V62.2755C35.5078 64.4079 37.2426 66.1427 39.375 66.1427ZM42.5398 25.3329C42.0947 24.6279 41.8359 23.7941 41.8359 22.9005C41.8359 21.14 44.3646 16.6794 46.4062 13.5454C48.4479 16.6794 50.9766 21.14 50.9766 22.9005C50.9766 23.794 50.7178 24.6279 50.2727 25.3329C50.2573 23.2137 48.5292 21.4942 46.4062 21.4942C44.2835 21.4942 42.5552 23.2137 42.5398 25.3329ZM44.6484 25.3614C44.6484 24.3921 45.437 23.6036 46.4062 23.6036C47.3755 23.6036 48.1641 24.3921 48.1641 25.3614C48.1641 26.3307 47.3755 27.1192 46.4062 27.1192C45.437 27.1192 44.6484 26.3307 44.6484 25.3614ZM37.6172 30.3429L55.1953 40.3875V48.213C55.1953 49.1822 54.4068 49.9708 53.4375 49.9708C52.4682 49.9708 51.6797 49.1822 51.6797 48.213V41.1817H49.5703V48.213C49.5703 49.9798 50.7616 51.4725 52.3828 51.9329V61.2208H43.2422V53.838H41.1328V62.2755C41.1328 63.2447 40.3443 64.0333 39.375 64.0333C38.4057 64.0333 37.6172 63.2447 37.6172 62.2755V30.3429Z"
                        fill="#1C2647"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="90" height="90" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h4 className="box-light-title">
                  <a style={{ textDecoration: "none", fontSize: 18 }}>
                    Youth Ministry
                  </a>
                </h4>
                <p>
                  Berachah Church conducts Youth Service on every Sunday from
                  5:30 PM to 7:30 PM.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-md-6 cd-lg-4">
              <article className="box-creative">
                <div className="box-creative-icon">
                  <svg
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M85.4297 72.1766V23.6609H88.2422V15.9266H69.2578V23.6609H72.0703V32.8016H68.5547V27.1766H62.1942L45 15.7139L27.8058 27.1767H21.4453V32.8017H17.9297V23.6611H20.7422V15.9267H1.75781V23.6611H4.57031V72.1767H0V74.2861H90V72.1767H85.4297V72.1766ZM3.86719 21.5516V18.0359H18.6328V21.5516H3.86719ZM15.8203 72.1766H6.67969V29.2859H15.8203V72.1766ZM15.8203 27.1766H6.67969V23.6609H15.8203V27.1766ZM21.4453 72.1766H17.9297V63.0359H21.4453V72.1766ZM21.4453 60.9266H17.9297V34.9109H21.4453V60.9266ZM34.8047 25.0457L38.3203 22.7019V38.4266H34.8047V25.0457ZM29.1797 28.7957L32.6953 26.452V38.4266H29.1797V28.7957ZM23.5547 29.2859H27.0703V38.4266H23.5547V29.2859ZM27.0703 72.1766H23.5547V65.8484H27.0703V72.1766ZM27.0703 63.7391H23.5547V46.1609H27.0703V63.7391ZM32.6953 72.1766H29.1797V65.8484H32.6953V72.1766ZM32.6953 63.7391H29.1797V46.1609H32.6953V63.7391ZM38.3203 72.1766H34.8047V65.8484H38.3203V72.1766ZM38.3203 63.7391H34.8047V46.1609H38.3203V63.7391ZM43.9453 72.1766H40.4297V65.8484H43.9453V72.1766ZM43.9453 63.7391H40.4297V46.1609H43.9453V63.7391ZM43.9453 44.0516H23.5547V40.5359H43.9453V44.0516ZM43.9453 38.4266H40.4297V21.2958L43.9453 18.9521V38.4266ZM57.3047 26.452L60.8203 28.7957V38.4266H57.3047V26.452ZM51.6797 22.7021L55.1953 25.0459V38.4267H51.6797V22.7021ZM46.0547 18.9519L49.5703 21.2956V38.4266H46.0547V18.9519ZM49.5703 72.1766H46.0547V65.8484H49.5703V72.1766ZM49.5703 63.7391H46.0547V46.1609H49.5703V63.7391ZM55.1953 72.1766H51.6797V65.8484H55.1953V72.1766ZM55.1953 63.7391H51.6797V46.1609H55.1953V63.7391ZM60.8203 72.1766H57.3047V65.8484H60.8203V72.1766ZM60.8203 63.7391H57.3047V46.1609H60.8203V63.7391ZM66.4453 72.1766H62.9297V65.8484H66.4453V72.1766ZM66.4453 63.7391H62.9297V46.1609H66.4453V63.7391ZM66.4453 44.0516H46.0547V40.5359H66.4453V44.0516ZM66.4453 38.4266H62.9297V29.2859H66.4453V38.4266ZM72.0703 72.1766H68.5547V63.0359H72.0703V72.1766ZM72.0703 60.9266H68.5547V34.9109H72.0703V60.9266ZM71.3672 21.5516V18.0359H86.1328V21.5516H71.3672ZM83.3203 72.1766H74.1797V29.2859H83.3203V72.1766ZM83.3203 27.1766H74.1797V23.6609H83.3203V27.1766Z"
                      fill="#1C2647"
                    ></path>
                  </svg>
                </div>
                <h4 className="box-light-title">
                  <a style={{ textDecoration: "none", fontSize: 18 }}>
                    Women's Ministry
                  </a>
                </h4>
                <p>
                  Women’s fellowship (cottage prayers) on every Thursday from
                  12:00 PM to 2:00 PM.
                </p>
              </article>
            </div>
            <div className="col-sm-6 col-md-6 cd-lg-4">
              <article className="box-creative">
                <div className="box-creative-icon">
                  <svg
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip1)">
                      <path
                        d="M39.0234 57.2194L34.8047 53.0007V42.5391H29.1797V35.5078H23.5547V32.6953H15.8203V36.9141H10.1953V53.0009L5.53973 57.6562L16.4382 68.5547H20.0391V72.0703H17.2266V90H41.8359V72.0703H39.0234V57.2194ZM29.1797 44.6484H32.6953V52.3828H29.1797V44.6484ZM23.5547 37.6172H27.0703V52.3828H23.5547V37.6172ZM17.9297 34.8047H21.4453V52.3828H17.9297V34.8047ZM17.3118 66.4453L8.52274 57.6562L11.25 54.929L16.1293 59.8082L17.6207 58.3168L12.3047 53.0007V39.0234H15.8203V54.4922H33.3132L36.9141 58.0931V72.0703H22.1484V68.5547H26.7187V66.4453H17.3118ZM39.7266 87.8906H19.3359V79.8047H39.7266V87.8906ZM39.7266 74.1797V77.6953H19.3359V74.1797H39.7266Z"
                        fill="#000001"
                      ></path>
                      <path
                        d="M73.5618 68.5547L84.4603 57.6562L79.8047 53.0009V36.9141H74.1797V32.6953H66.4453V35.5078H60.8203V42.5391H55.1953V53.0007L50.9766 57.2194V72.0703H48.1641V90H72.7734V72.0703H69.9609V68.5547H73.5618ZM68.5547 34.8047H72.0703V52.3828H68.5547V34.8047ZM62.9297 37.6172H66.4453V52.3828H62.9297V37.6172ZM57.3047 44.6484H60.8203V52.3828H57.3047V44.6484ZM70.6641 87.8906H50.2734V79.8047H70.6641V87.8906ZM70.6641 74.1797V77.6953H50.2734V74.1797H70.6641ZM67.8516 68.5547V72.0703H53.0859V58.0931L56.6868 54.4922H74.1797V39.0234H77.6953V53.0007L72.3793 58.3168L73.8707 59.8082L78.75 54.929L81.4772 57.6562L72.6882 66.4453H63.2812V68.5547H67.8516Z"
                        fill="#000001"
                      ></path>
                      <mask id="path-3-inside-1" fill="white">
                        <ellipse
                          cx="39.5949"
                          cy="19.951"
                          rx="9.38002"
                          ry="9.38002"
                          transform="rotate(55.3646 39.5949 19.951)"
                        ></ellipse>
                      </mask>
                      <path
                        d="M35.264 13.6814C38.7266 11.2895 43.4726 12.1576 45.8645 15.6202L17.8898 34.9441C26.1702 46.9315 42.6006 49.9366 54.588 41.6561L35.264 13.6814ZM45.8645 15.6202C48.2563 19.0828 47.3883 23.8288 43.9257 26.2206L24.6017 -1.75411C12.6143 6.52637 9.60928 22.9567 17.8898 34.9441L45.8645 15.6202ZM43.9257 26.2206C40.4631 28.6125 35.7171 27.7444 33.3252 24.2818L61.2999 4.95786C53.0195 -7.02953 36.5891 -10.0346 24.6017 -1.75411L43.9257 26.2206ZM33.3252 24.2818C30.9334 20.8192 31.8014 16.0732 35.264 13.6814L54.588 41.6561C66.5754 33.3756 69.5804 16.9453 61.2999 4.95786L33.3252 24.2818Z"
                        fill="#000001"
                        mask="url(#path-3-inside-1)"
                      ></path>
                      <mask id="path-5-inside-2" fill="white">
                        <ellipse
                          cx="51.2678"
                          cy="19.5501"
                          rx="9.38002"
                          ry="9.38002"
                          transform="rotate(55.3646 51.2678 19.5501)"
                        ></ellipse>
                      </mask>
                      <path
                        d="M46.9369 13.2805C50.3996 10.8886 55.1455 11.7567 57.5374 15.2193L29.5627 34.5433C37.8431 46.5306 54.2735 49.5357 66.2609 41.2552L46.9369 13.2805ZM57.5374 15.2193C59.9292 18.6819 59.0612 23.4279 55.5986 25.8197L36.2746 -2.15499C24.2872 6.12549 21.2822 22.5559 29.5627 34.5433L57.5374 15.2193ZM55.5986 25.8197C52.136 28.2116 47.39 27.3436 44.9982 23.881L72.9729 4.55698C64.6924 -7.43041 48.262 -10.4355 36.2746 -2.15499L55.5986 25.8197ZM44.9982 23.881C42.6063 20.4183 43.4743 15.6724 46.9369 13.2805L66.2609 41.2552C78.2483 32.9747 81.2533 16.5444 72.9729 4.55698L44.9982 23.881Z"
                        fill="#000001"
                        mask="url(#path-5-inside-2)"
                      ></path>
                      <path
                        d="M38.2202 4.43259L36.7547 4.63225C36.9933 6.38316 35.763 8.00156 34.0121 8.2401L34.2117 9.70561C35.9626 9.46707 37.581 10.6974 37.8196 12.4483L39.2851 12.2486C39.0465 10.4977 40.2768 8.87931 42.0278 8.64076L41.8281 7.17526C40.0772 7.4138 38.4588 6.1835 38.2202 4.43259ZM39.43 8.24833C38.9138 8.68809 38.4978 9.2355 38.212 9.85049C37.7723 9.33434 37.2249 8.91832 36.6099 8.63254C37.126 8.19277 37.542 7.64537 37.8278 7.03038C38.2676 7.54652 38.815 7.96267 39.43 8.24833Z"
                        fill="#000001"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip1">
                        <rect width="90" height="90" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h4 className="box-light-title">
                  <a style={{ textDecoration: "none", fontSize: 18 }}>
                    Mens Ministry:
                  </a>
                </h4>
                <p>
                  Berachah Church conducts Men’s fasting prayers on every Friday
                  from 7:00 PM to 9:00 PM.
                </p>
              </article>
            </div>
          </div>
          <div
            className="button-outer"
            style={{
              paddingBottom: 16,
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => handleTabChange("services")}
          >
            <a
              className="button button-lg button-primary button-winona"
              style={{ textDecoration: "none" }}
            >
              <div className="content-original">Learn more</div>
            </a>
          </div>
        </div>
      </section>

      {/* Scratch gallery */}

      <section className="section section-lg bg-gray-100 text-center">
        <h3>Our Gallery</h3>
        <div
          className="isotope offset-top-6 isotope--loaded"
          style={{ position: "relative" }}
        >
          <div className="row row-30">
            {_.map(galleryPics, (pic) => {
              return (
                <div className="col-12 col-sm-6 col-lg-4 isotope-item">
                  <a>
                    <img src={pic} alt="" height={256} width={300} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="button-outer" style={{ paddingTop: 24 }}>
          <a
            className="button button-lg button-primary button-winona"
            style={{ textDecoration: "none" }}
            onClick={() => handleTabChange("gallery")}
          >
            <div className="content-original">View More</div>
          </a>
        </div>
      </section>

      {/* section for prayer request one */}
      <section
        className="section section-sm bg-gray-800 text-center context-dark"
        style={{ marginBottom: 40 }}
      >
        <div className="common-container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-12">
              <div className="box-cta-thin">
                <h4 style={{ color: "white" }}>
                  Experience God's unconditional grace and forgiveness.
                </h4>
                <div className="button-outer">
                  <a
                    className="btn-md button button-primary button-winona"
                    style={{ textDecoration: "none" }}
                  >
                    <a
                      className="content-original"
                      href="https://api.whatsapp.com/send?phone=919100685437"
                      target="_blank"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Chat on whatsapp
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      {/* <section className='section section-lg text-center bg-gray-100'>
        <div className='common-container'>
          <h3>Testimonials</h3>
          <div
            className='owl-carousel owl-loaded'
            data-items='1'
            data-md-items='2'
            data-dots='true'
            data-nav='false'
            data-margin='30'
            data-stage-padding='0'
            data-autoplay='false'
            data-loop='false'
            data-mouse-drag='false'
          >
            <div className='owl-stage-outer' style={{ padding: '0px 20px' }}>
              <div className='owl-stage'>
                {_.map(testimonials, (testimonial) => {
                  return (
                    <div className='owl-item active col-12 col-lg-6'>
                      <blockquote className='quote-modern quote-modern-big'>
                        <svg
                          className='quote-modern-mark'
                          width='39'
                          height='40'
                          viewBox='0 0 39 40'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M0 25.2632C0 17.6608 0.924444 11.8713 2.77333 7.89474C4.62222 3.91813 7.91556 1.28655 12.6533 0L15.6 4.38597C12.48 5.78947 10.3422 7.83626 9.18667 10.5263C8.14667 13.0994 7.62667 17.1345 7.62667 22.6316H14.7333V40H0V25.2632ZM23.4 25.2632C23.4 17.6608 24.3244 11.8713 26.1733 7.89474C28.0222 3.91813 31.3156 1.28655 36.0533 0L39 4.38597C35.88 5.78947 33.7422 7.83626 32.5867 10.5263C31.5467 13.0994 31.0267 17.1345 31.0267 22.6316H38.1333V40H23.4V25.2632Z'></path>
                        </svg>
                        <div className='quote-modern-text'>
                          <p>{testimonial.heading}</p>
                        </div>
                        <div className='quote-modern-meta'>
                          <div className='quote-modern-avatar'>
                            <img
                              src={testimonial.image}
                              alt=''
                              width='48'
                              height='48'
                            />
                          </div>
                          <div className='quote-modern-info'>
                            <cite className='quote-modern-cite'>
                              {testimonial.name}
                            </cite>
                            <p className='quote-modern-caption'>
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='owl-nav disabled'>
              <button role='presentation' className='owl-prev'></button>
              <button role='presentation' className='owl-next'></button>
            </div>
            <div className='owl-dots'>
      <button className='owl-dot active'>
        <span></span>
      </button>
      <button className='owl-dot'>
        <span></span>
      </button>
      <button className='owl-dot'>
        <span></span>
      </button>
    </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HomePage;
