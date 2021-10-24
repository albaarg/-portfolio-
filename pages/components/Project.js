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
      <div className="project" data-aos="fade-down">
        <h3 className="text-center">{title}</h3>
        <img src={img} className="flex" alt="projects" />
      </div>
      <p>{description}</p>
      <div className="items-center">
        <a href={vercel} target="_blank" rel="noreferrer">
          <BrandVercel size={25} strokeWidth={2} color={"black"} />
        </a>
        <a href={github}>
          <GitHubIcon />
        </a>
      </div>
    </>
  );
}

export default Project;
