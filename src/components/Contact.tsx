import { MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="p-6 md:p-12 mt-10 md:mt-10 flex flex-col items-center gap-5 md:flex-row md:justify-around md:items-start mb-5">
      <div className="w-full h-[325px] md:h-[400px] md:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4796315685476!2d108.32739389999999!3d-6.331850900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eb988f20b4adb%3A0x96fde05dffbe7af9!2sKedai%20Kopi%20Seruput%20Indramayu!5e0!3m2!1sid!2sid!4v1740756993237!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col md:justify-center mt-8 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-yellow-500">
            Visit Us or Reach Out, We’re Here for You!
          </h2>
          <div className="border-2 border-yellow-500 mt-2 rounded-xl"></div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
          <MapPin className="text-yellow-500" />
          <p className="max-w-[250px] text-center md:text-start text-lg white font-bold">
            Jl. Letnan Purbadi No.28, RT.1, Lemahabang, Kec. Indramayu,
            Kabupaten Indramayu, Jawa Barat 45212
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <Clock className="text-yellow-500" />
            <p className="max-w-[250px] text-center md:text-start text-lg white font-bold">
              18.00 - 22.00
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-4">
          <a href="https://wa.me/6287894517901" target="_blank">
            <svg
              viewBox="0 0 24 24"
              width="23"
              height="23"
              className="fill-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <p className="max-w-[250px] text-justify text-lg white font-bold">
            087894517901 (klik logo!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
