/* eslint-disable react/no-unescaped-entities */

import s from "./index.module.css";
import DECOR from "../../assets/Clip.png";
import MAIN from "../../assets/Container.png";
import Rectangle from "../../assets/image.png";
import Events from "../../assets/image1.png";
import Photo1 from "../../assets/portfolio image1.png";
import Photo2 from "../../assets/portfolio image2.png";
import Photo3 from "../../assets/portfolio image3.png";
import Stars from "../../assets/Stars.png";
import Sub from "../../assets/Sub Container.png";
import imag from "../../assets/imag.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const Home = () => {
  return (
    <main>
      <div className={s.main}>
        <div>
          <span className={s.desc}>Stunning Photography by</span>
          <h2 className={s.title}>Damien Braun</h2>
        </div>
        <img className={s.decor_img} src={DECOR} />
        <div>
          <h3 className={s.text}>
            Let's
            <button className={s.button}>
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.3125 0.187501L20.375 0.1875C20.6236 0.1875 20.8621 0.286272 21.0379 0.462087C21.2137 0.637903 21.3125 0.87636 21.3125 1.125V15.1875C21.3125 15.7053 20.8928 16.125 20.375 16.125C19.8572 16.125 19.4375 15.7053 19.4375 15.1875V3.38833L2.28791 20.5379C1.9218 20.904 1.3282 20.904 0.962087 20.5379C0.595971 20.1718 0.595971 19.5782 0.962087 19.2121L18.1117 2.0625L6.3125 2.0625C5.79473 2.0625 5.375 1.64277 5.375 1.125C5.375 0.607234 5.79473 0.187501 6.3125 0.187501Z"
                  fill="white"
                />
              </svg>
            </button>
          </h3>

          <h3 className={s.text}>Work Together</h3>
        </div>
      </div>
      <img className={s.photo} src={MAIN} />
      <img className={s.photo_lite} src={imag} />

      <section className={s.about}>
        <span className={s.span}>ABOUT</span>
        <div className={s.i_am}>
          <span className={s.i_am_span}>I AM DAMIEN</span>
          <button className={s.i_am_buttom}>Know More &rarr; </button>
        </div>
        <div className={s.about_photo}>
          <img className={s.about_img} src={Rectangle} />
          <div className={s.about_cart}>
            <div className={s.contact_information}>
              <h2 className={s.about_title}>
                <svg
                  width="39"
                  height="40"
                  viewBox="0 0 39 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z"
                    fill="#AFA1F7"
                  />
                </svg>
                Introduction
              </h2>
              <p className={s.about_text}>
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>
            <h2 className={s.about_title}>
              <svg
                width="39"
                height="40"
                viewBox="0 0 39 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z"
                  fill="#AFA1F7"
                />
              </svg>
              Contact Information
            </h2>
            <div className={s.addres}>
              <address className={s.about_addres}>
                Email
                <br />
                <a className={s.addres_num} href="">
                  damienbraun@gmail.com
                </a>
              </address>
              <address className={s.about_addres}>
                Phone Number <br />
                <a className={s.addres_num} href="">
                  +00 000000000
                </a>
              </address>
            </div>
            <div className={s.button_container}>
              <div className={s.button_card}>
                <div className={s.button_icon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={s.button_icon}>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.2918 17.125C13.8371 17.125 17.9652 10.8723 17.9652 5.45155C17.9652 5.27577 17.9613 5.09608 17.9535 4.9203C18.7566 4.33955 19.4496 3.62021 20 2.79608C19.2521 3.12883 18.458 3.34615 17.6449 3.44061C18.5011 2.92742 19.1421 2.12123 19.4492 1.17147C18.6438 1.6488 17.763 1.98551 16.8445 2.16718C16.2257 1.50963 15.4075 1.07426 14.5164 0.928376C13.6253 0.782488 12.711 0.934209 11.9148 1.36008C11.1186 1.78595 10.4848 2.46225 10.1115 3.28443C9.73825 4.1066 9.64619 5.02885 9.84961 5.90858C8.21874 5.82674 6.62328 5.40309 5.16665 4.66508C3.71002 3.92708 2.42474 2.8912 1.39414 1.6246C0.870333 2.5277 0.710047 3.59637 0.945859 4.61341C1.18167 5.63045 1.79589 6.51954 2.66367 7.09999C2.01219 7.0793 1.37498 6.9039 0.804688 6.58827V6.63905C0.804104 7.58679 1.13175 8.50549 1.73192 9.23897C2.3321 9.97246 3.16777 10.4755 4.09687 10.6625C3.49338 10.8276 2.85999 10.8517 2.2457 10.7328C2.50788 11.5479 3.01798 12.2607 3.70481 12.7719C4.39164 13.2831 5.22093 13.5672 6.07695 13.5844C4.62369 14.7259 2.82848 15.3451 0.980469 15.3422C0.652739 15.3417 0.325333 15.3216 0 15.282C1.87738 16.4865 4.06128 17.1262 6.2918 17.125Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={s.button_icon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <button className={s.button_contact}>Let’s Work</button>
              <button className={s.button_contact}>Download CV</button>
            </div>
          </div>
        </div>
      </section>
      <section className={s.services}>
        <span className={s.span}>SERVICES</span>
        <div className={s.i_am}>
          <span className={s.i_am_span}>My Photography Services</span>
          <div className={s.services_container_button}>
            <div className={s.button_container_services}>
              <div className={s.button_icon_services}>
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.25 1.5L1.75 10L10.25 18.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={s.button_icon_services}>
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.75 1.5L10.25 10L1.75 18.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <button className={s.i_am_buttom_services}>
              View All Services &rarr;{" "}
            </button>
          </div>
        </div>
      </section>
      <section className={s.events}>
        <div className={s.events_left}>
          <h4 className={s.events_name}>
            EVENTS
            <button className={s.button}>
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.3125 0.187501L20.375 0.1875C20.6236 0.1875 20.8621 0.286272 21.0379 0.462087C21.2137 0.637903 21.3125 0.87636 21.3125 1.125V15.1875C21.3125 15.7053 20.8928 16.125 20.375 16.125C19.8572 16.125 19.4375 15.7053 19.4375 15.1875V3.38833L2.28791 20.5379C1.9218 20.904 1.3282 20.904 0.962087 20.5379C0.595971 20.1718 0.595971 19.5782 0.962087 19.2121L18.1117 2.0625L6.3125 2.0625C5.79473 2.0625 5.375 1.64277 5.375 1.125C5.375 0.607234 5.79473 0.187501 6.3125 0.187501Z"
                  fill="white"
                />
              </svg>
            </button>
          </h4>
          <p className={s.paraprafh_events}>
            Our event photography service is dedicated to capturing the magic of
            your special occasions. Whether it's a wedding, corporate event, or
            milestone celebration, we're there to document every heartfelt
            moment. We blend into the background, ensuring natural and candid
            shots that reflect the emotions of the day.
          </p>
          <h4 className={s.service_heading}>Service Highlights</h4>

          <div className={s.services_text}>
            <h5 className={s.service_text}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.7882 20C38.5538 20 39.2954 19.8972 40 19.7047C39.4398 19.5865 38.859 19.5244 38.2638 19.5244H28.371C26.737 19.5244 25.2122 19.0562 23.9238 18.2467C24.2054 16.5979 24.9826 15.0173 26.2554 13.7446L32.5782 7.42188C33.1196 6.88048 33.5712 6.28338 33.9334 5.64904C33.4536 5.96158 32.999 6.32832 32.5782 6.74926L25.5828 13.7446C24.4274 14.9 23.0182 15.647 21.5348 15.9857C20.568 14.6207 20 12.9534 20 11.1535V2.21186C20 1.44621 19.8972 0.70458 19.7047 0C19.5865 0.560142 19.5244 1.14093 19.5244 1.73624V11.6291C19.5244 13.2631 19.0562 14.7878 18.2467 16.0762C16.5979 15.7945 15.0173 15.0173 13.7446 13.7446L7.42188 7.42188C6.88048 6.88048 6.28338 6.42874 5.64904 6.06668C5.96158 6.5463 6.32832 7.00094 6.74926 7.42188L13.7446 14.4172C14.9 15.5726 15.647 16.9818 15.9857 18.4653C14.6207 19.4319 12.9534 20 11.1535 20H2.21186C1.44621 20 0.704578 20.1028 0 20.2954C0.560146 20.4134 1.14094 20.4756 1.73624 20.4756H11.6291C13.2631 20.4756 14.7878 20.9438 16.0762 21.7534C15.7945 23.402 15.0173 24.9826 13.7446 26.2554L7.42188 32.5782C6.8805 33.1196 6.42876 33.7166 6.0667 34.351C6.54632 34.0384 7.00094 33.6716 7.42188 33.2508L14.4172 26.2554C15.5726 25.1 16.9818 24.353 18.4653 24.0142C19.4319 25.3794 20 27.0466 20 28.8466V37.7882C20 38.5538 20.1028 39.2954 20.2954 40C20.4134 39.4398 20.4756 38.859 20.4756 38.2638V28.3708C20.4756 26.7368 20.9438 25.2122 21.7534 23.9238C23.402 24.2054 24.9826 24.9826 26.2554 26.2554L32.5782 32.5782C33.1196 33.1196 33.7166 33.5712 34.351 33.9334C34.0384 33.4536 33.6716 32.999 33.2508 32.5782L26.2554 25.5828C25.1 24.4274 24.353 23.0182 24.0144 21.5348C25.3794 20.568 27.0466 20 28.8466 20H37.7882Z"
                  fill="#474752"
                />
              </svg>
              Coverage for weddings, parties, corporate functions, and more.
            </h5>
            <h5 className={s.service_text}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.7882 20C38.5538 20 39.2954 19.8972 40 19.7047C39.4398 19.5865 38.859 19.5244 38.2638 19.5244H28.371C26.737 19.5244 25.2122 19.0562 23.9238 18.2467C24.2054 16.5979 24.9826 15.0173 26.2554 13.7446L32.5782 7.42188C33.1196 6.88048 33.5712 6.28338 33.9334 5.64904C33.4536 5.96158 32.999 6.32832 32.5782 6.74926L25.5828 13.7446C24.4274 14.9 23.0182 15.647 21.5348 15.9857C20.568 14.6207 20 12.9534 20 11.1535V2.21186C20 1.44621 19.8972 0.70458 19.7047 0C19.5865 0.560142 19.5244 1.14093 19.5244 1.73624V11.6291C19.5244 13.2631 19.0562 14.7878 18.2467 16.0762C16.5979 15.7945 15.0173 15.0173 13.7446 13.7446L7.42188 7.42188C6.88048 6.88048 6.28338 6.42874 5.64904 6.06668C5.96158 6.5463 6.32832 7.00094 6.74926 7.42188L13.7446 14.4172C14.9 15.5726 15.647 16.9818 15.9857 18.4653C14.6207 19.4319 12.9534 20 11.1535 20H2.21186C1.44621 20 0.704578 20.1028 0 20.2954C0.560146 20.4134 1.14094 20.4756 1.73624 20.4756H11.6291C13.2631 20.4756 14.7878 20.9438 16.0762 21.7534C15.7945 23.402 15.0173 24.9826 13.7446 26.2554L7.42188 32.5782C6.8805 33.1196 6.42876 33.7166 6.0667 34.351C6.54632 34.0384 7.00094 33.6716 7.42188 33.2508L14.4172 26.2554C15.5726 25.1 16.9818 24.353 18.4653 24.0142C19.4319 25.3794 20 27.0466 20 28.8466V37.7882C20 38.5538 20.1028 39.2954 20.2954 40C20.4134 39.4398 20.4756 38.859 20.4756 38.2638V28.3708C20.4756 26.7368 20.9438 25.2122 21.7534 23.9238C23.402 24.2054 24.9826 24.9826 26.2554 26.2554L32.5782 32.5782C33.1196 33.1196 33.7166 33.5712 34.351 33.9334C34.0384 33.4536 33.6716 32.999 33.2508 32.5782L26.2554 25.5828C25.1 24.4274 24.353 23.0182 24.0144 21.5348C25.3794 20.568 27.0466 20 28.8466 20H37.7882Z"
                  fill="#474752"
                />
              </svg>
              Skilled photographers who know how to seize the moment.
            </h5>
            <h5 className={s.service_text}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.7882 20C38.5538 20 39.2954 19.8972 40 19.7047C39.4398 19.5865 38.859 19.5244 38.2638 19.5244H28.371C26.737 19.5244 25.2122 19.0562 23.9238 18.2467C24.2054 16.5979 24.9826 15.0173 26.2554 13.7446L32.5782 7.42188C33.1196 6.88048 33.5712 6.28338 33.9334 5.64904C33.4536 5.96158 32.999 6.32832 32.5782 6.74926L25.5828 13.7446C24.4274 14.9 23.0182 15.647 21.5348 15.9857C20.568 14.6207 20 12.9534 20 11.1535V2.21186C20 1.44621 19.8972 0.70458 19.7047 0C19.5865 0.560142 19.5244 1.14093 19.5244 1.73624V11.6291C19.5244 13.2631 19.0562 14.7878 18.2467 16.0762C16.5979 15.7945 15.0173 15.0173 13.7446 13.7446L7.42188 7.42188C6.88048 6.88048 6.28338 6.42874 5.64904 6.06668C5.96158 6.5463 6.32832 7.00094 6.74926 7.42188L13.7446 14.4172C14.9 15.5726 15.647 16.9818 15.9857 18.4653C14.6207 19.4319 12.9534 20 11.1535 20H2.21186C1.44621 20 0.704578 20.1028 0 20.2954C0.560146 20.4134 1.14094 20.4756 1.73624 20.4756H11.6291C13.2631 20.4756 14.7878 20.9438 16.0762 21.7534C15.7945 23.402 15.0173 24.9826 13.7446 26.2554L7.42188 32.5782C6.8805 33.1196 6.42876 33.7166 6.0667 34.351C6.54632 34.0384 7.00094 33.6716 7.42188 33.2508L14.4172 26.2554C15.5726 25.1 16.9818 24.353 18.4653 24.0142C19.4319 25.3794 20 27.0466 20 28.8466V37.7882C20 38.5538 20.1028 39.2954 20.2954 40C20.4134 39.4398 20.4756 38.859 20.4756 38.2638V28.3708C20.4756 26.7368 20.9438 25.2122 21.7534 23.9238C23.402 24.2054 24.9826 24.9826 26.2554 26.2554L32.5782 32.5782C33.1196 33.1196 33.7166 33.5712 34.351 33.9334C34.0384 33.4536 33.6716 32.999 33.2508 32.5782L26.2554 25.5828C25.1 24.4274 24.353 23.0182 24.0144 21.5348C25.3794 20.568 27.0466 20 28.8466 20H37.7882Z"
                  fill="#474752"
                />
              </svg>
              A mix of candid and posed shots for a comprehensive story.
            </h5>
            <h5 className={s.service_text}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.7882 20C38.5538 20 39.2954 19.8972 40 19.7047C39.4398 19.5865 38.859 19.5244 38.2638 19.5244H28.371C26.737 19.5244 25.2122 19.0562 23.9238 18.2467C24.2054 16.5979 24.9826 15.0173 26.2554 13.7446L32.5782 7.42188C33.1196 6.88048 33.5712 6.28338 33.9334 5.64904C33.4536 5.96158 32.999 6.32832 32.5782 6.74926L25.5828 13.7446C24.4274 14.9 23.0182 15.647 21.5348 15.9857C20.568 14.6207 20 12.9534 20 11.1535V2.21186C20 1.44621 19.8972 0.70458 19.7047 0C19.5865 0.560142 19.5244 1.14093 19.5244 1.73624V11.6291C19.5244 13.2631 19.0562 14.7878 18.2467 16.0762C16.5979 15.7945 15.0173 15.0173 13.7446 13.7446L7.42188 7.42188C6.88048 6.88048 6.28338 6.42874 5.64904 6.06668C5.96158 6.5463 6.32832 7.00094 6.74926 7.42188L13.7446 14.4172C14.9 15.5726 15.647 16.9818 15.9857 18.4653C14.6207 19.4319 12.9534 20 11.1535 20H2.21186C1.44621 20 0.704578 20.1028 0 20.2954C0.560146 20.4134 1.14094 20.4756 1.73624 20.4756H11.6291C13.2631 20.4756 14.7878 20.9438 16.0762 21.7534C15.7945 23.402 15.0173 24.9826 13.7446 26.2554L7.42188 32.5782C6.8805 33.1196 6.42876 33.7166 6.0667 34.351C6.54632 34.0384 7.00094 33.6716 7.42188 33.2508L14.4172 26.2554C15.5726 25.1 16.9818 24.353 18.4653 24.0142C19.4319 25.3794 20 27.0466 20 28.8466V37.7882C20 38.5538 20.1028 39.2954 20.2954 40C20.4134 39.4398 20.4756 38.859 20.4756 38.2638V28.3708C20.4756 26.7368 20.9438 25.2122 21.7534 23.9238C23.402 24.2054 24.9826 24.9826 26.2554 26.2554L32.5782 32.5782C33.1196 33.1196 33.7166 33.5712 34.351 33.9334C34.0384 33.4536 33.6716 32.999 33.2508 32.5782L26.2554 25.5828C25.1 24.4274 24.353 23.0182 24.0144 21.5348C25.3794 20.568 27.0466 20 28.8466 20H37.7882Z"
                  fill="#474752"
                />
              </svg>
              Quick turnaround for you to relive the day's highlights.
            </h5>
          </div>
          <div className={s.mobile_button}>
            <div className={s.button_container_services_mobile}>
              <button className={s.button_icon_services_mobile}>
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.25 1.5L1.75 10L10.25 18.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className={s.button_icon_services_mobile}>
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.75 1.5L10.25 10L1.75 18.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={s.events_right}>
          <img className={s.events_img} src={Events} />
        </div>
      </section>

      <section className={s.portfolio}>
        <span className={s.span}>PORTFOLIO</span>
        <div className={s.i_am}>
          <span className={s.i_am_span}>Explore My photography work.</span>
          <div className={s.portfolio_button_container}>
            <div className={s.button_container_services}>
              <div className={s.button_icon_services}>
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.25 1.5L1.75 10L10.25 18.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={s.button_icon_services}>
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.75 1.5L10.25 10L1.75 18.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <button className={s.portfolio_button_menu}>
              View All Works &rarr;{" "}
            </button>
          </div>
        </div>

        <div className={s.portfolio_photos_container}>
          <Swiper
            pagination={{ clickable: true }}
            breakpoints={{
              10: {
                slidesPerView: 1,
              },
              1000: {
                slidesPerView: 2,
              },
              1500: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={40}
            navigation={{
              nextEl: ".swiper_button_right",
              prevEl: ".swiper_button_left",
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper">
            <SwiperSlide className={s.portfolio_photo_container}>
              <img className={s.portfolio_photo} src={Photo1} />
              <div className={s.portfolio_text_container}>
                <h4 className={s.portfolio_text}>Faces of Resilience</h4>

                <button className={s.portfolio_button}>
                  View Project
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.25 0.75L16.5 0.75C16.6989 0.75 16.8897 0.829018 17.0303 0.96967C17.171 1.11032 17.25 1.30109 17.25 1.5V12.75C17.25 13.1642 16.9142 13.5 16.5 13.5C16.0858 13.5 15.75 13.1642 15.75 12.75V3.31066L2.03033 17.0303C1.73744 17.3232 1.26256 17.3232 0.96967 17.0303C0.676777 16.7374 0.676777 16.2626 0.96967 15.9697L14.6893 2.25L5.25 2.25C4.83579 2.25 4.5 1.91421 4.5 1.5C4.5 1.08579 4.83579 0.75 5.25 0.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <h5 className={s.portfolio_data}>March 2022</h5>
            </SwiperSlide>
            <SwiperSlide className={s.portfolio_photo_two}>
              <img className={s.portfolio_photo} src={Photo2} />
              <div className={s.portfolio_text_container}>
                <h4 className={s.portfolio_text}>A Wedding Tale</h4>

                <button className={s.portfolio_button}>
                  View Project
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.25 0.75L16.5 0.75C16.6989 0.75 16.8897 0.829018 17.0303 0.96967C17.171 1.11032 17.25 1.30109 17.25 1.5V12.75C17.25 13.1642 16.9142 13.5 16.5 13.5C16.0858 13.5 15.75 13.1642 15.75 12.75V3.31066L2.03033 17.0303C1.73744 17.3232 1.26256 17.3232 0.96967 17.0303C0.676777 16.7374 0.676777 16.2626 0.96967 15.9697L14.6893 2.25L5.25 2.25C4.83579 2.25 4.5 1.91421 4.5 1.5C4.5 1.08579 4.83579 0.75 5.25 0.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <h5 className={s.portfolio_data}>January 2020</h5>
            </SwiperSlide>
            <SwiperSlide className={s.portfolio_photo_three}>
              <img className={s.portfolio_photo} src={Photo3} />
              <div className={s.portfolio_text_container}>
                <h4 className={s.portfolio_text}>Product Elegance</h4>

                <button className={s.portfolio_button}>
                  View Project
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.25 0.75L16.5 0.75C16.6989 0.75 16.8897 0.829018 17.0303 0.96967C17.171 1.11032 17.25 1.30109 17.25 1.5V12.75C17.25 13.1642 16.9142 13.5 16.5 13.5C16.0858 13.5 15.75 13.1642 15.75 12.75V3.31066L2.03033 17.0303C1.73744 17.3232 1.26256 17.3232 0.96967 17.0303C0.676777 16.7374 0.676777 16.2626 0.96967 15.9697L14.6893 2.25L5.25 2.25C4.83579 2.25 4.5 1.91421 4.5 1.5C4.5 1.08579 4.83579 0.75 5.25 0.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <h5 className={s.portfolio_data}>January 2020</h5>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={s.mobile_button}>
          <div className={s.button_container_services_mobile}>
            <button className="swiper_button_left">
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.25 1.5L1.75 10L10.25 18.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="swiper_button_right">
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.75 1.5L10.25 10L1.75 18.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className={s.Faq}>
        <span className={s.span}>FAQ’s</span>
        <div className={s.i_am_span}>Frequently Asked Questions</div>
        <div className={s.Faq_container}>
          <div className={s.Faq_colum}>
            <div className={s.Faq_text_container}>
              <div className={s.Faq_heading_button_container}>
                <h4 className={s.Faq_heading}>
                  What type of photography do you specialize in?
                </h4>

                <button className={s.faq_button}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5 15L12.5 9L6.5 15"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
              <h5 className={s.Faq_text}>
                I specialize in [Portrait, Landscape, Event, etc.] photography,
                capturing moments that tell unique stories.
              </h5>
            </div>
            <div className={s.Faq_text_container}>
              <div className={s.Faq_heading_button_container}>
                <h4 className={s.Faq_heading}>
                  How can I book a photography session with you?
                </h4>

                <button className={s.faq_button}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5 15L12.5 9L6.5 15"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={s.Faq_text_container}>
              <div className={s.Faq_heading_button_container}>
                <h4 className={s.Faq_heading}>
                  What equipment do you use for your photography?
                </h4>

                <button className={s.faq_button}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5 15L12.5 9L6.5 15"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={s.Faq_text_container}>
              <div className={s.Faq_heading_button_container}>
                <h4 className={s.Faq_heading}>
                  Can I request a specific location for a{" "}
                </h4>

                <button className={s.faq_button}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5 15L12.5 9L6.5 15"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={s.Faq_colum_right}>
            <div className={s.Faq_text_container_right}>
              <div className={s.Faq_heading_button_container}>
                <h4 className={s.Faq_heading}>
                  What is your editing process like?
                </h4>

                <button className={s.faq_button}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5 15L12.5 9L6.5 15"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={s.Faq_text_container_right}>
              <div className={s.Faq_heading_button_container}>
                <h4 className={s.Faq_heading}>
                  Are digital files included in your photography packages?
                </h4>

                <button className={s.faq_button}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5 15L12.5 9L6.5 15"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={s.Faq_text_container_right}>
              <div className={s.Faq_heading_button_container}>
                <h4 className={s.Faq_heading}>
                  Do you offer prints of your photographs?
                </h4>

                <button className={s.faq_button}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5 15L12.5 9L6.5 15"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
              <h5 className={s.Faq_text}>
                Yes, prints are available for purchase. Explore the 'Prints'
                section for more details on sizes and pricing.
              </h5>
            </div>
            <div className={s.Faq_text_container_right}>
              <div className={s.Faq_heading_button_container}>
                <h4 className={s.Faq_heading}>
                  How long does it take to receive the edited photos after a
                  session?{" "}
                </h4>

                <button className={s.faq_button}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5 15L12.5 9L6.5 15"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.Testimonials}>
        <span className={s.span}>Testimonials</span>
        <div className={s.i_am_span}>What My Clients Say</div>
        <div className={s.i_am}>
          <span className={s.Testimonials_span}>Total Reviews</span>
          <div className={s.Testimonials_button}>
            <div className={s.button_container_services}>
              <div className={s.button_icon_services}>
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.25 1.5L1.75 10L10.25 18.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={s.button_icon_services}>
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.75 1.5L10.25 10L1.75 18.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <button className={s.i_am_buttom_testimonials}>
              View All Testimonials &rarr;
            </button>
          </div>
        </div>
        <Swiper
            pagination={{ clickable: true }}
            breakpoints={{
              10: {
                slidesPerView: 1,
              },
              1000: {
                slidesPerView: 2,
              },
              1500: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={40}
            navigation={{
              nextEl: ".swiper_button_card_right",
              prevEl: ".swiper_button_card_left",
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper">
        <div className={s.Testimonials_cards}>
          <SwiperSlide className={s.Testimonials_card_1}>
            <div className={s.Testimonials_card_name}>
              <div className={s.Testimonials_card_naming}>
                <h4 className={s.Testimonials_card_name_emily}>
                  Emily Johnson
                </h4>
                <h5 className={s.Testimonials_card_country}>USA, California</h5>
              </div>
              <div className={s.button_card_testimonials}>
                <div className={s.button_icon_testimonials}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={s.button_icon_testimonials}>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.2918 17.125C13.8371 17.125 17.9652 10.8723 17.9652 5.45155C17.9652 5.27577 17.9613 5.09608 17.9535 4.9203C18.7566 4.33955 19.4496 3.62021 20 2.79608C19.2521 3.12883 18.458 3.34615 17.6449 3.44061C18.5011 2.92742 19.1421 2.12123 19.4492 1.17147C18.6438 1.6488 17.763 1.98551 16.8445 2.16718C16.2257 1.50963 15.4075 1.07426 14.5164 0.928376C13.6253 0.782488 12.711 0.934209 11.9148 1.36008C11.1186 1.78595 10.4848 2.46225 10.1115 3.28443C9.73825 4.1066 9.64619 5.02885 9.84961 5.90858C8.21874 5.82674 6.62328 5.40309 5.16665 4.66508C3.71002 3.92708 2.42474 2.8912 1.39414 1.6246C0.870333 2.5277 0.710047 3.59637 0.945859 4.61341C1.18167 5.63045 1.79589 6.51954 2.66367 7.09999C2.01219 7.0793 1.37498 6.9039 0.804688 6.58827V6.63905C0.804104 7.58679 1.13175 8.50549 1.73192 9.23897C2.3321 9.97246 3.16777 10.4755 4.09687 10.6625C3.49338 10.8276 2.85999 10.8517 2.2457 10.7328C2.50788 11.5479 3.01798 12.2607 3.70481 12.7719C4.39164 13.2831 5.22093 13.5672 6.07695 13.5844C4.62369 14.7259 2.82848 15.3451 0.980469 15.3422C0.652739 15.3417 0.325333 15.3216 0 15.282C1.87738 16.4865 4.06128 17.1262 6.2918 17.125Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={s.button_icon_testimonials}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <img className={s.stars} src={Stars} />
            <p className={s.paraprafh_card}>
              Damien's photography doesn't just capture moments; it captures
              emotions. Hes work is simply mesmerizing.
            </p>
          </SwiperSlide>
          <SwiperSlide className={s.Testimonials_card_2}>
            <div className={s.Testimonials_card_name}>
              <div className={s.Testimonials_card_naming}>
                <h4 className={s.Testimonials_card_name_emily}>John Smith</h4>
                <h5 className={s.Testimonials_card_country}>USA, California</h5>
              </div>
              <div className={s.button_card_testimonials}>
                <div className={s.button_icon_testimonials}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={s.button_icon_testimonials}>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.2918 17.125C13.8371 17.125 17.9652 10.8723 17.9652 5.45155C17.9652 5.27577 17.9613 5.09608 17.9535 4.9203C18.7566 4.33955 19.4496 3.62021 20 2.79608C19.2521 3.12883 18.458 3.34615 17.6449 3.44061C18.5011 2.92742 19.1421 2.12123 19.4492 1.17147C18.6438 1.6488 17.763 1.98551 16.8445 2.16718C16.2257 1.50963 15.4075 1.07426 14.5164 0.928376C13.6253 0.782488 12.711 0.934209 11.9148 1.36008C11.1186 1.78595 10.4848 2.46225 10.1115 3.28443C9.73825 4.1066 9.64619 5.02885 9.84961 5.90858C8.21874 5.82674 6.62328 5.40309 5.16665 4.66508C3.71002 3.92708 2.42474 2.8912 1.39414 1.6246C0.870333 2.5277 0.710047 3.59637 0.945859 4.61341C1.18167 5.63045 1.79589 6.51954 2.66367 7.09999C2.01219 7.0793 1.37498 6.9039 0.804688 6.58827V6.63905C0.804104 7.58679 1.13175 8.50549 1.73192 9.23897C2.3321 9.97246 3.16777 10.4755 4.09687 10.6625C3.49338 10.8276 2.85999 10.8517 2.2457 10.7328C2.50788 11.5479 3.01798 12.2607 3.70481 12.7719C4.39164 13.2831 5.22093 13.5672 6.07695 13.5844C4.62369 14.7259 2.82848 15.3451 0.980469 15.3422C0.652739 15.3417 0.325333 15.3216 0 15.282C1.87738 16.4865 4.06128 17.1262 6.2918 17.125Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={s.button_icon_testimonials}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <img className={s.stars} src={Stars} />
            <p className={s.paraprafh_card}>
              Damien has an incredible talent for making every event feel
              effortless, and the results speak for themselves.
            </p>
          </SwiperSlide>
          <SwiperSlide className={s.Testimonials_card_3}>
            <div className={s.Testimonials_card_name}>
              <div className={s.Testimonials_card_naming}>
                <h4 className={s.Testimonials_card_name_emily}>
                  Samantha Davis
                </h4>
                <h5 className={s.Testimonials_card_country}>USA, California</h5>
              </div>
              <div className={s.button_card_testimonials}>
                <div className={s.button_icon_testimonials}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={s.button_icon_testimonials}>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.2918 17.125C13.8371 17.125 17.9652 10.8723 17.9652 5.45155C17.9652 5.27577 17.9613 5.09608 17.9535 4.9203C18.7566 4.33955 19.4496 3.62021 20 2.79608C19.2521 3.12883 18.458 3.34615 17.6449 3.44061C18.5011 2.92742 19.1421 2.12123 19.4492 1.17147C18.6438 1.6488 17.763 1.98551 16.8445 2.16718C16.2257 1.50963 15.4075 1.07426 14.5164 0.928376C13.6253 0.782488 12.711 0.934209 11.9148 1.36008C11.1186 1.78595 10.4848 2.46225 10.1115 3.28443C9.73825 4.1066 9.64619 5.02885 9.84961 5.90858C8.21874 5.82674 6.62328 5.40309 5.16665 4.66508C3.71002 3.92708 2.42474 2.8912 1.39414 1.6246C0.870333 2.5277 0.710047 3.59637 0.945859 4.61341C1.18167 5.63045 1.79589 6.51954 2.66367 7.09999C2.01219 7.0793 1.37498 6.9039 0.804688 6.58827V6.63905C0.804104 7.58679 1.13175 8.50549 1.73192 9.23897C2.3321 9.97246 3.16777 10.4755 4.09687 10.6625C3.49338 10.8276 2.85999 10.8517 2.2457 10.7328C2.50788 11.5479 3.01798 12.2607 3.70481 12.7719C4.39164 13.2831 5.22093 13.5672 6.07695 13.5844C4.62369 14.7259 2.82848 15.3451 0.980469 15.3422C0.652739 15.3417 0.325333 15.3216 0 15.282C1.87738 16.4865 4.06128 17.1262 6.2918 17.125Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={s.button_icon_testimonials}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <img className={s.stars} src={Stars} />
            <p className={s.paraprafh_card}>
              I was blown away by Damien's ability to capture the essence of our
              wedding day. Hes photographs are our cherished memories.
            </p>
          </SwiperSlide>
        </div>
        </Swiper>
        <div className={s.mobile_button}>
          <div className={s.button_container_services_mobile}>
            <button className="swiper_button_card_left">
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.25 1.5L1.75 10L10.25 18.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="swiper_button_card_right">
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.75 1.5L10.25 10L1.75 18.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className={s.Damien}>
        <img className={s.Damien_img} src={Sub} />
      </section>
    </main>
  );
};

export default Home;
