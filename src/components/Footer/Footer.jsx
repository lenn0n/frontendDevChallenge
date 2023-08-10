import React from "react"
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
	return (
		<>
      <div className="footer">
      created by <span className="fw-bold ms-2 me-2">lenn0n</span> - devChallenges.io
      </div>
      <div className="text-center mb-4 text-dark fw-bold" onClick={()=>{ navigate("/")}} role="button">BACK TO HOMEPAGE</div>
    </>
	)
}

export default Footer