import React from "react";
import NotFound from "@pages/FirstStage/NotFound"
import DefaultWrapper from "@components/Wrappers/DefaultWrapper";
export default [
  {
    path: "*",
    element: 
    <DefaultWrapper text="404 Not Found">
      <NotFound/>
    </DefaultWrapper>,
  }
]
