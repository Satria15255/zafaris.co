import { Nav } from "react-bootstrap";
import { AlignJustify, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarSection({ cartCount, onCartClick }) {
  const [open, setOpen] = useState(false);

  return (
    <Navbar className="fixed top-0  z-50 bg-white shadow-sm flex justify-center items-center  left-0 w-full">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/zafaris.co" href="#" className="font-bold font-sans md:flex text-xl md:px-3">
          Zafaris<span style={{ color: "red" }}>.</span>
        </Navbar.Brand>
        <div className="flex items-center">
          <Nav className="font-bold space-px-5 mx-auto hidden md:flex justify-center">
            <Nav.Link as={NavLink} to="/zafaris.co">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="zafaris.co/products">
              Product
            </Nav.Link>
          </Nav>
          <button onClick={onCartClick} className="relative btn hover:text-gray-900">
            <ShoppingCart />
            {cartCount > 0 && <span className="absolute top-2 right-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>}
          </button>
          {/* Hamburger icon */}
          <button onClick={() => setOpen(!open)} className="md:hidden z-50">
            {open ? <x size={24} /> : <AlignJustify />}
          </button>
        </div>
      </Container>

      {/* Menu dropdown */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
        <button onClick={() => setOpen(false)} className=" fixed left-3 top-2">
          X
        </button>
        <ul className="mt-16 space-y-4 p-6 font-semibold text-lg text-gray-800">
          <Nav.Link onClick={() => setOpen(false)} as={NavLink} to="/zafaris.co">
            Home
          </Nav.Link>
          <Nav.Link onClick={() => setOpen(false)} as={NavLink} to="zafaris.co/products">
            Product
          </Nav.Link>
          <li
            onClick={() => {
              setOpen(false);
              onCartClick();
            }}
            className="border-b py-2 flex justify-between items-center"
          >
            <>Cart</>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}

export default NavbarSection;
