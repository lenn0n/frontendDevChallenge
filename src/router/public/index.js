import React from "react";

import DefaultWrapper from "@components/Wrappers/DefaultWrapper";

import NotFound from "@pages/ResponsiveWebDev/FirstStage/NotFound"
import TeamPage from "@pages/ResponsiveWebDev/SecondStage/TeamPage"
import DeployApps from "@pages/HowTo/DeployApps";
import ReactBoilerplate from "@pages/HowTo/ReactBoilerplate";

export default [
  {
    path: "*",
    element: 
    <DefaultWrapper text="404 Not Found">
      <NotFound/>
    </DefaultWrapper>,
  },
  {
    path: "/team",
    element: 
    <DefaultWrapper text="Team Page">
      <TeamPage/>
    </DefaultWrapper>,
  },
  {
    path: "/deploy-apps",
    element: 
    <DefaultWrapper text="Deploying App">
      <DeployApps/>
    </DefaultWrapper>,
  },
  {
    path: "/react-boilerplate",
    element: 
    <DefaultWrapper text="React Boilerplate">
      <ReactBoilerplate/>
    </DefaultWrapper>,
  }
]
