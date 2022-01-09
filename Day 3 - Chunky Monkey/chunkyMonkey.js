function chunkyMonkey(array, length) {
	//  write code here.
	return new Array(array.slice(0, length), array.slice(length));
}

let results = chunkyMonkey(["a", "b", "c", "d"], 2);
console.log(results);

results = chunkyMonkey([0, 1, 2, 3, 4, 5], 4);
console.log(results);
