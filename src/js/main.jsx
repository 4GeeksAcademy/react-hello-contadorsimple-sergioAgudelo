import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";

// ✅ IMPORTANTE: esto hace que tu CSS funcione
import "../styles/index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

let seconds = 0;

window.onload = () => {
	root.render(<Home seconds={seconds} />);

	setInterval(() => {
		seconds = seconds + 1;
		root.render(<Home seconds={seconds} />);
	}, 1000);
};
