import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Resources from './pages/Resources';
import Careers from './pages/Careers';

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <NavLink to="/" class="list">
            Home
          </NavLink>
          <NavLink to="/courses" class="list">
            Courses
          </NavLink>
          <NavLink to="/resources" class="list">
            Resources
          </NavLink>
          <NavLink to="/careers" class="list">
            Careers
          </NavLink>
        </ul>
      </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>

    </div>
  );
}

export default App;
