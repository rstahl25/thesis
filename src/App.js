import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <Link to="/" class="list">
            Home
          </Link>
          <Link to="/courses" class="list">
            Courses
          </Link>
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
