/* eslint-disable react/no-unescaped-entities */
import s from "./index.module.css";

const Footer = () => {
  return (
    <footer>
      <section className={s.footer}>
        <div className={s.footer_vector_left}>
          <div className={s.svg_navi}>
          <svg className={s.footer_svg}
            width="162"
            height="200"
            viewBox="0 0 162 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M162 120L162 80L52 80C40.954 80 32 71.0457 32 60C32 48.9543 40.954 40 52 40L162 40L162 0L62 -4.37114e-06C6.772 -6.78523e-06 -38 44.7715 -38 100C-38 155.228 6.77199 200 62 200L162 200L162 160L52 160C40.954 160 32 151.046 32 140C32 128.954 40.954 120 52 120L162 120Z"
              fill="#1C1C21"
            />
          </svg>
          </div>
          <div className={s.footer_left_text}>
            <h4 className={s.footer_left_text_top}>
              A more meaningful home for photography
            </h4>
            <div className={s.name_footer}>
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
          <nav className={s.footer_nav}>
            <div className={s.footer_colum}>
              <div className={s.footer_nav_name}>Home</div>
              <ul className={s.nav_menu_footer}>
                <li className={s.footer_nav_menu}>About Me</li>
                <li className={s.footer_nav_menu}>My Works</li>
                <li className={s.footer_nav_menu}>Testimonials</li>
              </ul>
            </div>
            <div className={s.footer_colum}>
              <div className={s.footer_nav_name}>Clients</div>
              <ul className={s.nav_menu_footer}>
                <li className={s.footer_nav_menu}>Klovesto</li>
                <li className={s.footer_nav_menu}>Nukeway</li>
                <li className={s.footer_nav_menu}>Cloven’s</li>
                <li className={s.footer_nav_menu}>MenVol</li>
              </ul>
            </div>
            <div className={s.footer_colum}>
              <div className={s.footer_nav_name}>Portfolio</div>
              <ul className={s.nav_menu_footer}>
                <li className={s.footer_nav_menu}>Events</li>
                <li className={s.footer_nav_menu}>Portrait</li>
                <li className={s.footer_nav_menu}>Branding</li>
                <li className={s.footer_nav_menu}>Commerciale</li>
                <li className={s.footer_nav_menu}>Wedding</li>
              </ul>
            </div>
            <div className={s.footer_colum}>
              <div className={s.footer_nav_name}>Services</div>
              <ul className={s.nav_menu_footer}>
                <li className={s.footer_nav_menu}>Portraits</li>
                <li className={s.footer_nav_menu}>Events</li>
                <li className={s.footer_nav_menu}>Commercial </li>
              </ul>
            </div>
          </nav>
          <div className={s.svg_navi}>
          <svg className={s.footer_svg}
            width="162"
            height="200"
            viewBox="0 0 162 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.24537e-06 120L3.49691e-06 80L90.75 80C99.8629 80 107.25 71.0457 107.25 60C107.25 48.9543 99.8629 40 90.75 40L1.74846e-06 40L0 0L82.5 -3.60619e-06C128.063 -5.59782e-06 165 44.7715 165 100C165 155.228 128.063 200 82.5 200L8.74228e-06 200L6.99382e-06 160L90.75 160C99.8629 160 107.25 151.046 107.25 140C107.25 128.954 99.8629 120 90.75 120L5.24537e-06 120Z"
              fill="#1C1C21"
            />
          </svg>
          </div>
        </div>
      </section>
      <section className={s.footer_bottom}>
        <div className={s.footer_bottom_text_left}>
        <h4 className={s.footer_bottom_text}>Terms & Conditions   |</h4>
        <h4 className={s.footer_bottom_text}>Privacy Policy</h4>
        </div>
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
        <h4 className={s.footer_bottom_text}>
          © 2024 Damien Braun Photography. All rights reserved.
        </h4>
      </section>
    </footer>
  );
};

export default Footer;
