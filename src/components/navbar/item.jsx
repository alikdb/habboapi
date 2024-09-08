import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cx from "classix";
const NavbatItem = ({ name, path }) => {
  const location = useLocation();
  return (
    <Link
      to={path}
      className={cx(
        "text-white px-4 rounded py-2 text-sm h-auto hover:bg-cyan-900",
        path === location.pathname && "bg-cyan-900"
      )}
    >
      {name}
    </Link>
  );
};

NavbatItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavbatItem;
