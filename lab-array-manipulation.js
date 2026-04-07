// Trent Duncan
// 4/7/2026
// Array Methods Practice

const heroes = ["Iron-Man", "The Incredible Hulk", "Thor God of Thunder", "Spider-Man","Vison"];
alert(`Initial superhero team size: ${heroes.length}`);
console.log(`Current superhero team: ${heroes}`);

heroes.push("Black Panther")
console.log(`Push update: ${heroes}`);

heroes.pop()
const removedLastHero = "Black Panther"
console.log(`Removed Hero: ${removedLastHero}`);
console.log(`Heroes update: ${heroes}`);

heroes.shift()
const removedFirstHero = "Iron-Man"
console.log(`Removed Hero: ${removedFirstHero}`);
console.log(`Updated Heroes: ${heroes}`);

heroes.unshift("Iron-Man")
console.log(`Readded Hero: ${heroes}`);

console.log(heroes.indexOf("Iron-Man"));
const heroPosition = "0"
console.log(`In the varriable heroes Iron-Man is in position: ${heroPosition}`);


heroes.length = 3
console.log(`theese are the first 3 heros ${heroes}`);