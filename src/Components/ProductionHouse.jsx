import React from 'react';

import disney from './../assets/Images/disney.png';
import marvel from './../assets/Images/marvel.png';
import nationalG from './../assets/Images/nationalG.png';
import pixar from './../assets/Images/pixar.png';
import starwar from './../assets/Images/starwar.png';

import disneyV from './../assets/Videos/disney.mp4';
import marvelV from './../assets/Videos/marvel.mp4';
import nationalGV from './../assets/Videos/nationalG.mp4';
import pixarV from './../assets/Videos/pixar.mp4';
import starwarV from './../assets/Videos/star-wars.mp4';

const ProductionHouseList = [
	{
		id: 1,
		image: disney,
		video: disneyV,
	},
	{
		id: 2,
		image: pixar,
		video: pixarV,
	},
	{
		id: 3,
		image: marvel,
		video: marvelV,
	},
	{
		id: 4,
		image: starwar,
		video: starwarV,
	},
	{
		id: 5,
		image: nationalG,
		video: nationalGV,
	},
];
function ProductionHouse() {
	return (
		<div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
			{ProductionHouseList.map((item) => (
				<div className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black">
					<video
						src={item.video}
						autoPlay
						muted
						loop
						playsInline
						className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
					/>
					<img src={item.image} className="w-full z-[1]" />
				</div>
			))}
		</div>
	);
}

export default ProductionHouse;
