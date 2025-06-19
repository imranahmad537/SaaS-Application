import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          SaaSApp
        </Link>
        <div className="space-x-4">
          <Link to="/pricing" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/login" className="hover:text-blue-500">
            Features
          </Link>
          <Link to="/login" className="hover:text-blue-500">
            Customers
          </Link>
          <Link to="/login" className="hover:text-blue-500">
            Updates
          </Link>
          <Link to="/login" className="hover:text-blue-500">
            Help
          </Link>
          <button class="bg-black  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
            Button
          </button>
        </div>
      </div>
    </nav>
  );
}
