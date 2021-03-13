//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SimpleCounter(props) {
	return (
		<div className="mainCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{props.numFour % 10}</div>
			<div className="three">{props.numThree % 10}</div>
			<div className="two">{props.numTwo % 10}</div>
			<div className="one">{props.numOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	numFour: propTypes.number,
	numThree: propTypes.number,
	numTwo: propTypes.number,
	numOne: propTypes.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;

	//render your react application
	ReactDOM.render(
		<SimpleCounter
			numOne={one}
			numTwo={two}
			numThree={three}
			numFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
