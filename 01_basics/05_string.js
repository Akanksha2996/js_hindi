const name = "Akanksha"
const repoCount = 50

console.log(`Hello My Name is ${name} and My RepoCount is ${repoCount}`)

const gameName = new String("akankshaakshay")
console.log(gameName);
// prototype word kitne h
console.log(gameName[1]);
// prototype konsa h 
console.log(gameName.__proto__);
// prototype length kitni h
console.log(gameName.length);
// uppercase krne ke liye
console.log(gameName.toUpperCase());
// konsi char kitne number pr h
console.log(gameName.charAt(5));
// konsa akshar kis position pr h uske liye
console.log(gameName.indexOf('y'));

// a kis kis position kitni bar aaya  h 
const akName = "akankshaakshaya"
const position = [];

for (let i=0; i < akName.length; i++)
{
    if (akName[i] === 'a')
    position.push(i);
}
console.log("a kis kis position par hai:",position);
console.log("Total a kitni bar aaya:",position.length );

// substring 0 se 7tk digit aaya
const newString = gameName.substring(0,8)
console.log(newString);

// slice nag value use piche se char aynge

const anotherString = gameName.slice(-14,5)
console.log(anotherString);

// TRIM SPACING

const newStringOne = "        Akanksha    ";
console.log(newStringOne);
console.log(newStringOne.trim());


// replace 
const  url = "https;//akank%20sha.com.akanskha%20Mishra"
const updateurl = url
.replace('%20', '')
.replace('%20', '-');
console.log(updateurl);

// includes question puchne ke liye
console.log(url.includes('hitesh'));
