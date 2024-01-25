import { logo, emoji } from "../../images/images.js";

const NavBar = () => {
  return (
    <div>
      <div className="home_img1">
        <div>
          <ul className="ulNav">
            <img className="nav_logo" src={logo} alt="logo" />

            <li className="liNav">
              <a className="aNav" href="#">
                Check-in
              </a>
            </li>
            <li className="liNav">
              <a className="aNav" href="#">
                Manage my booking
              </a>
            </li>
            <li className="liNav">
              <a className="aNav" href="#">
                Information
              </a>
            </li>

            <li className="emoji">
              <img className="emojiImage" src={emoji} alt="emoji" />
            </li>

            <li className="liNavLanguage">
              <a className="aNav" href="#">
                English
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
