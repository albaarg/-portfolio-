import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-pink-50 w-screen">
      <div className="relative my-20 ">
        <div className="brief flex items-center" data-aos="fade-left">
          <Image
            src="/img/profile.jpg"
            width={160}
            height={160}
            alt="Profile portfolio"
            data-aos="fade-right"
            className="rounded-full items-start m-6 p-6 border-2 relative z-0"
          ></Image>
          <div>
            <h1 className="text-center relative text-black text-opacity-75 ... text-4xl font-semibold ... .tracking-tight md:text-center ...">
              Alba Argañarás
            </h1>
            <h2 className="text-red-200 rounded-full py-3 px-6... bg-gray-900 m-2 text-2xl font-semibold ... md:text-center ...">
              FRONT-END DEVELOPER
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
