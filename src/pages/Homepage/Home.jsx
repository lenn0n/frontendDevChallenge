import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    if (url){
      navigate(url)
    }
  }
  return <>
    <div className="d-flex align-items-center justify-content-center">
      <div>
        <div className="alert alert-success" role="button" onClick={()=>{ handleNavigate("/404")}}>
          devChallenges.io - 404 Not Found
        </div>
        <div className="alert alert-success" role="button" onClick={()=>{ handleNavigate("/team")}}>
          devChallenges.io - My Team Page
        </div>
        <div className="alert alert-success" role="button" onClick={()=>{ handleNavigate("/interior-consultant")}}>
          devChallenges.io - Interior Consultant
        </div>
        <div className="alert alert-danger" role="button" onClick={()=>{ handleNavigate("/recipe")}}>
          devChallenges.io - Recipe Page (On-Going)
        </div>
    
        <div className="alert alert-primary text-center mt-5" role="button" onClick={()=>{ handleNavigate("/deploy-apps")}}>
          Deploying App Tips
        </div>
        <div className="alert alert-primary text-center" role="button" onClick={()=>{ handleNavigate("/react-boilerplate")}}>
          React + Webpack5 Boilerplate
        </div>
      </div>
    </div>
  </>
}

export default Home