import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function Home() {
	return (
		<>
			<Navigation />
			<h1 style={{ color: "#fff" }}>Homepage</h1>
			<Footer />
		</>
	);
}

export default Home;
