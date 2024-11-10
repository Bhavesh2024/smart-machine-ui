import React from "react";
import MachineOverViewCard from "../Machine/MachineOverViewCard";

const OverView = () => {
	return (
		<>
			<div
				className="container flex align-items-center justify-content-center px-5 shadow rounded-bottom-2"
				style={{ height: "200px" }}
			>
				<div className="row h-100">
					<div className="col-3 h-100 d-flex flex-column justify-content-center position-relative">
						<div
							className="d-flex justify-content-center align-items-center"
							style={{ fontSize: "4rem", color: "#7b63ff" }}
						>
							25
						</div>
						<div className="fw-bold text-center text-secondary">
							Total Machines
						</div>
						<div className="line d-flex flex-column justify-content-center position-absolute bottom-0 w-100">
							<div
								className="triangle d-flex mx-auto"
								style={{
									height: "10px",
									background: "#7b63ff",
									marginBottom: "-5px",
									width: "10px",
									borderRadius: " 10px 50px    100px 20px",
									transform: "rotate(45deg)",
								}}
							></div>
							<div
								className="d-flex mx-auto"
								style={{
									height: "4px",
									background: "#7b63ff",
									marginBottom: "0px",
									width: "55%",
								}}
							></div>
						</div>
					</div>
					<div className="col-2 machine-status">
						<MachineOverViewCard
							label={"Pressure"}
							machineCount={2}
						/>
					</div>
					<div className="col-2 machine-status">
						<MachineOverViewCard
							label={"Temperature"}
							machineCount={2}
						/>
					</div>
					<div className="col-2 machine-status">
						<MachineOverViewCard
							label={"Vibration"}
							machineCount={1}
						/>
					</div>
					<div className="col-2 machine-status">
						<MachineOverViewCard
							label={"Gas Flow"}
							machineCount={2}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default OverView;
