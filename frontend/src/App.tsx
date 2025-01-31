import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";
import Spinner from "./components/Spinner";
import ReposPage from "./pages/ReposPage";
import { Toaster } from "react-hot-toast";

function App() {
  const loading = false;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <div className="flex text-white">
        <Sidebar />
        <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/likes" element={<LikesPage />} />
            <Route path="/repos" element={<ReposPage />} />
          </Routes>
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
