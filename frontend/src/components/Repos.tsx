import Repo from "./Repo";

// Define the structure of a single repo object
interface RepoType {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language:
    | "TypeScript"
    | "JavaScript"
    | "Python"
    | "Java"
    | "C++"
    | "Swift"
    | "Csharp"
    | "Go"
    | "HTML"
    | "CSS"; 
  html_url: string;
  created_at: string;
}

interface ReposProps {
  repos: RepoType[]; // Array of repo objects
}

const Repos: React.FC<ReposProps> = ({ repos }) => {
  return (
    <div>
      <ol className="border px-2 py-8 rounded-2xl max-h-[600px] overflow-y-auto relative max-w-full">
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
        {repos.length === 0 && (
          <p className="flex items-center justify-center h-32">
            No repos found
          </p>
        )}
      </ol>
    </div>
  );
};

export default Repos;
