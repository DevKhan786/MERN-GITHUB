import ProfileInfo from "@/components/ProfileInfo";
import Search from "@/components/Search";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface GitHubProfile {
  login: string;
  avatar_url: string;
  name?: string;
  bio?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
}

const HomePage = () => {
  const [userProfile, setUserProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(false);

  const getUserProfile = async (username = "devkhan786") => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`, {});
      if (!res.ok) throw new Error(`User not found (${res.status})`);
      const data: GitHubProfile = await res.json();
      setUserProfile(data);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const onSearch = async (e: React.FormEvent, username: string) => {
    e.preventDefault();
    setLoading(true);
    setUserProfile(null);
    await getUserProfile(username);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen mx-auto rounded-lg px-4 sm:px-8 py-2 w-full">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Search onSearch={onSearch} />
          {userProfile && <ProfileInfo profile={userProfile} />}
        </>
      )}
    </div>
  );
};

export default HomePage;
