function centuryFromYear(year) {
	//  write code here.
	let flooredCentury = Math.floor(year / 100);
	if (year % 100 === 0) return flooredCentury;
	else return flooredCentury + 1;
}

let results = centuryFromYear(1905);
console.log(results);

results = centuryFromYear(1700);
console.log(results);
