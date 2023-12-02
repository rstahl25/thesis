import logo from './logo.svg';
import './App.css';
import { NavLink, Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Courses from './pages/Courses';

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
        </ul>
      </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>

    </div>
  );
}

export default App;
