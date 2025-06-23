function convertToRoman(num) {
	 const map = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };

  //your code here
	let res = ""
	for([key, value] of Object.entries(map)){
		while(num >= value){
			num = num - value
			res += value
		}
	}

	return res

	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line





// do not edit below this line
module.exports = convertToRoman
