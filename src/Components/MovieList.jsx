import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5';

function MovieList({ genreId }) {
	const [movieList, setMovieList] = useState([]);
	const elementRef = useRef(null);
	useEffect(() => {
		getMovieByGenreId();
	}, []);
	const getMovieByGenreId = () => {
		GlobalApi.getMovieByGenreId(genreId).then((resp) => {
			console.log(resp.data.results);
			setMovieList(resp.data.results);
		});
	};
	const SliderRight = (element) => {
		element.scrollLeft += 500;
	};
	const SliderLeft = (element) => {
		element.scrollLeft -= 500;
	};
	return (
		<div className="relative">
			<IoChevronBackOutline
				className=" text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute left-0 mt-[150px] "
				onClick={() => SliderLeft(elementRef.current)}
			/>

			<div
				ref={elementRef}
				className="flex overflow-x-auto gap-8 pt-5 px-3 pb-5 scrollbar-hide scroll-smooth "
			>
				{movieList.map((item, i) => (
					<div className="flex-shrink-0 ">
						<MovieCard movie={item} />
					</div>
				))}
			</div>
			<IoChevronForward
				className=" text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0  absolute right-0 mt-[150px] "
				onClick={() => SliderRight(elementRef.current)}
			/>
		</div>
	);
}

export default MovieList;
