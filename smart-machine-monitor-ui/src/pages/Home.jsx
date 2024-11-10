import React from "react";
import Header from "../components/Header/Header";
import OverView from "../components/Overview/OverView";
import MachineDataContainer from "../components/MachineDataContainer/MachineDataContainer";

const Home = () => {
	return (
		<div className="container">
			<Header />
			<OverView />
			<MachineDataContainer />
		</div>
	);
};

export default Home;
