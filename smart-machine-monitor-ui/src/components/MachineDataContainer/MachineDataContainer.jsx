import React, { useEffect, useState } from "react";
import MachineCard from "../Machine/MachineCard";

const MachineDataContainer = () => {
	const [machineData, setMachineData] = useState([
		{
			id: 1,
			alert: 2,
			temperature: 100,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 2,
			alert: 1,
			temperature: 100,
			pressure: 200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 3,
			alert: 1,
			temperature: 100,
			pressure: 1200,
			vibration: 10,
			gasFlow: 1.2,
		},

		{
			id: 4,
			alert: 1,
			temperature: 150,
			pressure: 1200,
			vibration: 9,
			gasFlow: 2.5,
		},

		{
			id: 5,
			alert: 2,
			temperature: 100,
			pressure: 1200,
			vibration: 10,
			gasFlow: 1.5,
		},
		{
			id: 6,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 7,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 8,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 9,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 10,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 11,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 12,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 13,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},

		{
			id: 14,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 15,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
		{
			id: 16,
			alert: 0,
			temperature: 150,
			pressure: 1200,
			vibration: 10,
			gasFlow: 2.5,
		},
	]);

	return (
		<div
			className="container p-5"
			style={{ backgroundColor: "rgba(219, 222, 223, 0.505) " }}
		>
			<div className="row ">
				{machineData.map((value, index) => (
					<div className="col-6 col-md-4 col-lg-3 g-3">
						{/* {() => checkMachineData(value)} */}
						<MachineCard
							machineNum={value.id}
							temperature={value.temperature}
							pressure={value.pressure}
							vibration={value.vibration}
							gasFlow={value.gasFlow}
							alert={value.alert}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MachineDataContainer;
