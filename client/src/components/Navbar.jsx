import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log("Current User:", currentUser);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <Link to="/">
            <span className="text-slate-500">Nestify</span>
            <span className="text-slate-800">Realestate</span>
          </Link>
        </h1>
        <form className="bg-slate-100 p-3 rounded-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className="hidden sm:inline text-slate-700 hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hidden sm:inline text-slate-700 hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="hidden sm:inline text-slate-700 hover:underline"
            >
              {currentUser && currentUser.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover bg-red-500" // Temporary background for debugging
                />
              ) : (
                "Sign In"
              )}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
