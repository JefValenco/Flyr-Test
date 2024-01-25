import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getDestinations } from "../../redux/actions";

import CardsContainer from "../../components/CardsContainer/CardsContainer";

import NavBar from "../../components/NavBar/NavBar";

import {
  img1,
  img2,
  img3,
  logo,
  logoSocial,
  menu,
  emoji,
} from "../../images/images.js";

const Home = () => {
  const dispatch = useDispatch();
  const Destinations = useSelector((state) => state.Destinations);

  const currentDestinations = Destinations;

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 576px)").matches
  );
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    dispatch(getDestinations());

    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 576px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const openNav = () => {
    const sideNavWidth = menuClicked ? "0" : "100%";
    console.log("SideNav Width:", sideNavWidth);
    document.getElementById("mySidenav").style.width = sideNavWidth;
  };

  const handleCloseButtonClick = () => {
    const sideNavWidth = menuClicked ? "100%" : "0";
    console.log("SideNav Width:", sideNavWidth);
    document.getElementById("mySidenav").style.width = sideNavWidth;
  };

  return (
    <>
      {/* NavBar Mobile Section */}
      {isMobile && (
        <div>
          <div className="mobileNavBar">
            <div id="mySidenav" className="sidenav">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={handleCloseButtonClick}
              >
                &times;
              </a>
              <img className="emojiMenu" src={emoji} alt="emoji" />

              <a href="#">Check-in</a>
              <hr class="divider"></hr>
              <a href="#">Manage my booking</a>
              <hr class="divider"></hr>
              <a href="#">Information</a>
            </div>

            <button className="nav_buttonMobile" onClick={openNav}>
              <img src={menu} alt="menu" />
            </button>

            <img className="nav_logoMobile_small" src={logo} alt="logo" />
            <img className="nav_logoMobile_emoji" src={emoji} alt="emoji" />
          </div>

          {/* Explore Section */}
          <div className="home_explore">
            <ul class="bannerHero">
              <li className="banner_h1">Take a rest</li>
              <li className="banner_p1">
                Discover all the offers available at the best prices for the
                whole country and the world
              </li>
              <li className="banner_img">
                <button className="home_btn ">Buy</button>
              </li>
            </ul>

            {/* <h1 className="h1Home">Take a rest</h1>
        <div>
          <p className="p1Home">
            Discover all the offers available at the best prices for the whole
            country and the world
          </p>
        </div> */}

            <div className="home_section">
              <img src={img1} alt="img1" />
            </div>
          </div>

          {/* Destinies Section */}
          <div className="home_destinies">
            <CardsContainer currentDestinations={currentDestinations} />
          </div>

          {/* Destinies Our Destinations */}

          <div className="home_our">
            <ul class="discoverList">
              <li className="card_title2">Our destinations</li>
              <li className="card_title3">Discover the world</li>
              <li className="card_title4">
                Embark on an unforgettable adventure! Discover and enjoy our
                fascinating destinations. We are waiting for you to explore the
                world together!
              </li>
            </ul>

            <img className="img3" src={img3} alt="img3" />
          </div>

          {/* Create Footer */}

          <div className="footer">
            <div className="footer-container">
              <img src={logo} alt="logo" />

              <ul class="discoverListFooter">
                <li className="Footer_p2">Follow Us</li>

                <li className="Footer_img">
                  {" "}
                  <img src={logoSocial} alt="logoSocial" />
                </li>

                <li className="Footer_h1">Destinations</li>
                <li className="Footer_p1">Madrid</li>
                <li className="Footer_p1">Barcelona</li>
                <li className="Footer_p1">London</li>
                <li className="Footer_p1">Paris</li>
                <li className="Footer_p1">Rome</li>
              </ul>

              <ul class="discoverListFooter">
                <li className="Footer_h1">Legal information</li>
                <li className="Footer_p1">Privacy policy</li>
                <li className="Footer_p1">Cookie policies</li>
                <li className="Footer_p1">data treatment</li>
              </ul>

              <ul class="discoverListFooter">
                <li className="Footer_h1">Book your flight</li>
                <li className="Footer_p1">Search flights</li>
                <li className="Footer_p1">Price calendar</li>
                <li className="Footer_p1">Destination map</li>
                <li className="Footer_p1">Flight times</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* NavBar Section */}
      {!isMobile && (
        <div>
          <NavBar />

          {/* Explore Section */}
          <div className="home_explore">
            <ul class="bannerHero">
              <li className="banner_h1">Take a rest</li>
              <li className="banner_p1">
                Discover all the offers available at the best prices for the
                whole country and the world
              </li>
              <li className="banner_img">
                <button className="home_btn ">Buy</button>
              </li>
            </ul>

            {/* <h1 className="h1Home">Take a rest</h1>
        <div>
          <p className="p1Home">
            Discover all the offers available at the best prices for the whole
            country and the world
          </p>
        </div> */}

            <div className="home_section">
              <img src={img1} alt="img1" />
            </div>
          </div>

          {/* Destinies Section */}
          <div className="home_destinies">
            <CardsContainer currentDestinations={currentDestinations} />
          </div>

          {/* Destinies Our Destinations */}

          <div className="home_our">
            <ul class="discoverList">
              <li className="card_title2">Our destinations</li>
              <li className="card_title3">Discover the world</li>
              <li className="card_title4">
                Embark on an unforgettable adventure! Discover and enjoy our
                fascinating destinations. We are waiting for you to explore the
                world together!
              </li>
            </ul>

            <img className="img3" src={img2} alt="img2" />
          </div>

          {/* Create Footer */}

          <div className="footer">
            <div className="footer-container">
              <img src={logo} alt="logo" />

              <ul class="discoverListFooter">
                <li className="Footer_h1">Destinations</li>
                <li className="Footer_p1">Madrid</li>
                <li className="Footer_p1">Barcelona</li>
                <li className="Footer_p1">London</li>
                <li className="Footer_p1">Paris</li>
                <li className="Footer_p1">Rome</li>
              </ul>

              <ul class="discoverListFooter">
                <li className="Footer_h1">Legal information</li>
                <li className="Footer_p1">Privacy policy</li>
                <li className="Footer_p1">Cookie policies</li>
                <li className="Footer_p1">data treatment</li>
              </ul>

              <ul class="discoverListFooter">
                <li className="Footer_h1">Book your flight</li>
                <li className="Footer_p1">Search flights</li>
                <li className="Footer_p1">Price calendar</li>
                <li className="Footer_p1">Destination map</li>
                <li className="Footer_p1">Flight times</li>

                <li className="Footer_p2">Follow Us</li>

                <li className="Footer_img">
                  {" "}
                  <img src={logoSocial} alt="logoSocial" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
