function candies(children, candy) {
	//  write code here.
	return candy - (candy % children);
}

let results = candies(3, 10);
console.log(results);
