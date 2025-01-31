import { IoLocationOutline } from "react-icons/io5";
import {
  RiGitRepositoryFill,
  RiUserFollowFill,
  RiUserFollowLine,
} from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { formatMemberSince } from "@/utils/functions";

interface ProfileInfoProps {
  profile: any;
}

const ProfileInfo = ({ profile }: ProfileInfoProps) => {
  const memberSince = formatMemberSince(profile?.created_at);

  if (!profile) return null;
  return (
    <div className="lg:w-1/2 w-full flex flex-col gap-4 md:sticky md:top-10">
      <div className="bg-glass rounded-lg p-4 space-y-2">
        <div className="flex gap-4 items-center justify-center">
          {/* User Avatar */}
          <a href={profile?.html_url} target="_blank" rel="noreferrer">
            <img
              src={profile?.avatar_url}
              className="rounded-md w-16 h-16 sm:w-24 sm:h-24 mb-2"
              alt="User Avatar"
            />
          </a>
          {/* View on Github */}
          <div className="flex gap-2 items-center flex-col">
            <a
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-glass font-medium text-xs sm:text-sm p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2"
            >
              <FaEye size={16} />
              View on Github
            </a>
          </div>
        </div>

        {/* User Bio */}
        {profile?.bio && (
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <TfiThought size={12} />
            <p>{profile?.bio.substring(0, 60)}...</p>
          </div>
        )}

        {/* Location */}
        {profile?.location && (
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <IoLocationOutline size={12} />
            {profile?.location}
          </div>
        )}

        {/* Twitter Username */}
        {profile?.twitter_username && (
          <a
            href={`https://twitter.com/${profile.twitter_username}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-sky-500 text-xs sm:text-sm"
          >
            <FaXTwitter size={12} />
            {profile?.twitter_username}
          </a>
        )}

        {/* Member Since Date */}
        <div className="bg-glass rounded-md p-1">
          <p className="text-gray-600 font-bold text-sm">Member since</p>
          <p className="text-xs font-light tracking-tight">{memberSince}</p>
        </div>

        {/* Email Address */}
        {profile?.email && (
          <div className="bg-glass rounded-md p-1">
            <p className="text-gray-600 font-bold text-sm">Email address</p>
            <p className="text-xs font-light tracking-tight">{profile.email}</p>
          </div>
        )}

        {/* Full Name */}
        {profile?.name && (
          <div className="bg-glass rounded-md p-1">
            <p className="text-gray-600 font-bold text-sm">Full name</p>
            <p className="text-xs font-light tracking-tight">{profile?.name}</p>
          </div>
        )}

        {/* Username */}
        <div className="bg-glass rounded-md p-1">
          <p className="text-gray-600 font-bold text-sm">Username</p>
          <p className="text-xs font-light tracking-tight">{profile?.login}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-2 text-center justify-center items-center">
        {/* Followers Count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-1 flex-1 min-w-[120px]">
          <RiUserFollowFill className="w-4 h-4 text-blue-800" />
          <p className="text-xs sm:text-sm">Followers: {profile?.followers}</p>
        </div>

        {/* Following Count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-1 flex-1 min-w-[120px]">
          <RiUserFollowLine className="w-4 h-4 text-blue-800" />
          <p className="text-xs sm:text-sm">Following: {profile?.following}</p>
        </div>

        {/* Number of Public Repos */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-1 flex-1 min-w-[120px]">
          <RiGitRepositoryFill className="w-4 h-4 text-blue-800" />
          <p className="text-xs sm:text-sm">
            Public repos: {profile?.public_repos}
          </p>
        </div>

        {/* Number of Public Gists */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-1 flex-1 min-w-[120px]">
          <RiGitRepositoryFill className="w-4 h-4 text-blue-800" />
          <p className="text-xs sm:text-sm">
            Public gists: {profile?.public_gists}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
