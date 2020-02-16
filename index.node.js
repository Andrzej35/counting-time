exports.module = timeCreator = (timeEnd, timeNow, aMinute) => {
	const checkTime = () => {
		if (timeNow > timeEnd) {
			console.log("not ok");
			return timeEnd - timeNow;
		} else if (timeNow < timeEnd) {
			console.log("ok man");
			return timeEnd - timeNow;
		} else if (timeNow - timeEnd <= 24 * 60 * aMinute) {
			console.log("ok ok");
			return timeEnd - timeNow;
		}
	};

	//const counter = checkTime();
	//console.log(counter);

	const pingTimeCheck = (fn) => {
		if (fn() === 0) {
			console.log(fn());
			return pingTimeCheck(fn() - aMinute);
			// return interval;
		} else {
			return fn();
		}
	};

	return setTimeout(() => pingTimeCheck(checkTime), aMinute);
};

// 1581849457692 now
// 1581897600000 future

// console.log("Hello wfrom node");

timeCreator(1581849457692, 1581897600000, 60000);
