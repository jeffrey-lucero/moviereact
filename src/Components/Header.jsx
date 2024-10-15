import React from 'react';
import logo from './../assets/Images/logo.png';
import {
	HiHome,
	HiMagnifyingGlass,
	HiStar,
	HiPlayCircle,
	HiTv,
} from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
	const menu = [
		{
			name: 'HOME',
			icon: HiHome,
		},
		{
			name: 'SEARCH',
			icon: HiMagnifyingGlass,
		},
		{
			name: 'WATCH LIST',
			icon: HiPlus,
		},
		{
			name: 'ORIGINALS',
			icon: HiStar,
		},
		{
			name: 'MOVIES',
			icon: HiPlayCircle,
		},
		{
			name: 'SERIES',
			icon: HiTv,
		},
	];
	return (
		<div>
			<img src={logo} className="w-[80px] md:w-[115px] object-cover" id="asd" />
			{menu.map((item) => (
				<HeaderItem />
			))}
		</div>
	);
}

export default Header;
