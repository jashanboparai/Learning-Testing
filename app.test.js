const sortedPeople = require("./app");
test('sorted people function sorted in correct order', () => {
	const sorted = sortedPeople();
	expect(sorted[0].name).toBe("Charlie");
	
});

test('sorted people function returns an array', () => {
	const sorted = sortedPeople();
	expect(Array.isArray(sorted)).toBe(true);
});