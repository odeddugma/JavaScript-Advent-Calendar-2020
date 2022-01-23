function sortByLength(strs) {
	//  write code here.
	return strs.sort((a, b) => a.length - b.length);
}

let results = sortByLength(["abc", "", "aaa", "a", "zz"]);
console.log(results);
