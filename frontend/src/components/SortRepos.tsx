const SortRepos = () => {
  return (
    <div className="w-full p-2 flex justify-center space-x-4 mb-4">
      <button
        type="button"
        className="py-2.5 px-5 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:scale-95 active:scale-90 transition-all duration-300"
      >
        Most Recent
      </button>
      <button
        type="button"
        className="py-2.5 px-5 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:scale-95 active:scale-90 transition-all duration-300"
      >
        Most Stars
      </button>
      <button
        type="button"
        className="py-2.5 px-5 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:scale-95 active:scale-90 transition-all duration-300"
      >
        Most Forks
      </button>
    </div>
  );
};

export default SortRepos;
