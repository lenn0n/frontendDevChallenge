import React from "react"

const Header = ({ text }) => {
	return (
		<div className="header">
      <p>{ text || "There is nothing." }</p>
    </div>
	)
}

export default Header