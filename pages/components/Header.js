import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-red-100 w-screen flex justify-center items-center">
      <div className="relative my-20 flex flex-col ">
        <div data-aos="fade-left" className="flex justify-center items-center">
          <Image
            src="/img/profile.png"
            height={170}
            width={170}
            alt="Profile portfolio"
            className="rounded-full shadow-md justify-center m-6 p-6 border-2 relative z-0"
          ></Image>
          <div>
            <h1 className="text-center relative text-gray-800 text-opacity-75 ... text-4xl font-semibold ... .tracking-tight md:text-center ...">
              Alba Argañarás
            </h1>
            <h2 className="text-red-100 rounded-full py-3 px-6... bg-gray-800 m-2 text-xl font-semibold ...  md:text-center ...">
              FRONT-END DEVELOPER
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
