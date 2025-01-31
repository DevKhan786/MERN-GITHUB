const ExplorePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen mx-auto rounded-lg px-4 sm:px-8 py-2 w-full">
      <div className="bg-glass max-w-2xl mx-auto rounded-2xl p-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap justify-center gap-4 my-4">
          <img
            src="/javascript.svg"
            alt="JavaScript"
            className="h-14 sm:h-20 cursor-pointer transition-transform transform hover:scale-105"
          />
          <img
            src="/typescript.svg"
            alt="TypeScript logo"
            className="h-14 sm:h-20 cursor-pointer transition-transform transform hover:scale-105"
          />
          <img
            src="/c++.svg"
            alt="C++ logo"
            className="h-14 sm:h-20 cursor-pointer transition-transform transform hover:scale-105"
          />
          <img
            src="/python.svg"
            alt="Python logo"
            className="h-14 sm:h-20 cursor-pointer transition-transform transform hover:scale-105"
          />
          <img
            src="/java.svg"
            alt="Java logo"
            className="h-14 sm:h-20 cursor-pointer transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
