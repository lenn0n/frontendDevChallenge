import React from "react";

import DefaultWrapper from "@components/Wrappers/DefaultWrapper";

import NotFound from "@pages/FirstStage/NotFound"
import DeployApps from "@pages/HowTo/DeployApps";

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
  }
]
