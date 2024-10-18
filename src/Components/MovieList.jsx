import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5';

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
		<div className="flex overflow-x-auto gap-8 pt-5 px-3 pb-5 scrollbar-hide scroll-smooth ">
			{movieList.map((item, i) => (
				<div className="flex-shrink-0 ">
					<MovieCard movie={item} />
				</div>
			))}
		</div>
	);
}

export default MovieList;
