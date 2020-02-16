import React, { useEffect, useState } from "react";

const date = "Sun, 16 Feb 2020 14:55:00 GMT";

const Counter = () => {
	const calculateTimeLeft = () => {
		const difference = +new Date(date) - +new Date();
		let timeLeft = {};

		console.log("DIFFERENCE", difference / 1000);

		if (difference > 0 && difference / (1000 * 60 * 60 * 24)) {
			console.log(
				"FROM ALL RENDER",
				Math.floor(difference / (1000 * 60 * 60 * 24))
			);
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		}

		if (difference > 0 && (difference / (1000 * 60 * 60)) * 24 < 1) {
			console.log(
				"HOURS",
				Math.floor((difference / (1000 * 60 * 60)) % 24)
			);
			timeLeft = {
				hours: (difference / (1000 * 60 * 60)) % 24
			};
		}

		// if (
		// 	difference > 0 &&
		// 	Math.floor((difference / (1000 * 60 * 60)) % 24) < 1 &&
		// 	Math.floor((difference / 1000 / 60) % 60)
		// ) {
		// 	console.log("MINUTES", Math.floor((difference / 1000 / 60) % 60));
		// 	timeLeft = {
		// 		minutes: Math.floor((difference / 1000 / 60) % 60)
		// 	};
		// }

		// if (
		// 	difference > 0 &&
		// 	Math.floor((difference / (1000 * 60 * 60)) % 24) < 1 &&
		// 	Math.floor((difference / 1000 / 60) % 60) < 1 &&
		// 	Math.floor((difference / 1000) % 60)
		// ) {
		// 	console.log("SECONDS", Math.floor((difference / 1000) % 60));
		// 	timeLeft = {
		// 		seconds: Math.floor((difference / 1000) % 60)
		// 	};
		// }

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span key={interval}>
				{timeLeft[interval]} {interval}{" "}
			</span>
		);
	});

	return (
		<div>
			{timerComponents.length ? (
				timerComponents
			) : (
				<span>please renew your subscription!</span>
			)}
		</div>
	);
};

export default Counter;
