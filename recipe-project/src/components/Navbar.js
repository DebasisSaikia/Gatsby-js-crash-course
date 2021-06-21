import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"
import { GrClose } from "react-icons/gr"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button className="nav-btn">
            {!mobileNav ? (
              <FaAlignJustify onClick={() => setMobileNav(!mobileNav)} />
            ) : (
              <GrClose onClick={() => setMobileNav(false)} />
            )}
          </button>
        </div>
        <div className={mobileNav ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link
            to="/products"
            className="nav-link"
            activeClassName="active-link"
          >
            Products
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            Tags
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
