import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Repos from "../components/Repos";

const ExplorePage = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languages = [
    { name: "javascript", src: "/javascript.svg", alt: "JavaScript logo" },
    { name: "typescript", src: "/typescript.svg", alt: "TypeScript logo" },
    { name: "c++", src: "/c++.svg", alt: "C++ logo" },
    { name: "python", src: "/python.svg", alt: "Python logo" },
    { name: "java", src: "/java.svg", alt: "Java logo" },
  ];

  const exploreRepos = async (language: string) => {
    setLoading(true);
    setRepos([]);
    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`
      );
      const data = await res.json();
      console.log(data);
      const reposData = data?.items || [];
      setRepos(reposData);
      setSelectedLanguage(language);
    } catch (error) {
      toast.error("Error fetching repositories, please try again later.");
      console.error("Error fetching repos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          {languages.map((lang) => (
            <img
              key={lang.name}
              src={lang.src}
              alt={lang.alt}
              className="h-11 sm:h-20 cursor-pointer"
              onClick={() => exploreRepos(lang.name)}
            />
          ))}
        </div>
        {repos.length > 0 && (
          <h2 className="text-lg font-semibold text-center my-4">
            <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full ">
              {selectedLanguage.toUpperCase()}{" "}
            </span>
            Repositories
          </h2>
        )}
        {loading ? (
          <Spinner />
        ) : repos.length > 0 ? (
          <Repos repos={repos} alwaysFullWidth />
        ) : (
          <p className="text-center">Error finding repositories.</p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
