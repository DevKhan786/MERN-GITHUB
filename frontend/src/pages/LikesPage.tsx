import { FaHeart } from "react-icons/fa";

const LikesPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen mx-auto rounded-lg px-4 sm:px-8 py-2 w-full">
      <table className="min-w-full text-xs sm:text-sm text-left bg-glass overflow-hidden">
        <thead className="text-[10px] sm:text-xs md:text-base uppercase bg-glass">
          <tr>
            <th scope="col" className="p-3 sm:p-4">
              No
            </th>
            <th scope="col" className="px-4 sm:px-6 py-2 sm:py-3">
              Username
            </th>
            <th scope="col" className="px-4 sm:px-6 py-2 sm:py-3">
              Date
            </th>
            <th scope="col" className="px-4 sm:px-6 py-2 sm:py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-[10px] sm:text-xs md:text-base">
          <tr className="bg-glass border-b">
            <td className="w-4 p-3 sm:p-4">1</td>
            <th
              scope="row"
              className="flex items-center px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap"
            >
              <img
                className="w-6 h-6 s:w-8 s:h-8 md:w-10 md:h-10 rounded-full"
                src={
                  "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                }
                alt="Jese image"
              />
              <div className="ps-2 sm:ps-3">
                <div className="font-semibold truncate max-w-[100px] sm:max-w-none">
                  dasdas
                </div>
              </div>
            </th>
            <td className="px-4 sm:px-6 py-2 sm:py-4">das</td>
            <td className="px-4 sm:px-6 py-2 sm:py-4">
              <div className="flex items-center text-[10px] sm:text-sm">
                <FaHeart size={18} className="text-red-500 mx-1 sm:mx-2" />
                Liked profile
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LikesPage;
