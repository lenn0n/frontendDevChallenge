import React from "react";

import DefaultWrapper from "@components/Wrappers/DefaultWrapper";
import HomePage from "@pages/Homepage/Home";
import NotFound from "@pages/ResponsiveWebDev/FirstStage/NotFound";
import TeamPage from "@pages/ResponsiveWebDev/SecondStage/TeamPage";
import InteriorConsultant from "@pages/ResponsiveWebDev/ThirdStage/InteriorConsultant";
import DeployApps from "@pages/HowTo/DeployApps";
import ReactBoilerplate from "@pages/HowTo/ReactBoilerplate";
import Recipe from "@pages/ResponsiveWebDev/FourthStage/Recipe";
import Gallery from "@pages/ResponsiveWebDev/FifthStage/Gallery";
import Checkout from "@pages/ResponsiveWebDev/SixthStage/Checkout";
import EdieHomepage from "@pages/ResponsiveWebDev/SeventhStage/EdieHomepage";

export default [
	{
		path: "/",
		element: (
			<div>
				<HomePage />
			</div>
		),
	},
	{
		path: "*",
		element: (
			<DefaultWrapper text="404 Not Found">
				<NotFound />
			</DefaultWrapper>
		),
	},
	{
		path: "/team",
		element: (
			<DefaultWrapper text="Team Page">
				<TeamPage />
			</DefaultWrapper>
		),
	},
	{
		path: "/interior-consultant",
		element: (
			<DefaultWrapper text="Interior Consultant">
				<InteriorConsultant />
			</DefaultWrapper>
		),
	},
	{
		path: "/recipe",
		element: (
			<DefaultWrapper text="Recipe Page">
				<Recipe />
			</DefaultWrapper>
		),
	},
	{
		path: "/gallery",
		element: (
			<DefaultWrapper text="My Gallery">
				<Gallery />
			</DefaultWrapper>
		),
	},
	{
		path: "/checkout",
		element: (
			<DefaultWrapper text="Checkout Page">
				<Checkout />
			</DefaultWrapper>
		),
	},
	{
		path: "/edie-homepage",
		element: (
			<DefaultWrapper text="Checkout Page">
				<EdieHomepage />
			</DefaultWrapper>
		),
	},
	{
		path: "/deploy-apps",
		element: (
			<DefaultWrapper text="Deploying App">
				<DeployApps />
			</DefaultWrapper>
		),
	},
	{
		path: "/react-boilerplate",
		element: (
			<DefaultWrapper text="React Boilerplate">
				<ReactBoilerplate />
			</DefaultWrapper>
		),
	},
];
