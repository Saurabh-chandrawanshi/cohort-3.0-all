import React, { useState } from "react";
import { ShoppingBag, Menu, X, ShoppingCart } from "lucide-react";

const Navbar = ({setIsOpenData}) => {
  const [isOpen, setIsOpen] = useState(false);

   const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-indigo-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md">
            <ShoppingBag size={23} />
          </div>

          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Stu<span className="text-indigo-600">dent</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
         
          <a href="" > Home</a>
          <a className="cursor-pointer" onClick={() => setIsOpenData(true)} >Products</a>
          <a href="#" >About Us</a>
          <a href="#" > contact</a>
         
        </div>

        {/* Cart Button */}
        <div className="hidden md:block">
          <a
            onClick={() => setIsOpenData(false)}
            className="flex items-center cursor-pointer gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-purple-600"
          >
            <ShoppingCart size={19} />
            Cart
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-indigo-50 hover:text-indigo-600 md:hidden"
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-indigo-100 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#cart"
              onClick={() => setIsOpenData(true)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 font-semibold text-white transition hover:opacity-90"
            >
              <ShoppingCart size={19} />
              Cart
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
