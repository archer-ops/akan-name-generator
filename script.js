// Ghanan names(akan)
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
    const CC = Math.floor(year / 100);
}
)
