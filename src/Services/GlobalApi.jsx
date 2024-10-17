import axios from 'axios';

const movieBaseURL = 'https://api.themoviedb.org/3';

// const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover';
const movieByGenreBaseURL =
	'https://api.themoviedb.org/3/discover/movie?api_key=daaad13a7d502fbda220ae8a53f0eca9';
const api_key = 'daaad13a7d502fbda220ae8a53f0eca9';

const getTrendingVideos = axios.get(
	movieBaseURL + '/trending/all/day?api_key=' + api_key
);

const getMovieByGenreId = (id) =>
	axios.get(movieByGenreBaseURL + '&with_genres=' + id);

export default {
	getTrendingVideos,
	getMovieByGenreId,
};

// https://api.themoviedb.org/3/trending/all/day?api_key=daaad13a7d502fbda220ae8a53f0eca9
