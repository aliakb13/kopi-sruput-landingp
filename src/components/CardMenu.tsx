import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

import { Data } from "@/types/types";
import { Flame } from "lucide-react";
import { motion } from "motion/react";

const CardMenu = ({ menu }: { menu: Data }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ rotate: 2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-1"
    >
      <Card className="rounded-xl border-yellow-500 shadow-xl shadow-white/50">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <p className="text-yellow-500 font-extrabold">{menu.name}</p>
          </CardTitle>
          <CardDescription>
            <div className="flex gap-2 text-xs text-red-500 font-bold">
              <span>BEST SELLER</span> <Flame size={18} />
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col aspect-square p-6 gap-5 md:min-h-[300px] lg:min-h-[350px]">
          <img
            src={menu.image}
            alt={menu.name}
            className="w-full max-h-[250px] md:aspect-[4/3] object-cover rounded-xl"
          />
          <span className="font-semibold">{menu.description}</span>
        </CardContent>
        <CardFooter>
          <p className="text-blue-500">RP{menu.price}</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CardMenu;
