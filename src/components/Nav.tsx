import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

const NavLinks = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Product</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex w-1/2 justify-end">
        <div className="hidden md:flex justify-between sm:w-full lg:w-3/5">
          <NavLinks />
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <X onClick={toggleNavbar} className="cursor-pointer" size={28} />
          ) : (
            <Menu onClick={toggleNavbar} className="cursor-pointer" size={28} />
          )}
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="md:hidden flex flex-col basis-full items-center gap-5 p-3 mt-3"
        >
          <NavLinks />
        </motion.div>
      )}
    </>
  );
};

export default Nav;
