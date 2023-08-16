import React from "react"
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
	return (
		<>
      <div className="footer d-flex flex-wrap">
      <div>created by </div>
      <span className="fw-bold ms-2 me-2">lenn0n</span> 
      <div>- devChallenges.io</div>
      </div>
      <div className="text-center mb-4 text-dark fw-bold" onClick={()=>{ navigate("/")}} role="button">BACK TO HOMEPAGE</div>
    </>
	)
}

export default Footer