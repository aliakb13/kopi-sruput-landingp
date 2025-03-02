import { useData } from "./Home";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";

// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "./ui/card";

import CarouselProduct from "./CarouselProduct";

const BestSeller = () => {
  const data = useData();
  const coffeData = data?.filter((food) => food.tag === "kopi sruput");
  const teaData = data?.filter((food) => food.tag === "teh sruput");
  const chickenData = data?.filter((food) => food.tag == "ayam d kremes");

  return (
    <section className="bg-black py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Heading */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-10 max-w-3xl"
      >
        <h2 className="text-2xl sm:text-3xl md:text-lg font-bold text-white tracking-widest">
          PRODUCTS
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-3">
          OUR <span className="text-yellow-500">SPECIAL MENU</span>
        </h3>
        <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          iure velit dolore mollitia, corporis quaerat.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-[350px] md:w-full flex justify-center"
      >
        <Tabs defaultValue="coffe" className="w-full md:w-[600px]">
          <TabsList className="grid w-full grid-cols-3 gap-3">
            <TabsTrigger
              value="coffe"
              className="data-[state=active]:bg-yellow-500"
            >
              Coffe Shop
            </TabsTrigger>
            <TabsTrigger
              value="teh"
              className="data-[state=active]:bg-yellow-500"
            >
              Teh Seruput
            </TabsTrigger>
            <TabsTrigger
              value="ayam"
              className="data-[state=active]:bg-yellow-500"
            >
              Ayam Kremes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="coffe" className="flex justify-center">
            <CarouselProduct data={coffeData} />
          </TabsContent>
          <TabsContent value="teh" className="flex justify-center">
            <CarouselProduct data={teaData} />
          </TabsContent>
          <TabsContent value="ayam" className="flex justify-center">
            <CarouselProduct data={chickenData} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default BestSeller;
