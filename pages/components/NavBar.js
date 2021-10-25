import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex bg-red-100 sticky top-0 z-50 bg-auto md:bg-contain w-screen p-4 text-1xl md:text-1xl  items-center justify-center md:space-x-28 space-x-6 md:text-center ... ">
      <Link href="/components/About">
        <button className=" uppercase py-2 px-4 bg-red-50 text-red-200  font-semibold rounded-lg shadow-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:bg-red-50 ring-transparent">
          <a>About</a>
        </button>
      </Link>
      <Link href="/components/Projects">
        <button className=" uppercase  py-2 px-4 bg-red-50 text-red-200 font-semibold rounded-lg shadow-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:bg-red-50 ring-transparent">
          <a> Projects </a>
        </button>
      </Link>
      <Link href="/components/Footer">
        <button className=" uppercase  py-2 px-4 bg-red-50 text-red-200 font-semibold rounded-lg shadow-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:bg-red-50 ring-transparent">
          <a>Contact</a>
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
