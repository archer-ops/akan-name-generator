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
    const day = Number(document.querySelector("#month").value);
    const day = Number(document.querySelector("#year").value);
    const day = Number(document.querySelector("#gender").value);

    const result = document.querySelector("#result");

    //validate the 
}
)
