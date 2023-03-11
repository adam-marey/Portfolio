import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import ProjectsContainer from './pages/ProjectsContainer';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsContainer />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}
export default App;
