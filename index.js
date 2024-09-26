const calculate = () => {

    let Kannada = document.querySelector("#kannada").value;
    let Sanskrit = document.querySelector("#sanskrit").value;
    let Maths = document.querySelector("#maths").value;
    let Chemistry = document.querySelector("#chemistry").value;
    let Physics = document.querySelector("#physics").value;
    let CS = document.querySelector("#cs").value;

    
    if (Kannada === "" || Sanskrit === "" || Maths === "" || Chemistry === "" || Physics === "" || CS === "") {
        document.querySelector("#show").innerHTML = "Please fill the form completely.";
        return;
    }


    let total = parseFloat(Kannada) + parseFloat(Sanskrit) + parseFloat(Maths) + parseFloat(Chemistry) + parseFloat(Physics) + parseFloat(CS);
    let grade = "";

    
    let percentage = (total / 600) * 100;

    
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80 && percentage < 90) {
        grade = "A";
    } else if (percentage >= 70 && percentage < 80) {
        grade = "B+";
    } else if (percentage >= 60 && percentage < 70) {
        grade = "B";
    } else if (percentage >= 50 && percentage < 60) {
        grade = "C+";
    } else if (percentage >= 35 && percentage < 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    if (percentage >= 35) {
        document.querySelector("#show").innerHTML = `Out of 600, your total is ${total} and percentage is ${percentage.toFixed(2)}%. <br>
        Your grade is ${grade}. You have passed.`;
    } else {
        document.querySelector("#show").innerHTML = `Sorry, you have failed. Your grade is ${grade}.`;
    }
};
