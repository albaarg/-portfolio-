import { useEffect } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { BrandVercel } from "tabler-icons-react";
import Aos from "aos";
import "aos/dist/aos.css";

function Project({ id, title, description, img, vercel, github }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="flex flex-col " data-aos="fade-down">
       <div className="w-full flex justify-start px-6"> 
          <h3 className=" text-center font-semibold text-gray-800 text-2xl">
          {title}
        </h3>
        <div className="flex p-6 space-x-4 justify-between">
          <a href={vercel} target="_blank" rel="noreferrer">
            <BrandVercel size={25} strokeWidth={2} color={"black"} />
          </a>
          <a href={github}>
            <GitHubIcon />
          </a>
        </div>
       </div>
        <img
          src={img}
          className="flex items-center rounded-lg shadow-md  m-4"
          alt="projects"
        />
      </div>
      <p className="text-center tracking-tight font-sans text-base m-3 text-gray-800">
        {description}
      </p>
    </>
  );
}

export default Project;
