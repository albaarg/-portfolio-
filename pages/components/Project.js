import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Project({ id, title, description, img, vercel, github }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="flex flex-col relative " data-aos="fade-down">
       <div className="w-full flex justify-start px-6"> 
          <h3 className=" text-center font-semibold p-2 text-gray-800 text-3xl">
          {title}
        </h3>
       </div>
       <div className="absolute inset-0 inset-x-0 m-16 mr-2 flex items-stretch justify-end space-x-2 duration-300">
          <a href={github} className="relative inset-0 " >
          <button className="py-2 px-4 bg-white uppercase font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:bg-transparent focus:ring-opacity-75 ring-black">
           <img src="/img/github.png" alt="See on Github" className="h-5 " />
           </button>
          </a>
          <a href={vercel} className="relative inset-0" >
          <button className="py-2 px-4 bg-white font-semibold rounded-lg shadow-md  ring-black">
            <img src="/img/vercel.png" alt="See on Vercel" className="h-4 "/>
            </button>
          </a>          
        </div>
        <img
          src={img}
          className="flex items-center bg-auto md:bg-contain bg-top rounded-lg shadow-md  m-4"
          alt="projects"
        />
      </div>
      <p className=" text-center tracking-tight font-sans text-base m-3 text-gray-800 ">
        {description}
      </p>
      
    </>
  );
}

export default Project;
