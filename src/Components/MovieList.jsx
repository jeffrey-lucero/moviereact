import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';

function MovieList({ genreId }) {
	const [movieList, setMovieList] = useState([]);
	useEffect(() => {
		getMovieByGenreId();
	}, []);
	const getMovieByGenreId = () => {
		GlobalApi.getMovieByGenreId(genreId).then((resp) => {
			console.log(resp.data.results);
			setMovieList(resp.data.results);
		});
	};
	return (
		<div>
			{movieList.map((item, i) => (
				<div>
					<MovieCard movie={item} />
				</div>
			))}
		</div>
	);
}

export default MovieList;
