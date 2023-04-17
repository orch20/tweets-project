import { Routes, Route } from "react-router-dom";
import "./App.css";
import Tweets from "./pages/tweets/Tweets";
import HomePage from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tweets" element={<Tweets />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
