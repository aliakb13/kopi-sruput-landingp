import ProfileLogo from "./ProfileLogo";
import Nav from "./Nav";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex w-full md:justify-around p-5 flex-wrap text-white bg-transparent z-40 fixed top-0 backdrop-blur-md"
    >
      <ProfileLogo />
      <Nav />
    </motion.header>
  );
};

export default Header;
