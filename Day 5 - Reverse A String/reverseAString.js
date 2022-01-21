function reverseAString(str) {
	//  write code here.
	return str.split("").reverse().join("");
}

let results = reverseAString("hello");
console.log(results);

results = reverseAString("Howdy");
console.log(results);
