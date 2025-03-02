import getData from "@/utils/data";
import { Camera } from "lucide-react";
import { motion } from "motion/react";

const Gallery = () => {
  const data = getData();

  return (
    <section id="gallery" className="p-12 mt-10">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeIn" }}
        className="p-5 flex flex-col gap-5 md:items-left lg:items-center"
      >
        <div className="flex flex-row gap-3">
          <h2 className="text-2xl font-extrabold">GALLERY</h2>
          <Camera className="text-yellow-500" />
        </div>
        <div className="border-2 border-yellow-500 w-full lg:w-1/2"></div>

        <p className="font-bold text-3xl ">
          Cozy Vibes, Delicious Bites, Unforgettable Memories at{" "}
          <span className="text-yellow-500">SERUPUT.</span>
        </p>
      </motion.div>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {data.map((menu) => (
          <div key={menu.no} className="overflow-hidden rounded-lg shadow-m">
            <img
              className="w-full object-cover rounded-xl"
              src={menu.image}
              alt={menu.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
