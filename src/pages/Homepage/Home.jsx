import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const handleNavigate = (url) => {
		if (url) {
			navigate(url);
		}
	};

	const list = [
		{
			title: "404 Not Found",
			url: "/404",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
		},
		{ title: "My Team Page", url: "/team", color: "bg-[#212936] hover:text-[#000] hover:bg-white" },
		{
			title: "Interior Consultant",
			url: "/interior-consultant",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
		},
		{ title: "Recipe Page", url: "/recipe", color: "bg-[#212936] hover:text-[#000] hover:bg-white" },
		{ title: "My Gallery", url: "/gallery", color: "bg-[#212936] hover:text-[#000] hover:bg-white" },
		{
			title: "Checkout Page",
			url: "/checkout",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
		},
		{
			title: "Edie Homepage",
			url: "/edie-homepage",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
		},
		{
			title: "Portfolio",
			url: "/portfolio",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
		},
		{
			title: "Deploying App Tips",
			url: "/deploy-apps",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
			prefixTitle: " ",
		},
		{
			title: "React + Webpack5 Boilerplate",
			url: "/react-boilerplate",
			color: "bg-[#212936] hover:text-[#000] hover:bg-white",
			prefixTitle: " ",
		},
	];

	const Component = ({
		index = 1,
		color = "bg-green-400",
		url,
		title,
		prefixTitle = "",
	}) => {
		return (
			<div
				className={`p-5 ${color} ms-2 me-2 text-white rounded-lg h-[70px] basis-1/2 items-center justify-center hover:bg-slate-800`}
				role="button"
				onClick={() => {
					handleNavigate(url);
				}}
			>
				<span className="leading-7 px-[7px] py-[2px] md:py-[10px] md:px-[16px] rounded-b-full rounded-t-3xl bg-white text-black font-bold me-2">
					{index}
				</span>
				<span className="font-bold leading-7">
					{prefixTitle} {title}
				</span>
			</div>
		);
	};
	return (
		<div className=" bg-hero-pattern bg-cover bg-[#121826] ">
			<div className="block lg:absolute m-4 mt-0 pt-4 font-mon">
				<div
					className="font-bold text-white text-[29px] hover:text-rose-500"
					role="button"
				>
					RESPONSIVE WEB DEVELOPER PATH
				</div>
				<div
					className="font-bold text-slate-400 break-all  text-[16px] md:text-[16px] hover:text-rose-500"
					role="button"
				>
					https://legacy.devchallenges.io/paths/responsive-web-developer
				</div>

			</div>
			<div className="container font-mon mx-auto flex pb-5 justify-center items-center flex-col gap-5 md:h-[100vh!important] h-[100%!important] ">
				<div className="grid md:grid-cols-2 gap-4">
					{list.map((data, index) => {
						return <Component {...data} index={index + 1} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
