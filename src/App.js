import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
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
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
