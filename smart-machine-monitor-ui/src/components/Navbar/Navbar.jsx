import React from "react";
import NavTab from "../Tabs/NavTab";

const Navbar = () => {
	const tabList = ["Dashboard", "Observation"];
	return (
		<>
			<nav
				className="d-flex bg-white shadow  rounded-2 justify-content-between"
				style={{ height: "70px" }}
			>
				<div className="d-flex align-items-center gap-3 ">
					<div
						className="logo d-flex align-items-center px-3"
						style={{
							background:
								"linear-gradient(90deg, rgba(191,191,191,0.400) 0%, rgba(209,209,209,0.300) 100%)",
							height: "100%",
						}}
					>
						<img
							src="../logo.png"
							alt=""
							style={{
								height: "30px",
								width: "40px",
								borderRadius: "5px",
							}}
						/>
						<span
							className=" ms-1 fw-semibold"
							style={{ color: "rgb(123, 99, 255)" }}
						>
							Company
						</span>
					</div>
					<div className="tabs">
						<NavTab tabList={tabList} activeTab={"Dashboard"} />
					</div>
				</div>
				<div className="d-flex align-items-center gap-2 px-5">
					<div className="d-flex align-items-center">
						<img src="../shiva.png" height={32} width={30} alt="" />
					</div>
					<div className="d-flex flex-column align-items-start">
						<span
							className="text-secondary d-block"
							style={{ fontSize: "11px" }}
						>
							Hello
						</span>
						<span
							className="fw-semibold"
							style={{ margin: "-5px" }}
						>
							Shiva
						</span>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
