import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black py-10 px-3 pb-5 text-sm bg-gray-300">
      <div className=" grid grid-cols-1 md:grid-cols-4  mb-4 pb-4 h-auto border-bottom">
        <div className=" md:text-left py-4 ">
          <h4 className="text-sm font-bold text-xl pb-2">
            Zafaris
            <span className="font-bold" style={{ color: "red" }}>
              .
            </span>
          </h4>
          <div className="py-4">
            <p>PO Box 12300 Collins Street,</p>
            <p> Viectoria 9000 (+00) 1234 5678 90 </p>
            <p>email@boost.com </p>
          </div>
        </div>
        <div className="py-4 text-left">
          <h4 className="text-sm font-bold text-xl pb-2">SOCIAL ACCOUNT</h4>
          <ul className=" py-4  md:mt-0">
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400">
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400">
                Tik Tok
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm  hover:text-blue-400">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <h4 className="text-sm font-bold text-xl pb-2 ">SERVICE</h4>
          <ul className="py-3 md:mt-0">
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400">
                Store
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400">
                Gift Voucher
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm  hover:text-blue-400">
                Affilaites
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm  hover:text-blue-400">
                Specials
              </a>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <h4 className="text-sm font-bold pb-4 text-xl pb-2">INFORMATION</h4>
          <ul className=" md:mt-0">
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400">
                About us
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400">
                Delivery Information
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm  hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm  hover:text-blue-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" className="text-sm  hover:text-blue-400">
                Purchase Theme
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="flex items-center text-xs py-4 ">© 2025 ReactShoes. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
