import React from "react";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

const DefaultWrapper = ({ children, text }) => {
	return (
		<>
			<Header text={text} />
			{children}
		</>
	);
};

export default DefaultWrapper;
