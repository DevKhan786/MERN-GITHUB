import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { PROGRAMMING_LANGUAGES } from "@/utils/constants";
import toast from "react-hot-toast";

// Define the allowed languages based on PROGRAMMING_LANGUAGES keys
type ProgrammingLanguage = keyof typeof PROGRAMMING_LANGUAGES;

interface RepoProps {
  repo: {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: ProgrammingLanguage; // Type the language field
    html_url: string;
    created_at: string;
    clone_url: string;
  };
}

const Repo: React.FC<RepoProps> = ({ repo }) => {
  const handleCloneClick = async (repo: RepoProps["repo"]) => {
    try {
      await navigator.clipboard.writeText(repo.clone_url);
      toast.success("Repo URL cloned to clipboard");
    } catch (error) {
      toast.error("Clipboard write failed. ");
    }
  };

  return (
    <li className="mb-6 ms-1 max-w-full px-4 border-white border rounded-3xl p-4 bg-glass">
      <span className="absolute items-center justify-center w-6 h-6 bg-blue-100 rounded-full hidden -start-3 ring-8 ring-white">
        <FaCodeBranch className="hidden sm:block w-5 h-5 text-blue-800" />
      </span>
      <div className="flex gap-2 items-center flex-wrap">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm sm:text-lg font-semibold"
        >
          {repo.name}
        </a>
        <span className="bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-medium px-1 py-0.5 rounded-full flex items-center gap-1">
          <FaRegStar /> {repo.stargazers_count}
        </span>
        <span className="bg-purple-100 text-purple-800 text-xs sm:text-sm font-medium px-1 py-0.5 rounded-full flex items-center gap-1">
          <FaCodeFork /> {repo.forks_count}
        </span>
        <span className="cursor-pointer bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-1 py-0.5 rounded-full flex items-center gap-1">
          <FaCopy /> Clone
        </span>
      </div>

      <time className="block my-1 text-xs sm:text-sm leading-none text-gray-400">
        Released on {new Date(repo.created_at).toLocaleDateString()}
      </time>
      <p className="mb-4 text-xs sm:text-sm text-gray-500">
        {repo.description ? repo.description.slice(0, 100) : "No description"}
      </p>
      {PROGRAMMING_LANGUAGES[repo.language] ? (
        <img
          src={PROGRAMMING_LANGUAGES[repo.language]}
          alt={repo.language}
          className="w-6 s:w-8 md:w-12"
        />
      ) : null}
    </li>
  );
};

export default Repo;
