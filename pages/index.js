import Head from "next/head";
import NavBar from "../pages/components/NavBar";
import Header from "../pages/components/Header";
import About from "../pages/components/About";
import Footer from "../pages/components/Footer";
import Projects from "../pages/components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <NavBar />
      <Header />
      <div className="flex-round">
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
