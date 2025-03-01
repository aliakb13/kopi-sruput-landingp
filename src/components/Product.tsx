// import { coffeData, teaData, chickenData } from "@/utils/filteredData";
import getData from "@/utils/data";
import DetailDialog from "./DetailDialog";
import { motion } from "motion/react";
import { Sandwich, Pizza, Beer } from "lucide-react";

export function Product() {
  const data = getData();
  return (
    <section className="p-10 mt-12">
      <div className="p-5 flex flex-col gap-5 md:items-left lg:items-center">
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: "easeIn",
          }}
          className="flex flex-row gap-3"
        >
          <h2 className="text-2xl font-extrabold">OUR MENU</h2>
          <Sandwich className="text-yellow-500" />
          <Pizza className="text-yellow-500" />
          <Beer className="text-yellow-500" />
        </motion.div>
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeIn",
          }}
          className="border-2 border-yellow-500 w-full lg:w-1/2"
        ></motion.div>

        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeIn",
          }}
          className="font-bold text-3xl "
        >
          Discover Your Favorite Menu on KEDAI{" "}
          <span className="text-yellow-500">SERUPUT.</span>
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3, delayChildren: 1.5 }, // Efek muncul satu per satu
          },
        }}
        className="mt-5 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5"
      >
        {data.map((menu) => (
          <motion.div
            key={menu.no}
            variants={{
              hidden: { opacity: 0, scale: 0.7 }, // Efek awal
              visible: { opacity: 1, scale: 1 }, // Efek saat muncul
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <DetailDialog data={menu} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Product;
