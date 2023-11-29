import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import aside_links from "./helpers/asideLinks"
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NotFound from "./pages/404/404";
import UserActivity from "./pages/UserActivity/UserActivity";
import UserAverageSessions from "./pages/UserAverageSessions/UserAverageSessions";
import UserHome from "./pages/UserHome/UserHome"
import UserPerformance from "./pages/UserPerformance/UserPerformance";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Aside aside_links={aside_links} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="id/:userId" element={<UserHome />} />
          <Route path="/user/:userId/activity" element={<UserActivity />} />
          <Route path="/user/:userId/average-sessions" element={<UserAverageSessions />} />
          <Route path="/user/:userId/performance" element={<UserPerformance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
			</main>
    </div>
  )
}