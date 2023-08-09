import React from "react";

import DefaultWrapper from "@components/Wrappers/DefaultWrapper";

import NotFound from "@pages/FirstStage/NotFound"
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
