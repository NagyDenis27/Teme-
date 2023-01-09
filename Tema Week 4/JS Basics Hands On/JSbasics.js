var a = [ "John Doe |, M |, BMI:24 |,Normal Weight" ];

var b = ["Marry Anne |, F |, BMI:30 |,Obese" ];

var names  = [a,b]

console.log(names);


var x = parseInt(prompt("weight (kg)"));

var y = parseInt(prompt("height (cm)"));

var bmi = (x / ((y * y) / 10000)) 


if ( bmi < 18.5)
{
 
alert("Underweight ");

}

else if ((bmi > 18,5) && (bmi < 25)) {

    alert("normal");

}

else if ((bmi > 25) && (bmi < 30)) {

    alert( "overweight")

}

else {

    alert("obese")

}




