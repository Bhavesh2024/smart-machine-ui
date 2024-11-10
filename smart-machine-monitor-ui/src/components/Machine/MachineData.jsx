import React, { useEffect, useState } from "react";
// import ";
const MachineData = ({
	label,
	iconClass,
	machineVal,
	machineValClass,
	labelClass,
}) => {
	const [icon, setIcon] = useState(null);
	const getIconFromLabel = (label) => {
		console.log(label);
		switch (label) {
			case "Pressure":
				return (
					<span class="material-symbols-outlined fs-1">
						water_pump
					</span>
				);

			case "Temperature":
				return (
					<i class="fa-solid fa-temperature-three-quarters fs-2"></i>
				);

			case "Vibration":
				return (
					<div className="fs-1">
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
				);

			case "Gas Flow":
				return <i class="fa-solid fa-gas-pump fs-2"></i>;
		}
	};

	const scaleMeter = {
		Temperature: "°C",
		Pressure: "psi",
		Vibration: "hz",
		"Gas Flow": "kg/s",
	};

	const setAlertFromMachineVal = (label) => {
		switch (label) {
			case "Pressure":
				return machineVal < 1200 && "text-danger";
			case "Vibration":
				return machineVal < 10 && "text-danger";
			case "Temperature":
				return machineVal > 200 && "text-danger";
			case "Gas Flow":
				return machineVal < 2.5 && "text-danger";
		}
	};
	useEffect(() => {
		setIcon(getIconFromLabel(label));
	}, []);
	return (
		<>
			<div
				className={`d-flex align-items-center gap-1 text-secondary`}
				style={{ fontSize: "13px" }}
			>
				<div className={iconClass ? iconClass : "fs-1 text-secondary"}>
					{icon}
				</div>
				<div
					className={`d-flex flex-column ${setAlertFromMachineVal(
						label
					)}`}
				>
					<div>
						<b>{machineVal}</b>
						&nbsp;{scaleMeter[label]}
					</div>
					<div>{label}</div>
				</div>
			</div>
		</>
	);
};

export default MachineData;
