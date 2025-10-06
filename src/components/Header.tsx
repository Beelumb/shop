import Cart from "./Cart/Cart";
import { NavLink } from "react-router";
import "./Header.css";
import "./Header.css";
import logo from "../assets/Logo.png"

type HeaderProps = {
  search: string;
  setSearch: (val: string) => void;
};

export default function Header({ search, setSearch }: HeaderProps) {
  return (
    <header id="header">
      <div className="container-xl d-flex align-items-center justify-content-between">
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/"><img src={logo} alt="" /></NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="d-flex align-items-center">
          <div className="searchbox">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              placeholder="Search product"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Cart></Cart>
        </div>
      </div>
    </header>
  );
}
