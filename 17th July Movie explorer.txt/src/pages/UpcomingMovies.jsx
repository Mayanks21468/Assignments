import React, { useEffect, useState } from 'react';
import { fetchUpcomingMovies, searchMovies } from '../api';
import MovieCard from '../components/MovieCard';

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const getMovies = async () => {
    try {
      setLoading(true);
      const data = searchQuery
        ? await searchMovies(searchQuery)
        : await fetchUpcomingMovies(page);
      setMovies(data.results);
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [page, searchQuery]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Movies</h2>

      <input
        type="text"
        placeholder="Search movies..."
        className="border px-4 py-2 rounded mb-4 w-full max-w-md"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {!loading && !error && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      {!searchQuery && (
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={page === 1}
          >
            Prev
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UpcomingMovies;

