import React, { useState } from 'react';
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
	const [toggle, setToggle] = useState(false);
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
		<div className="flex items-center justify-between p-5 ">
			<div className="flex gap-8 items-center">
				<img src={logo} className="w-[60px] md:w-[100px] object-cover" />
				<div className="hidden md:flex gap-8">
					{menu.map((item, i) => (
						<HeaderItem key={i} name={item.name} Icon={item.icon} />
					))}
				</div>
				<div className="flex md:hidden gap-5">
					{menu.map(
						(item, i) => i < 3 && <HeaderItem name={''} Icon={item.icon} />
					)}
					<div className="md:hidden" onClick={() => setToggle(!toggle)}>
						<HeaderItem name={''} Icon={HiDotsVertical} />
						{toggle ? (
							<div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-3">
								{menu.map(
									(item, i) =>
										i > 2 && <HeaderItem name={item.name} Icon={item.icon} />
								)}
							</div>
						) : null}
					</div>
				</div>
			</div>

			<img
				src="https://featuredanimation.com/wp-content/uploads/2022/02/Mickey-Mouse-Disney-Plus-Icon.jpg"
				className="ml-auto w-[40px] rounded-full"
			/>
		</div>
	);
}

export default Header;
