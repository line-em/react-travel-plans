import React from "react";
import { GlobeHemisphereWest } from "phosphor-react";

const Header = () => {
	return (
		<header className="header">
			<GlobeHemisphereWest size={32} color="var(--darker-white)" weight="duotone" />
			<h1 className="header__title">Travel Plans</h1>
		</header>
	);
};

export default Header;
