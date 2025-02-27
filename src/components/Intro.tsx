import { motion } from "motion/react";

const Intro = () => {
  return (
    <section>
      {/* Bagian About */}
      <div className="flex flex-col md:flex-row items-center md:justify-end gap-12 md:gap-28 px-6 sm:px-8 md:px-12 lg:px-24 py-12 md:py-16 bg-black">
        {/* Konten Teks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 text-left max-w-2xl md:pl-32 mt-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-lg font-bold text-white tracking-widest">
            ABOUT US
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-3">
            WE ARE
          </h3>
          <h3 className="text-yellow-500 text-3xl font-bold mt-4">
            KEDAI SERUPUT.
          </h3>
          <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quasi voluptatem possimus, illo aspernatur ipsam, enim similique
            laborum, sit inventore excepturi dicta laudantium maiores odit
            labore nemo. Laudantium incidunt nemo sequi magni sint nam fuga
            illum facere, consectetur beatae dolores dignissimos iusto eveniet
            corporis saepe sit quod eius eos quis.
          </p>
        </motion.div>

        {/* Gambar Kedai */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 max-w-2xl"
        >
          <img
            src="/images/about.jpg"
            alt="Gambar Kedai"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Bagian Services */}
      <div className="flex flex-col md:flex-row items-center md:justify-start gap-12 md:gap-28 px-6 sm:px-8 md:px-12 lg:px-24 py-12 md:py-16 bg-black">
        {/* Gambar Kedai */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: "easeIn",
            type: "spring",
            stiffness: 200,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 max-w-2xl"
        >
          <img
            src="/images/about2.jpg"
            alt="Gambar Kedai"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Konten Teks */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 text-left max-w-2xl md:pr-32"
        >
          <h2 className="text-2xl sm:text-3xl md:text-lg font-bold text-white tracking-widest">
            SERVICES
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-3">
            We Don't Just Serve Food,
          </h3>
          <h3 className="text-yellow-500 text-3xl font-bold mt-4">
            We Serve Happiness.
          </h3>
          <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quasi voluptatem possimus, illo aspernatur ipsam, enim similique
            laborum, sit inventore excepturi dicta laudantium maiores odit
            labore nemo. Laudantium incidunt nemo sequi magni sint nam fuga
            illum facere, consectetur beatae dolores dignissimos iusto eveniet
            corporis saepe sit quod eius eos quis.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
