import "./App.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import Home from "./components/Home/Home";
import Skill from "./components/skills/Skill";
import JoinMe from "./components/JoinMe/JoinMe";
import Alstom from "./components/Experiences/Alstom";
import GT from "./components/Experiences/GT";
import Qualifications from "./components/qualification/Qualifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogOut from "./components/Login,Logout/LogOut";
import Projects from "./components/project/Projects";
import Login from "./components/Login,Logout/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/Qualifications" element={<Qualifications />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Alstom" element={<Alstom />} />
          <Route path="/JoinMe" element={<JoinMe />} />
          <Route path="/GT" element={<GT />} />
          <Route path="/LogOut" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
