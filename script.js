// akanNamea
// the end result //Akan names mapped to the formula
//the results should be:1=monday, 2=tuesday, 3=wednesday, 4=thursday, 5=friday, 6=saturday, 7=sunday

const maleNames = ["kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame", "kwasi"]
const femaleNames = ["adowa", "abenaa", "akua", "yaa", "afua", "ama", "akosua"]

const dayNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

//form submission
document.querySelector("#akan-form").addEventListener("submit", function(addEventListener){
    // stops page from refreshing
    event.preventDefault();

    //get user input
    
    const d = Number(document.querySelector("#day").value);
    const month = Number(document.querySelector("#month").value);
    const year = Number(document.querySelector("#year").value);
    const gender = document.querySelector("#gender").value;

    const result = document.querySelector("#result");

    //validate the input
    if (d < 1 || d > 31) {
        result.textContent = "day must be between 1 and 31.";
        return;
    }
    if (month < 1 || month > 12) {
        result.textContent ="month must be between 1 and 12.";
        return;
    }
     if ()
    //calculate the day of the week using the formula
    //CC is the first two digits, YY is the lasttwo digits
    const CC = Math.floor(year / 100); 
    const YY = Math.floor(year % 100); 
    const MM = month;
    const DD = d;
    let d = (( CC * 4 )- 2 * CC - 1 +( 26 * (MM + 1) / 10) + DD) % 7;

    //make sure day is not negative
    if (d < 0) {
        d += 7;
    }

    //akanName based on gender
    let akanName = gender ==="male" ? maleNames[d] : femaleNames[d]
    
    //display the result
    result.textContent = "you were born on a" + dayName[d] + "your akan name is: " +{ akanName};
        
    });
