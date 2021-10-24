import Project from "../components/Project";

const project = [
  {
    id: "1",
    title: " Bk Relojes",
    description: "123",
    github: "https://github.com/albaarg/React-BKRelojes-AlbaArg",
    vercel: "https://react-bkr-elojes-alba-arg.vercel.app/",
    img: "/img/bk-relojes.png",
  },
  {
    id: "2",
    title: "Movies App",
    description: "456",
    github: "https://github.com/albaarg/Movies-App",
    vercel: "https://movies-app-drab-seven.vercel.app/",
    img: "/img/movies.png",
  },
  {
    id: "3",
    title: "Todo List",
    description: "789",
    github: "https://github.com/albaarg/todo",
    vercel: "https://todo-puce.vercel.app/",
    img: "/img/todo.png",
  },
  {
    id: "4",
    title: "Instagram Clone",
    description: "101112",
    github: "https://github.com/albaarg/instagram-clone-next",
    vercel: "https://instagram-clone-next-dusky.vercel.app/",
    img: "/img/instagram-clone.png",
  },
];

function Projects() {
  return (
    <div>
      <h2 className=" text-center m-8 p-8 text-black ... text-4xl font-semibold ... .tracking-tight md:text-center ...">
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
