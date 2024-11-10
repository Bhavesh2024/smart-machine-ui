import React from "react";
import MachineData from "./MachineData";

const MachineCard = ({
	machineNum,
	alert = 0,
	pressure,
	temperature,
	vibration,
	gasFlow,
}) => {
	return (
		<>
			<div
				className={`d-flex flex-column  bg-white border border-1 ${
					alert != 0 && "border-danger"
				} rounded-1 p-3 shadow`}
			>
				<div className="d-flex justify-content-between">
					<div className="fw-bold">Machine {machineNum}</div>
					{alert != 0 && (
						<div className="text-danger">
							{" "}
							<i className="fa-solid fa-warning"></i>&nbsp;
							{alert} Alert
						</div>
					)}
				</div>
				<div className="d-flex flex-column gap-3 justify-content-between">
					<div className="d-flex justify-content-between">
						<MachineData label={"Pressure"} machineVal={pressure} />
						<MachineData
							label={"Vibration"}
							machineVal={vibration}
						/>
					</div>
					<div className="d-flex  justify-content-between">
						<MachineData
							label={"Temperature"}
							machineVal={temperature}
						/>
						<MachineData label={"Gas Flow"} machineVal={gasFlow} />
					</div>
				</div>
				<div></div>
			</div>
		</>
	);
};

export default MachineCard;
