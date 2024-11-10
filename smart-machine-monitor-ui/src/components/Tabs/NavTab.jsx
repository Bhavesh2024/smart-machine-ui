import React from "react";

const NavTab = ({ tabList, activeTab }) => {
	return (
		<>
			<ul
				className="nav gap-4 d-flex align-items-center"
				style={{ height: "70px" }}
			>
				{tabList.map((value, key) => (
					<li
						className={`${
							activeTab.toLowerCase() == value.toLowerCase()
								? "active"
								: "text-secondary fw-semibold"
						}`}
					>
						{value}
					</li>
				))}
			</ul>
		</>
	);
};

export default NavTab;
