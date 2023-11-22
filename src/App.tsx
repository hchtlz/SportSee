import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Home from "./pages/Home/Home";
import UserHome from "./pages/UserHome/UserHome"
import UserActivity from "./pages/UserActivity/UserActivity";
import UserAverageSessions from "./pages/UserAverageSessions/UserAverageSessions";
import UserPerformance from "./pages/UserPerformance/UserPerformance";
import aside_links from "./helpers/asideLinks"

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

// TODO : Corriger et générer les pages 404

function NotFound() {
  return (
    <div>
      <h2>Page non trouvée</h2>
      <p>Désolé, la page que vous cherchez n'existe pas.</p>
    </div>
  );
}
