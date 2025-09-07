import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top py-4"
      style={{
        backgroundColor: "black",
      }}
    >
      <div className="container d-flex justify-content-center align-items-center">
        <Link className="text-light navbar-brand fw-bold" href={"/"}>
          E-Commerce
        </Link>
        <form className="d-flex flex-grow-1 mx-4 gap-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Products"
            />
            <button className="btn btn-danger" type="submit">
              <FaSearch />
            </button>
          </div>
        </form>

        {/* Cart Button */}
        <Link href={"/cart"} className="ms-2">
          <button className="btn btn-warning position-relative">
            <FaCartPlus className="fs-5" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              5
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
