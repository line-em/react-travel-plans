import React from "react";
import Header from "./Header.jsx";
import Places from "./Places.jsx";
import travelData from "./data/travelData";

function App() {
	const placesData = travelData.map((item) => {
		return <Places key={item.id} {...item} />;
	});
	return (
		<div>
			<Header />
			<main className="places">{placesData}</main>
		</div>
	);
}

export default App;
