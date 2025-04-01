import React from "react";
import Footer from './Footer.jsx';
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar/>
			<Jumbotron/>
				<div className="container p-4">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-12 p-2"><Card /></div>
						<div className="col-lg-3 col-md-6 col-sm-12 p-2"><Card /></div>
						<div className="col-lg-3 col-md-6 col-sm-12 p-2"><Card /></div>
						<div className="col-lg-3 col-md-6 col-sm-12 p-2"><Card /></div>
					</div>
				</div>
			<div className="mt-auto">
			<Footer/>
			</div>
		</div>
	);
};

export default Home;