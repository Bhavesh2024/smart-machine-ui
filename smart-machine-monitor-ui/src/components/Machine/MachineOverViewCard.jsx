import React from "react";

const MachineOverViewCard = ({ label, machineCount }) => {
	const iconList = {
		Temperature: (
			<i
				class="fa-solid fa-temperature-three-quarters text-warning"
				style={{ fontSize: "2.7rem" }}
			></i>
		),
		Pressure: (
			<span
				class="material-symbols-outlined text-info"
				style={{ fontSize: "2.5rem" }}
			>
				water_pump
			</span>
		),
		Vibration: (
			<div className="fs-1 text-info">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="50"
					fill="currentColor"
					class="bi bi-phone-vibrate text-center"
					viewBox="0 0 16 16"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
					<path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648" />
				</svg>
			</div>
		),
		"Gas Flow": (
			<i
				class="fa-solid fa-gas-pump fs-2"
				style={{ fontSize: "2.5rem", color: "greenyellow" }}
			></i>
		),
	};
	return (
		<div className="d-flex flex-column align-items-center h-100 justify-content-center gap-3">
			<div className="d-flex gap-3 align-items-center">
				<div className="d-flex align-items-center">
					{iconList[label]}
				</div>
				<div>
					<div className="fs-3">
						{machineCount > 10 ? machineCount : `0${machineCount}`}
					</div>
					<div style={{ margin: "-5px", fontSize: "12px" }}>
						Machines
					</div>
				</div>
			</div>
			<div
				className="fw-semibold text-center"
				style={{ fontSize: "14px" }}
			>
				{label}
			</div>
		</div>
	);
};

export default MachineOverViewCard;
