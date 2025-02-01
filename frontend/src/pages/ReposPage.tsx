import Repos from "@/components/Repos";
import Search from "@/components/Search";
import SortRepos from "@/components/SortRepos";
import Spinner from "@/components/Spinner";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ReposPage = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");

  const getUserData = async (user = "devkhan786") => {
    setLoading(true);
    setRepos([]); 

    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();

      if (data.message === "Not Found") {
        toast.error("User not found");
        return;
      }

      const repoRes = await fetch(data.repos_url);
      const reposData = await repoRes.json();

      // Automatically sort by most recent
      const sortedRepos = [...reposData].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setRepos(sortedRepos);
    } catch (error: any) {
      toast.error("Error fetching data");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const onSearch = async (e: React.FormEvent, user: string) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    await getUserData(user);
  };

  const onSort = (type: string) => {
    if (type === "recent") {
      setRepos(
        [...repos].sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
      );
    } else if (type === "stars") {
      setRepos(
        [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)
      );
    } else if (type === "forks") {
      setRepos([...repos].sort((a, b) => b.forks_count - a.forks_count));
    }

    setSortType(type);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen mx-auto rounded-lg px-4 sm:px-8 py-2 w-full">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Search onSearch={onSearch} />
          <SortRepos onSort={onSort} sortType={sortType} />
          <Repos repos={repos} />
        </>
      )}
    </div>
  );
};

export default ReposPage;
