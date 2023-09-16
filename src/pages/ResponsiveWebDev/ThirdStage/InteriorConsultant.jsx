import React, { useState } from "react";

import ICCover from "@assets/images/ic-cover.png";
import ICAvatar from "@assets/images/ic-avatar.png";
import Burger from "@assets/images/burger.png";

const InteriorConsultant = () => {
	const [openNav, setOpenNav] = useState(false);
	return (
		<>
			<div className={`offcanvas2 ${openNav ? "--show" : ""}`}>
				<div className="close-nav mt-4">
					<span
						className="material-icons text-white"
						onClick={() => {
							setOpenNav(!openNav);
						}}
						role="button"
					>
						ic_close
					</span>
				</div>

				<div className="flex flex-col gap-4 h-100 justify-center items-center text-white">
					<div
						className="ic-header-item ic-header-menu-selected"
						role="button"
					>
						Home
					</div>
					<div className="ic-header-item" role="button">
						Collection
					</div>
					<div className="ic-header-item" role="button">
						About
					</div>
					<div className="ic-header-item" role="button">
						Contact
					</div>
				</div>
			</div>
			<div className="interior-consultant-container">
				<div className="flex justify-between items-center">
					<div>
						<div className="ic-header-logo">THIS INTERIOR</div>
					</div>
					<div className="ic-header-menu gap-5">
						<div
							className="ic-header-item ic-header-menu-selected"
							role="button"
						>
							Home
						</div>
						<div className="ic-header-item" role="button">
							Collection
						</div>
						<div className="ic-header-item" role="button">
							About
						</div>
						<div className="ic-header-item" role="button">
							Contact
						</div>
					</div>
					<div
						className="hamburger"
						role="button"
						onClick={() => {
							setOpenNav(!openNav);
						}}
					>
						<img src={Burger} width={50} height={50} alt="" />
					</div>
				</div>

				<div className="mt-5 flex flex-wrap items-center justify-center">
					<div className="basis-full md:basis-1/2">
						<div className="col-9">
							<div className="ic-body-title">Modern interior</div>
							<div className="ic-body-desc">
								A full-Service residential & commercial interior
								design and staging company offering professional
								organizing & eco-services.
							</div>
							<div
								className="mt-5 fw-bold ic-header-text mb-4 flex gap-2"
								role="button"
							>
								Read more{" "}
								<span className="material-icons">
									arrow_right_alt
								</span>
							</div>
						</div>
					</div>

					<div className="basis-full md:basis-1/2">
						<img src={ICCover} alt="Loading" className="ic-cover" />
						<div className="flex justify-end">
							<div className="ic-author-container">
								<div className="flex items-center m-4">
									<img
										src={ICAvatar}
										className="ic-avatar"
										alt="author"
										height={50}
										width={50}
									/>
									<div className="ms-3">
										<div className="ic-author">Aliza Webber</div>
										<div className="ic-position  hover:text-white">
											Interior designer
										</div>
									</div>
								</div>
								<div
									className="ic-banner ps-4 pe-4 pt-1"
									style={{ width: "287px" }}
								>
									Designed in 2020 by Aliza Webber
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InteriorConsultant;
