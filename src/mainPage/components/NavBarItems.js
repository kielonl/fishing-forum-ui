import { useNavigate } from "react-router-dom";
import logo from "../logo.jpg";

const NavBarItems = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <li>
        <img
          className="navbar-logo"
          src={logo}
          onClick={() => navigate("/")}
          alt="logo"
        />
      </li>
      <div className="navbar-categories">
        {props.items.map((category, index) => {
          return (
            <li key={index} className="navbar-item not-bold">
              <div onClick={() => navigate(`/${category}`)}>{category}</div>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default NavBarItems;
