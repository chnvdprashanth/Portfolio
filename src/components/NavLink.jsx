import { Link } from "react-scroll";

// eslint-disable-next-line react/prop-types
const NavLink = ({ label, setToggleSidebar }) => {
  return (
    <Link
      to={label}
      smooth={true}
      duration={500}
      onClick={() => setToggleSidebar?.(false)}
      className="cursor-pointer"
    >
      {label}
    </Link>
  );
};

export default NavLink;
