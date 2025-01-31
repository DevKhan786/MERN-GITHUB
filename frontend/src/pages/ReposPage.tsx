import Repos from "@/components/Repos";
import Search from "@/components/Search";
import SortRepos from "@/components/SortRepos";
import Spinner from "@/components/Spinner";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ReposPage = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://api.github.com/users/devkhan786");
        const data = await res.json();

        const repoRes = await fetch(data.repos_url);
        const reposData = await repoRes.json();
        setRepos(reposData);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    getUserData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen mx-auto rounded-lg px-4 sm:px-8 py-2 w-full">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Search />
          <SortRepos />
          <Repos repos={repos} />
        </>
      )}
    </div>
  );
};

export default ReposPage;
