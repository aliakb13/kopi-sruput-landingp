// import { coffeData, teaData, chickenData } from "@/utils/filteredData";
import getData from "@/utils/data";
import DetailDialog from "./DetailDialog";
import { motion } from "motion/react";

export function Product() {
  const data = getData();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.3 }, // Efek muncul satu per satu
        },
      }}
      className="p-10 mt-12 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5"
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
  );
}

export default Product;
