import logo from "../logo.jpg";

const NavBarItems = (props) => {
  console.log(props.items);
  return (
    <>
      <li>
        <img className="navbar-logo" src={logo} alt="logo" />
      </li>
      <div className="navbar-categories">
        {props.items.map((categorie) => {
          return (
            <li className="navbar-item not-bold">
              <div>{categorie}</div>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default NavBarItems;
