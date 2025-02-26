import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-start px-6 md:px-12 lg:px-36 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/header-bg.jpg')" }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative text-left max-w-4xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl text-white font-bold"
        >
          Selamat datang di{" "}
          <span className="text-yellow-500">Kedai Seruput!</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl text-white font-bold"
        >
          Tempat di mana rasa bertemu dengan kebahagiaan
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
          className="mt-2 text-base sm:text-lg md:text-xl text-gray-400 font-light italic"
        >
          "we don't just serve food & beverage we serve happiness."
        </motion.p>
        {/* Tombol CTA */}
        <motion.a
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
          href="#produk"
          className="mt-6 inline-block py-3 px-10 bg-yellow-500 text-black text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          Lihat Produk
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HeroSection;
