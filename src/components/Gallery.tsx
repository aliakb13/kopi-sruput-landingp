import { Camera } from "lucide-react";

const Gallery = () => {
  return (
    <section className="p-12 mt-10">
      <div className="p-5 flex flex-col gap-5 md:items-left lg:items-center">
        <div className="flex flex-row gap-3">
          <h2 className="text-2xl font-extrabold">GALLERY</h2>
          <Camera className="text-yellow-500" />
        </div>
        <div className="border-2 border-yellow-500 w-full lg:w-1/2"></div>

        <p className="font-bold text-3xl ">
          Cozy Vibes, Delicious Bites, Unforgettable Memories{" "}
          <span className="text-yellow-500">SERUPUT.</span>
        </p>
      </div>
    </section>
  );
};

export default Gallery;
