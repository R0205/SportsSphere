import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
/* import LiveScoresPage from "./pages/LiveScoresPage";
import PollsPage from "./pages/PollsPage";
import ForumsPage from "./pages/ForumsPage"; */
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import LiveScores from "./components/LiveScores";
import Polls from "./components/Polls";
import Forums from "./components/Forums";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-scores" element={<LiveScores />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
