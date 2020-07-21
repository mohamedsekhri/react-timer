import React, { useState } from "react";
	let resetted = false;
	let startingTime;
	let endTime;
	let elpasedTime;
function App() {
	let [time, setTime] = useState(new Date().toLocaleTimeString());
	function resetTimer() {	
		resetted = true;
		startingTime = new Date();
		setTime("00:00:00");
	}
	setInterval(function () {
		if(!resetted){
			setTime(new Date().toLocaleTimeString());
		}else{
			endTime = new Date();
			const hours = endTime.getHours() - startingTime.getHours();
			const minutes = endTime.getMinutes() - startingTime.getMinutes();
			const seconds = endTime.getSeconds() - startingTime.getSeconds();
			elpasedTime = new Date(
				0,
				0,
				0,
				hours,
				minutes,
				seconds
			);
			setTime(elpasedTime.toString().substring(16, 24));
		}
	});
	return (
		<div className="container">
			<h1 className="heading">{time}</h1>
			<button className="reset-button" onClick={resetTimer}>Reset Timer</button>
		</div>
	);
}

export default App;
