import React from "react";
import { useNavigate } from "react-router-dom";

import Scarecrow from "@assets/images/Scarecrow.png";
const NotFound = () => {
	const navigate = useNavigate();
	const handleBackToHome = () => {
		navigate("/");
	};

	return (
		<>
			<div className="container mx-auto grid">
				<div className="grid place-items-center lg:grid-cols-2">
					<div className="ms-4 me-4 w-[1/4] md:w-9/12 md:ms-0 me-0">
						<img src={Scarecrow} />
					</div>
					<div>
						<div className="title">
							I have bad{" "}
							<span className="hover:text-rose-500">news</span> for
							you
						</div>
						<div className="desc mt-4 mb-4 ms-2 me-2 md:ms-0 me-0">
							The page you are looking for might be removed or is
							temporarily unavailable
						</div>
						<div className="grid place-content-center md:place-content-start">
							<button
								onClick={handleBackToHome}
								className="px-[43px] py-[24px] uppercase font-bold text-white bg-gray-900 mt-4 mb-4 hover:bg-slate-900 hover:rounded-lg"
							>
								Back To Homepage
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;
