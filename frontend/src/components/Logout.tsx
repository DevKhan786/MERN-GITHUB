import { MdLogout } from "react-icons/md";

const Logout = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img
        src={
          "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        }
        className="w-6 h-6 md:w-10 md:h-10 rounded-full border border-gray-800"
      />

      <div className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800">
        <MdLogout className="text-base md:text-2xl" />
      </div>
    </div>
  );
};

export default Logout;
