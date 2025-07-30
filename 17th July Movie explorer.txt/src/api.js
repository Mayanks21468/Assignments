import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchUpcomingMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
    },
  });
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
    },
  });
  return response.data;
};


// File: src/components/MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
  const {
    title,
    poster_path,
    release_date,
    original_language,
    vote_average,
    overview,
  } = movie;

  return (
    <div className="bg-white rounded shadow-md overflow-hidden hover:scale-105 transition-transform">
      <img
        className="w-full h-72 object-cover"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">Release: {release_date}</p>
        <p className="text-sm text-gray-600 mb-1">Language: {original_language}</p>
        <p className="text-sm text-gray-600 mb-1">Rating: {vote_average}</p>
        <p className="text-sm text-gray-800">
          {overview.length > 150 ? overview.substring(0, 150) + '...' : overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
