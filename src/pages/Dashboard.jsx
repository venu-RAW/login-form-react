import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function Dashboard() {
	return (
		<div>
			<Navigation />
			<h1 style={{ color: "#fff" }}>Dashboard</h1>
			<Footer />
		</div>
	);
}

export default Dashboard;
