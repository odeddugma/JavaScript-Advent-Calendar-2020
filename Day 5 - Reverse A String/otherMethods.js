/* Method 1 */
function method1(str) {
	if (!str) return "No string specified";
	let reverseString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverseString += str[i];
	}
	return reverseString;
}
console.log(method1("hello"));
console.log(method1("Howdy"));

/* Method 2 */
function method2(str) {
	if (!str) return "No string specified";
	let reverseString = "";
	let i = str.length - 1;
	while (i >= 0) {
		reverseString += str[i];
		i--;
	}
	return reverseString;
}
console.log(method2("ABCD"));
console.log(method2("Oded"));
