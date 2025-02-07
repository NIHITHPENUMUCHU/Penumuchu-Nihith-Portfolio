import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/Contact';
import { Background } from './components/Background';
import { Resume } from './pages/Resume';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#0B1120] text-white overflow-hidden">
        <Background />
        <Navigation />
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Services />
              <Projects />
              <Contact />
            </main>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App