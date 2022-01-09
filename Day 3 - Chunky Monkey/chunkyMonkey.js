function depositProfit(deposit, rate, threshold) {
	//  write code here.
	if (threshold <= deposit) {
		return "You have the amount that you need";
	}
	let years = 0;
	for (years; deposit < threshold; years++) {
		deposit += deposit * (rate / 100);
	}
	return years;
}

let results = depositProfit(100, 20, 170);
console.log(results);
