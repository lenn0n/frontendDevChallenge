import React from "react";
import Photo1 from "@assets/images/photo1.png";
import Photo2 from "@assets/images/photo2.png";
import Photo3 from "@assets/images/photo3.png";
import Photo4 from "@assets/images/photo4.png";
import Photo5 from "@assets/images/photo5.png";
import Photo6 from "@assets/images/photo6.png";

const TeamPage = () => {
	const CrewList = [
		{
			avatar: Photo1,
			position: "Product owner",
			name: "Bill Mahoney",
		},
		{
			avatar: Photo2,
			position: "Art director",
			name: "Saba Cabrera",
		},
		{
			avatar: Photo3,
			position: "Tech Lead",
			name: "Shae Le",
		},
		{
			avatar: Photo4,
			position: "UX Designer",
			name: "Skylah Lu",
		},
		{
			avatar: Photo5,
			position: "Developer",
			name: "Griff Richards",
		},
		{
			avatar: Photo6,
			position: "Developer",
			name: "Stan John",
		},
	];

	const Crew = ({ data }) => {
		return (
			<div className="col-lg-4 col-sm-6 crew-frame">
				<div className="flex justify-center">
					<div>
						<img
							src={data?.avatar}
							alt="photo1"
							className="crew-avatar hover:rounded-xl hover:scale-125 transition"
						/>
						<div className="mt-2 crew-name mb-4">{data?.name}</div>
					</div>
					<div className="crew-position">{data?.position}</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="flex justify-center">
				<div style={{ width: "1000px" }}>
					<div className="row">
						<div className="team-title col-lg-6 col-sm-12">
							<div className="m-4">The creative crew</div>
						</div>
						<div className="col-lg-6 col-sm-12">
							<div className="m-4">
								<div className="fw-bold">WHO WE ARE</div>
								<div>
									We are team of creatively diverse. driven.
									innovative individuals working in various locations
									from the world.
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5 row">
						{CrewList.map((data) => (
							<Crew data={data} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default TeamPage;
