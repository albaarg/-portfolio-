import { useEffect } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Aos from "aos";
import "aos/dist/aos.css";
import EmailIcon from "@material-ui/icons/Email";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer className="grid w-screen bg-red-100 bg-auto text-center text-black md:text-3xl font-sans">
      <div className="px-8 py-2">
        <section className="contactInfo" data-aos="fade-right">
          <h2 className="text-gray-800">Let's talk!</h2>
          <p className="text-sm md:s-m p-3">
            <EmailIcon /> arga.alba@gmail.com
          </p>
          <div className="p-4 space-x-8">
            <a
              href="https://github.com/albaarg"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/albaarganaras/"
            >
              <LinkedInIcon />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
