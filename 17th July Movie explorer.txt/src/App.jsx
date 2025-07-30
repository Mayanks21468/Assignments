import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UpcomingMovies from './pages/UpcomingMovies';

const App = () => {
  return (
    <Router>
      <nav className="bg-gray-800 text-white px-4 py-3 flex gap-6">
        <Link to="/movies/upcoming" className="hover:underline">
          Upcoming
        </Link>
      </nav>

      <Routes>
        <Route path="/movies/upcoming" element={<UpcomingMovies />} />
      </Routes>
    </Router>
  );
};

export default App;
