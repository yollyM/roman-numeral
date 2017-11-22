
var englishRomanLettersObjectArray= {0:"", 1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX", 10:"X", 20:"XX", 30:"XXX", 40:"XL", 50:"L", 60:"LX", 70:"LXX", 80:"LXXX", 90:"XC",  100:"C", 200:"CC", 300:"CCC", 400:"CD", 500:"D", 600:"DC", 700:"DCC", 800:"DCCC", 900:"CM", 1000:"M", 2000:"MM",3000:"MMM", 4000:"MV", 5000:"V", 6000:"VM", 7000:"VMM", 8000:"VMMM", 9000:"VMMMM", 10000:"X", 20000:"XX", 30000:"XXX", 40000:"XL", 50000:"L", 60000:"LX", 70000:"LXX", 80000:"LXXX", 90000:"XC", 100000:"C", 200000:"CC", 300000:"CCC", 400000:"CD", 500000:"D", 600000:"DC", 700000:"DCC", 800000:"DCCC", 900000:"CM" };
  
  
 
   var placeValues = [];

function getPlaceValues(number) {
    // this function takes a number of any length
    // and returns an array containing its place values

 
    var numberLength = Math.floor(Math.log10(number)) + 1;

    while (numberLength >= 1) {
	// decrement number length to repeat process
        // for next digit
        numberLength -= 1;
        // get the current place value, e.g. 10, 100, 1000 etc
        var currentPlace = Math.pow(10,numberLength);
        // get the current digit, e.g. 3 from 3291
        var currentDigit = Math.floor(number/currentPlace);
        //multipling numbers by base to get place value
        var placeValue = currentDigit*currentPlace;
        // multiply by current place and push to array
        placeValues.push(englishRomanLettersObjectArray[placeValue]);
        // remove current place from number
        number %= currentPlace;
    }

    return placeValues;
   
}

  getPlaceValues(prompt("Enter value"));

console.log(placeValues.toString().replace(/,/g,""));
