import ProfileInfo from "@/components/ProfileInfo";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getUserProfile = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.github.com/users/devkhan786");
      const data = await res.json();
      setUserProfile(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-screen mx-auto rounded-lg px-4 sm:px-8 py-2 w-full">
        {loading ? <Spinner /> : <ProfileInfo profile={userProfile} />}
      </div>
    </div>
  );
};

export default HomePage;
