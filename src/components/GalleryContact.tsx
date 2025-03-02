import { useLocation } from "react-router-dom";
import Contact from "./Contact";
import Gallery from "./Gallery";
import { useEffect } from "react";

const GalleryContact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace("/", "");
    const section = document.getElementById(path);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);
  return (
    <>
      <Gallery />
      <Contact />
    </>
  );
};

export default GalleryContact;
