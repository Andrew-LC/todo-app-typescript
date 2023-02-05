function Navbar() {
  return (
    <div className="fixed flex items-center justify-between pr-4 pl-4 w-full h-[60px] top-0 backdrop-blur-md bg-darker-bg/60 shadow-md lg:w-5/12 md:5/12">
      <div className="flex">
        <i className="fa-solid fa-book-open text-white text-xl mr-4"></i>
        <h1 className="text-white font-bold text-2xl">TODO APP</h1>
      </div>
      <a target={"_blank"} href="https://github.com/Andrew-LC/todo-app-typescript">
        <i className="fa-brands fa-github text-dark-orange text-3xl"></i>
      </a>
    </div>
  );
}

export default Navbar;
