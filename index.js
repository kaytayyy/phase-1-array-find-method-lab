// code your solution here
const record = [
    {year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
function superbowlWin(array) {
    // iterate over array using .find
    if (array.find(element => element.result == "W"))
        return array.find(element => element.result == "W").year
    
    else (array.find(element => element.result == "N/A", "L"))
        return undefined
}

console.log(superbowlWin(record))
