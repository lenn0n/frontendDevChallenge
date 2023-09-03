import React from "react";
import ProfilePicture from "@assets/images/profilePhoto.png";

import G1 from "@assets/images/g1.png";
import G2 from "@assets/images/g2.png";
import G3 from "@assets/images/g3.png";
import G4 from "@assets/images/g4.png";
import G5 from "@assets/images/g5.png";
import G6 from "@assets/images/g6.png";

const Gallery = () => {
	return (
		<>
			<div className="d-flex align-items-center justify-content-center">
				<div className="d-flex flex-column align-items-center">
					<img
						src={ProfilePicture}
						alt="pf"
						height="156px"
						width="156px"
						className="mg-profile-photo"
					/>
					<div className="mg-name">Rodney Cotton</div>
					<div className="mg-location">Helsinki, Finland</div>
					<div className="d-flex gap-3 flex-wrap align-items-center justify-content-center">
						<div className="mg-stat group">
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
					<div className="mt-5 d-flex flex-column gap-4 ms-4 me-4">
						<div className="d-flex flex-wrap">
							<div className="col-4 pe-2">
								<img
									src={G1}
									alt="g1"
									className="gp-img hover:scale-105 transition"
									height="300px"
								/>
							</div>
							<div className="col-8 ps-3">
								<img
									src={G2}
									alt="g2"
									className="gp-img hover:scale-105 transition"
									height="300px"
								/>
							</div>
						</div>
						<div className="d-flex">
							<div className="d-flex gap-4 flex-column col-9 pe-2">
								<div>
									<img
										src={G3}
										alt="g3"
										className="gp-img hover:scale-105 transition"
										height="300px"
									/>
								</div>
								<div className="d-flex flex-wrap">
									<div className="col-6 pe-2">
										<img
											src={G6}
											alt="g6"
											className="gp-img hover:scale-105 transition"
											height="300px"
										/>
									</div>
									<div className="col-6 ps-3">
										<img
											src={G5}
											alt="g5"
											className="gp-img hover:scale-105 transition"
											height="300px"
										/>
									</div>
								</div>
							</div>
							<div className="d-flex col-3 ps-3">
								<img
									src={G4}
									alt="g4"
									className="gp-img gp-img-extended hover:scale-105 transition"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Gallery;
