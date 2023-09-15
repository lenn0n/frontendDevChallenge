import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const handleNavigate = (url) => {
		if (url) {
			navigate(url);
		}
	};

	const Component = ({
		color = "bg-green-400",
		url,
		title,
		prefixTitle = "devChallenges.io - ",
	}) => {
		return (
			<div
				className={`p-5 ${color} text-white rounded-lg w-full gap-4`}
				role="button"
				onClick={() => {
					handleNavigate(url);
				}}
			>
				{prefixTitle} {title}
			</div>
		);
	};
	return (
		<>
			<div className="container mx-auto grid">
				<div className="grid grid-cols-4 place-items-center place-content-center gap-4 mx-auto">
					<Component
						title="404 Not Found"
						url="/404"
						color="bg-green-400"
					/>
					<Component
						title="My Team Page"
						url="/team"
						color="bg-red-400"
					/>
					<Component
						title="Interior Consultant"
						url="/interior-consultant"
						color="bg-yellow-400"
					/>
					<Component
						title="Recipe Page"
						url="/recipe"
						color="bg-blue-400"
					/>
					<Component
						title="My Gallery"
						url="/gallery"
						color="bg-purple-400"
					/>
					<Component
						title="Checkout (On-Going)"
						url="/checkout"
						color="bg-slate-400"
					/>
					<Component
						title="Deploying App Tips"
						url="/deploy-apps"
						color="bg-red-700"
						prefixTitle=" "
					/>
					<Component
						title="React + Webpack5 Boilerplate"
						url="/react-boilerplate"
						color="bg-slate-800 grow-0"
						prefixTitle=" "
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
