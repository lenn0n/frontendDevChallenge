import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="py-[5%] flex items-center justify-center flex-wrap flex-col">
				<div className="flex ">
					<div>created by </div>
					<span className="font-bold ms-2 me-2">lenn0n</span>
					<div className="text-rose-500 font-bold">
						- devChallenges.io
					</div>
				</div>
				<div
					className="mt-4 mb-4 text-dark font-bold hover:scale-105 hover:text-red-600"
					onClick={() => {
						navigate("/");
					}}
					role="button"
				>
					BACK TO HOMEPAGE
				</div>
			</div>
		</>
	);
};

export default Footer;
