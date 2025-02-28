// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Gallery() {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div
//       className="relative w-64 h-96 cursor-pointer perspective"
//       onClick={() => setFlipped(!flipped)}
//     >
//       <motion.div
//         className="absolute w-full h-full rounded-lg shadow-lg"
//         initial={false}
//         animate={{ rotateY: flipped ? 180 : 0 }}
//         transition={{ duration: 0.6 }}
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {/* Kartu Depan */}
//         <div className="absolute w-full h-full bg-yellow-500 flex items-center justify-center text-white text-xl font-bold rounded-lg backface-hidden">
//           Depan
//         </div>

//         {/* Kartu Belakang */}
//         <div
//           className="absolute w-full h-full bg-red-500 flex items-center justify-center text-white text-xl font-bold rounded-lg backface-hidden"
//           style={{ transform: "rotateY(180deg)" }}
//         >
//           Belakang
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

const menuItems = [
  { id: 1, name: "Menu 1", image: "/menu1.jpg" },
  { id: 2, name: "Menu 2", image: "/menu2.jpg" },
  { id: 3, name: "Menu 3", image: "/menu3.jpg" },
  { id: 4, name: "Menu 4", image: "/menu4.jpg" },
];

export default function Gallery() {
  return (
    <div className="p-20">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 }, // Efek muncul satu per satu
          },
        }}
      >
        {menuItems.map((menu) => (
          <motion.div
            key={menu.id}
            className="relative"
            variants={{
              hidden: { opacity: 0, scale: 0.7 }, // Efek awal
              visible: { opacity: 1, scale: 1 }, // Efek saat muncul
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={menu.image}
              alt={menu.name}
              className="w-full h-40 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
