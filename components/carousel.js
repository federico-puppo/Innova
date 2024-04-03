import { Carousel } from "@material-tailwind/react";

export function GalleryWithCarousel() {
  return (
    <Carousel
      loop
      //autoplay
      className="rounded-xl flex"
      style={{ height: "auto", width: "auto", display: "flex" }}
    >
      <div className="flex justify-center items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_blackbg.png"
          alt="image 1"
          className="mt-24"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://a.storyblok.com/f/63950/x/3a5005450d/isologo-vector.svg"
          alt="image 1"
          className="mt-28"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://cdn.freelogovectors.net/wp-content/uploads/2023/04/century-21-logo-freelogovectors.net_-640x480.png"
          alt="image 1"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://scontent.faep27-1.fna.fbcdn.net/v/t39.30808-6/298444334_110466811766827_4464225361207213952_n.png?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEFuPt8y_zEiyR2iLAYwQwFR6t4inCxAWdHq3iKcLEBZ09NtzN8gqM9iMe13f8JbdA&_nc_ohc=8YltyIRTWlgAX_OC0Xn&_nc_ht=scontent.faep27-1.fna&oh=00_AfAc6yPTpr8gVLVKjBTLsRrD41RDt5fIkdyV3r6aGokRmw&oe=65E3B721"
          alt="image 1"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://seeklogo.com/images/F/fever-logo-AC36891684-seeklogo.com.png"
          alt="image 1"
          className="mt-48"
        />
      </div>
      <div className="flex justify-center items-center object-cover">
        <img
          src="https://media.licdn.com/dms/image/C4E0BAQFHbk1Dc5SA7g/company-logo_200_200/0/1639744134000?e=2147483647&v=beta&t=S24pD_ZAHAYUe-cRXolDqhIFVxvIlkofU66bfy606B0"
          alt="image 1"
          className="mt-40 scale-150"
        />
      </div>
      <div className="flex justify-center items-center object-cover">
        <img
          src="https://scontent.faep27-1.fna.fbcdn.net/v/t39.30808-6/295971503_10159771527902850_7177009015753880576_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHzZkZx-ptTr-QLRG42XIquSWhlWgzYDHxJaGVaDNgMfFU6XX7cQ2UBo2dbLJqh4C8&_nc_ohc=gD6bT6Iz6DwAX9n2z7i&_nc_ht=scontent.faep27-1.fna&oh=00_AfCZ143xvBLLFX762Q4HY4HXT0AUypMGrHGZSuF9K4I2Kg&oe=65E3ED39"
          alt="image 1"
          className="scale-50"
        />
      </div>

      <div className="flex justify-center items-center object-cover">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/219px-Peugeot_Logo.svg.png"
          alt="image 1"
          className="mt-40 scale-150"
        />
      </div>

      <div className="flex justify-center items-center object-cover">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/219px-Peugeot_Logo.svg.png"
          alt="image 1"
          className="mt-40 scale-150"
        />
      </div>

      {/* <div className="flex justify-center items-center object-cover">
        <img
          src="https://w7.pngwing.com/pngs/665/220/png-transparent-renault-symbol-car-peugeot-mercedes-benz-motor-angle-logo-car-seat.png"
          alt="image 1"
          className="mt-40 scale-150"
        />
      </div> */}
    </Carousel>
  );
}
