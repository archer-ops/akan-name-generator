// akanNamea
// the end result //Akan names mapped to the formula
//the results should be:1=monday, 2=tuesday, 3=wednesday, 4=thursday, 5=friday, 6=saturday, 7=sunday

const maleNames = ["kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame", "kwasi"]
const femaleNames = ["adowa", "abenaa", "akua", "yaa", "afua", "ama", "akosua"]

const dayNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

//form submission
document.querySelector("#akan-form").addEventListener("submit",function(addEventListener){
    // stops page from refreshing
    event.preventDefault();

    //get user input
    const day = Number(document.querySelector("#day").value);
    const month = Number(document.querySelector("#month").value);
    const year = Number(document.querySelector("#year").value);
    const gender = Number(document.querySelector("#gender").value);

    const result = document.querySelector("#result");

    //validate the input
    if (day < 1 || day > 31) {
        result.textContent = "day must be between 1 and 31.";
        return;
    }
    if (month < 1 || month) {
        result.textContent ="month must be between 1 and 12.";
        return;
    }
    if (gender === "") {
        result.textContent ="please select gender.";
        return;
    }
    //calculate the day of the week using the formula
    //CC is the first two digits, YY is the lasttwo digits
    const CC = Math.floor(year / 100); 
    const YY = Math.floor(year % 100); 
    const MM = month;
    const DD = day;
    let d = ( CC * 4 - 2 * CC - 1 +( 26 * (MM + 1) / 100) + DD) % 7;

    //make sure day is not negative
    if (day < 0) {
        day = day + 7
    }

    //match the calculated day to the corresponding Akan name
    let akanName = ""
    if (gender === "male") {
        akanName = maleNames[d];
    }else {
        akanName = femaleNam
    }

        
    }
)
