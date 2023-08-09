import React from "react";
import { useNavigate } from "react-router-dom";

import Scarecrow from "@assets/images/Scarecrow.png"
const NotFound = () => {
  const navigate = useNavigate()
  const handleBackToHome = () => {
    navigate("/")
  }

  return (<>
    <div className="container row align-items-center justify-content-center m-auto">
      <div className="col-lg-6 col-sm-12 img-crow ">
       <img src={Scarecrow}/>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="title">
            I have bad news for you
        </div>
        <div className="desc mt-4 mb-4">
            The page you are looking for might be removed or is temporarily unavailable
        </div>
        <button onClick={handleBackToHome} className="btnHome mt-4 mb-4">
          Back To Homepage
        </button>
      </div>
    </div>
  </>)

} 

export default NotFound