import React from "react";
import ProfilePicture from "@assets/images/profilePhoto.png";

import G1 from "@assets/images/g1.png";
import G2 from "@assets/images/g2.png";
import G3 from "@assets/images/g3.png";
import G4 from "@assets/images/g4.png";
import G5 from "@assets/images/g5.png";
import G6 from "@assets/images/g6.png";
import Footer from "@components/Footer/Footer";

const Gallery = () => {
	return (
		<>
			<div className="container mx-auto flex flex-wrap justify-center">
				<div className="flex items-center flex-col flex-wrap">
					<img
						src={ProfilePicture}
						alt="pf"
						height="156px"
						width="156px"
						className="mg-profile-photo"
					/>
					<div className="mg-name">Rodney Cotton</div>
					<div className="mg-location mb-4">Helsinki, Finland</div>
					<div className="grid grid-cols-3 gap-2 scale-90 md:scale-100">
						<div className="mg-stat group text-center">
							<div className="mg-stat-title group-hover:text-white">
								100
							</div>
							<div className="mg-stat-desc group-hover:text-white">
								Posts
							</div>
						</div>
						<div className="mg-stat">
							<div className="mg-stat-title">2,242</div>
							<div className="mg-stat-desc">Follower</div>
						</div>
						<div className="mg-stat">
							<div className="mg-stat-title">1,432</div>
							<div className="mg-stat-desc">Following</div>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-[12px] md:gap-[32px] mt-[12px] md:mt-[64px] m-4">
						<div className="">
							<img
								src={G1}
								alt="g1"
								className="gp-img hover:scale-105 transition"
								height="300px"
							/>
						</div>
						<div className="col-span-2">
							<img
								src={G2}
								alt="g2"
								className="gp-img hover:scale-105 transition"
								height="300px"
							/>
						</div>
						<div className="col-span-2 ">
							<div>
								<img
									src={G3}
									alt="g3"
									className="gp-img hover:scale-105 transition"
									height="300px"
								/>
							</div>
							<div className="grid grid-cols-2 gap-[12px] md:gap-[32px] mt-[12px] md:mt-[32px]">
								<div className="">
									<img
										src={G6}
										alt="g6"
										className="gp-img hover:scale-105 transition"
										height="300px"
									/>
								</div>
								<div className="">
									<img
										src={G5}
										alt="g5"
										className="gp-img hover:scale-105 transition"
										height="300px"
									/>
								</div>
							</div>
						</div>
						<div className="">
							<img
								src={G4}
								alt="g4"
								className="gp-img gp-img-extended hover:scale-105 transition"
							/>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Gallery;
