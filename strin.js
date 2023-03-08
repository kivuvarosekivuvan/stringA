//Extract the last 4 characters from the string below; "extravaganza"
var it="extravaganza"
console.log(it[8],it[9],it[10],it[11])

//insert the following string at the forth index of the below variable "eat"
//const food="THe quickfox jumped over the lazy dog"
const food=`The quickfox jumped over the lazy dog`
var add=`eat`
console.log(`The quickfox jumped &{add} the lazy dog`)


//count how many times the following string appears in the string variables
//1."the"
//2."brown"
const story=`The quick brown fox jumped over the lazy dog`
let count=(story.match(/the/g) || []).length;
console.log(count)
let counts=(story.match(/brown/g) || []).length;
console.log(counts)

//find the following words from the following strings
//`are`
const string=`The pupils are reading in the library`
let b=string.search(`are`)
console.log(b)

//. "sitting"
//const string2 = "The child was sitting on the table before it fell"



//convert the following strings into the specified format:
//1. UpperCase: "wonderful"
let p="wonderful"
console.log(p.toUpperCase())
//2. LowerCase: "amazing", "UndERneath"
let r=("amazing", "UndeRneath")
console.log(r.toLowerCase())
//3. Title case "A wonderful world"
var s=`A wonderful world`
s=s.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join(" ").toLowerCase()).join(" ")
console.log(s)

