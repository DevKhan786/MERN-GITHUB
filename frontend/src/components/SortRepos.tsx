interface SortReposProps {
  onSort: (type: string) => void;
  sortType: string;
}

const SortRepos = ({ onSort, sortType }: SortReposProps) => {
  return (
    <div className="w-full p-2 flex justify-center space-x-4 mb-4">
      <button
        type="button"
        onClick={() => onSort("recent")}
        className={`py-2.5 px-5 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:scale-95 active:scale-90 transition-all duration-300 ${
          sortType === "recent" ? "bg-blue-500 text-white" : ""
        }`}
      >
        Most Recent
      </button>
      <button
        type="button"
        onClick={() => onSort("stars")}
        className={`py-2.5 px-5 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:scale-95 active:scale-90 transition-all duration-300 ${
          sortType === "stars" ? "bg-blue-500 text-white" : ""
        }`}
      >
        Most Stars
      </button>
      <button
        type="button"
        onClick={() => onSort("forks")}
        className={`py-2.5 px-5 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:scale-95 active:scale-90 transition-all duration-300 ${
          sortType === "forks" ? "bg-blue-500 text-white" : ""
        }`}
      >
        Most Forks
      </button>
    </div>
  );
};

export default SortRepos;
