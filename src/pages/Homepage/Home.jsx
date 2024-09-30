import React from "react";
import LazyLoad from 'react-lazyload';
import { useNavigate } from "react-router-dom";
import cta from "../../assets/images/cta.webp"
import SS1 from "../../assets/images/cta/SS1.webp"
import SS2 from "../../assets/images/cta/SS2.webp"
import SS3 from "../../assets/images/cta/SS3.webp"
import SS4 from "../../assets/images/cta/SS4.webp"
import SS5 from "../../assets/images/cta/SS5.webp"
import SS6 from "../../assets/images/cta/SS6.webp"
import SS7 from "../../assets/images/cta/SS7.webp"
import SS8 from "../../assets/images/cta/SS8.webp"
import SS9 from "../../assets/images/cta/SS9.webp"
import SS10 from "../../assets/images/cta/SS10.webp"

const Home = () => {
	const navigate = useNavigate();
	const handleNavigate = (url) => {
		if (url) {
			navigate(url);
			window.scrollTo(0, 0)
		}
	};

	const list = [
		{
			title: "404 Not Found",
			url: "/404",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
			preview: SS1
		},
		{ title: "My Team Page", url: "/team", color: "bg-[#212936] hover:text-[#000] hover:bg-white", preview: SS2 },
		{
			title: "Interior Consultant",
			url: "/interior-consultant",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
			preview: SS3
		},
		{ title: "Recipe Page", url: "/recipe", color: "bg-[#212936] hover:text-[#000] hover:bg-white", preview: SS4 },
		{ title: "My Gallery", url: "/gallery", color: "bg-[#212936] hover:text-[#000] hover:bg-white", preview: SS5 },
		{
			title: "Checkout Page",
			url: "/checkout",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
			preview: SS6
		},
		{
			title: "Edie Homepage",
			url: "/edie-homepage",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
			preview: SS7
		},
		{
			title: "Portfolio",
			url: "/portfolio",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
			preview: SS8
		},
		{
			title: "Deploying App Tips",
			url: "/deploy-apps",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
			prefixTitle: " ",
			preview: SS9
		},
		{
			title: "React + WP5 + Typescript",
			url: "/react-boilerplate",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
			prefixTitle: " ",
			preview: SS10
		},
	];


	const Showcase = ({
		index,
		preview,
		url,
		title,
		prefixTitle = "",
	}) => {
		return <LazyLoad height={200}>
			<div className="relative drop-shadow">
				<button className="flex flex-col items-center " onClick={() => { handleNavigate(url); }}>
					<img src={preview}
						className="w-[40vw] h-[40vw] sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] lg:w-[12vw] lg:h-[12vw] object-cover border-2 border-[#515151] rounded-lg drop-shadow" />
				</button>
				<div className="h-7 w-7 bg-gray-700 text-white text-sm font-bold absolute top-0 left-0 w-full rounded-md flex items-center justify-center drop-shadow">
					{prefixTitle} {title}</div>
				<div className="absolute bottom-1 right-1 h-7 w-7 rounded-md flex items-center justify-center drop-shadow bg-gray-200 bg-opacity-[.8] text-sm font-bold">{index}</div>
			</div>
		</LazyLoad>
	}

	return (
		<div className="">
			<div className="relative">
				<LazyLoad height={200}>
					<img src={cta} className="h-[30vh] md:h-[40vh] lg:h-[50vh] w-screen object-cover" />
				</LazyLoad>
				<div className="md:absolute top-[5vw] lg:left-[15vw] xl:left-[20vw] xl:top-[7vw] text-black md:text-white drop-shadow drop-shadow-xl p-4 flex flex-col items-center">
					<div className="font-bold text-[20px] md:text-[29px] border-b-2 pb-2 text-center">Front-End Web Developer Challenge</div>
					<div className="font-bold flex mt-1 text-center justify-center text-[10px] sm:text-[12px] md:text-[16px]">
						<div className="">ReactJS •</div>
						<div className="ms-1">Tailwind •</div>
						<div className="ms-1">Webpack •</div>
						<div className="ms-1">JavaScript •</div>
						<div className="ms-1">NodeJS</div>
					</div>
				</div>
			</div>
			<div className="pb-1 border-b-2 drop-shadow" />

			<div className="mt-5 flex items-center justify-center">
				<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-10">
					{list.map((data, index) => {
						return <Showcase {...data} index={index + 1} />;
					})}
				</div>
			</div>

			<div className="my-10"></div>
			<div className="flex items-center justify-center mb-4 ">
				<span className="font-bold ms-2 me-2">Lennon Benedict Jansuy</span>
				<div className="text-rose-500 font-bold">
					- lenn0n.xyz
				</div>
			</div>
		</div>
	);
};

export default Home;
