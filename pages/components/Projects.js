import Project from "../components/Project";

const project = [
  {
    id: "1",
    title: " Bk Relojes",
    description:
      "E-commerce that I did in React course. Used Firebase as the database.",
    github: "https://github.com/albaarg/React-BKRelojes-AlbaArg",
    vercel: "https://react-bkr-elojes-alba-arg.vercel.app/",
    img: "/img/bk-relojes.png",
  },
  {
    id: "2",
    title: "Movies App",
    description:
      "Movie website where I used the TMDB api. It shows movie's trending and allows to search any movie.",
    github: "https://github.com/albaarg/Movies-App",
    vercel: "https://movies-app-drab-seven.vercel.app/",
    img: "/img/movies.png",
  },
  {
    id: "3",
    title: "Todo List",
    description: "Full CRUD tasks. ",
    github: "https://github.com/albaarg/todo",
    vercel: "https://todo-puce.vercel.app/",
    img: "/img/todo.png",
  },
  {
    id: "4",
    title: "Instagram Clone",
    description:
      "Instragram app clone made with Next Js, using Next Auth, and Firebase as a database. It allows to log in, upload photos and comment them, and also to like them.",
    github: "https://github.com/albaarg/instagram-clone-next",
    vercel: "https://instagram-clone-next-dusky.vercel.app/",
    img: "/img/instagramclone.png",
  },
];

function Projects() {
  return (
    <div className="px-4">
      <h2 className=" text-center m-8 p-8 text-gray-800 ... text-4xl font-sans ... .tracking-tight md:text-center ...">
        Projects
      </h2>
      {project.map((projects) => (
        <Project
          key={projects.id}
          id={projects.id}
          title={projects.title}
          description={projects.description}
          github={projects.github}
          vercel={projects.vercel}
          img={projects.img}
        />
      ))}
    </div>
  );
}

export default Projects;
