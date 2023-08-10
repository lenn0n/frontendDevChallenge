import React from "react";

import DefaultWrapper from "@components/Wrappers/DefaultWrapper";
import HomePage from "@pages/Homepage/Home"
import NotFound from "@pages/ResponsiveWebDev/FirstStage/NotFound"
import TeamPage from "@pages/ResponsiveWebDev/SecondStage/TeamPage"
import InteriorConsultant from "@pages/ResponsiveWebDev/ThirdStage/InteriorConsultant"
import DeployApps from "@pages/HowTo/DeployApps";
import ReactBoilerplate from "@pages/HowTo/ReactBoilerplate";

export default [
  {
    path: "/",
    element: 
    <div className="container d-flex justify-content-center align-items-center">
      <div>
        <div className="fw-bold mb-3 text-center text-dark">Site Links</div>
        <HomePage/>
      </div>
    </div>,
  },
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
    path: "/interior-consultant",
    element: 
    <DefaultWrapper text="Interior Consultant">
      <InteriorConsultant/>
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
