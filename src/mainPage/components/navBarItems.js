import logo from "../logo.jpg";

const NavBarItems = (props) => {
  return (
    <>
      <li>
        <img className="navbar-logo" src={logo} alt="logo" />
      </li>
      <div className="navbar-categories">
        {props.items.map((category) => {
          return (
            <li className="navbar-item not-bold">
              <div>{category}</div>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default NavBarItems;
