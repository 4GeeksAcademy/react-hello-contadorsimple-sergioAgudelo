import React from "react";

const Home = (props) => {
	const six = Math.floor(props.seconds / 100000) % 10;
	const five = Math.floor(props.seconds / 10000) % 10;
	const four = Math.floor(props.seconds / 1000) % 10;
	const three = Math.floor(props.seconds / 100) % 10;
	const two = Math.floor(props.seconds / 10) % 10;
	const one = Math.floor(props.seconds / 1) % 10;

	return (
		<div className="counter">
			<div className="box">
				<i className="fa-solid fa-clock"></i>
			</div>

			<div className="box">{six}</div>
			<div className="box">{five}</div>
			<div className="box">{four}</div>
			<div className="box">{three}</div>
			<div className="box">{two}</div>
			<div className="box">{one}</div>
		</div>
	);
};

export default Home;