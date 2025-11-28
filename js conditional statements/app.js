// 1)Even or Odd Number – Take a number and check whether it is even or odd.
let a=23;
if (a%2==0){
    console.log("The number is  Even")
}
else{
    console.log("The number is Odd")
}
// 2)Positive, Negative, or Zero – Input a number and print whether it is positive, negative, or zero.
num=Number(prompt("enter a number: "))
if (num>0){
    console.log("The number is Positive")
}
else if (num<0){
    console.log("The number is Negative")
}
else{
    console.log("The number is Zero")
}
// 3)Check Voting Eligibility – Ask for age and display 'Eligible to vote' if age ≥ 18, otherwise 'Not
// eligible'.
Age=Number(prompt("enter your age: "))
if (Age>=18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible")
}
// 4)Find Greater Number – Take two numbers and print which one is greater.
let b=45;
let c=34;
if(b>c){
    console.log("B is greater")
}
else{
    console.log("C is greater")
}
// 5)Divisible by 5 or Not – Check if a number is divisible by 5 and display the result.
num1=Number(prompt("enter a number: "))
if (num1%5==0){
    console.log("The number is divisible by 5")
}
else{
    console.log("The number is not divisible by 5")
}
// 6)Check Leap Year – Input a year and check whether it is a leap year or not.
year=Number(prompt("enter year: "))
if (year %4 ==0 && year %100!=0 || year %400==0){
    console.log("The number is leap year")
}
else{
    console.log("The number is not a leap year")
}
// 7)Check Vowel or Consonant – Input a single character and check whether it’s a vowel or
// consonant.
let a1="e";
if (a1 =="a" || a1 =="e" || a1 =="i" || a1 =="o" || a1 =="u"){
    console.log("The character is a vowel")
}
else{
    console.log("The character is a consonant")
}

// 1)Student Grade – Input marks (0–100) and print grade: 90–100 → A, 75–89 → B, 50–74 → C,
// Below 50 → Fail.
marks=Number(prompt("enter your marks(0-100): "))
if (marks>=90 && marks<=100){
    console.log("Grade: A")
}
else if (marks>=75 && marks<=89){
    console.log("Grade: B")
}
else if (marks>=50 && marks<=74){
    console.log("Grade: C")
}
else{
    console.log("Fail")
}
// 2 Largest of Three Numbers – Take three numbers and print the largest one.
let num1=13;
let num2=89;
let num3=34;
if (num1>num2 && num1>num3){
    console.log("num1 is largest")
}
else if (num2>num1 && num2>num3){
    console.log("num2 is largest")
}
else{
    console.log("num3 is largest")
}
// 3 Traffic Light System – Input a color (red, yellow, green) and display: red → Stop, yellow →
// Ready, green → Go.
color=prompt("enter the color: ")
if (color=="red"){
    console.log("Stop")
}
else if (color=="yellow"){
    console.log("Get Ready")
}
else if (color=="green"){
    console.log("Go")
}
// 4 Day of the Week – Input a number (1–7) and display the day name using a switch statement.
number=Number(prompt("enter a number(1-7): "))
switch (number){
    case 1:
        console.log("The number is 1");
        break;
    case 1:
        console.log("The number is 1");
        break;
    case 2:
        console.log("The number is 2");
        break;
    case 3:
        console.log("The number is 3");
        break;
    case 4:
        console.log("The number is 4");
        break;
    case 5:
        console.log("The number is 5");
        break;
    case 6:
        console.log("The number is 6");
        break;
    case 7:
        console.log("The number is 7");
        break;
    default:
        console.log("You entered number is not in range of(1-7)");
        break;
}

// 5 Simple Calculator – Take two numbers and an operator (+, -, *, /) and perform the operation (using switch).
m=Number(prompt("enter a number: "))
n=Number(prompt("enter another number: "))
operation=prompt("enter operator(+,-,*,/,%,**): ")
switch (operation){
    case "+":
        console.log("result:",m+n);
        break;
    case "-":
        console.log("result:",m-n);
        break;
    case "*":
        console.log("result:",m*n);
        break;
    case "/":
        console.log("result:",m/n);
        break;
    case "%":
        console.log("result:",m%n);
        break;
    case "**":
        console.log("result:",m**n);
        break;
    default:
        console.log("Ib=nvalid operator");
        break;
}
// 6 Pass or Fail (Ternary Operator) – Input marks and use a ternary operator to print 'Pass' if
// marks ≥ 40, else 'Fail'.
marks=Number(prompt("enter your marks: "))
let result=(marks>=40)? "Pass":"Fail"
console.log(result)
// 7 Check Number Range – Input a number and check if it is between 1–100.
range=Number(prompt("enter a number: "))
if (range>=1 && range<=100){
    console.log("the number is in the range(1-100)")
}
else{
    console.log("the number is not in the range(1-100)")
}

// 1)Login Verification – Create username and password variables. If both match ('admin' and
// '1234'), print 'Login Successful', else 'Invalid credentials'.
username=prompt("enter your username: ")
password=prompt("enter your password: ")
let credentials=(username=="admin" && password=="1234")? "Login Successful":"Inalid credentials"
console.log(credentials)

// 2 Electricity Bill Calculator – Input units and calculate bill: up to 100 units 3/unit, 101–200 5/unit, above 200 7/unit.
units=Number(prompt("enter units: "))
if (units<=100){
    console.log(" units is less than 100, the elctricity bill is: ",3*units)
}
else if (units>=100 && units<=200){
    console.log(" units is b/w 100-200, the elctricity bill is: ",5*units)
}
else if (units>=201){
        console.log(" units is greater than 200,so the elctricity bill is: ",7*units)
}

// 3 Triangle Type Checker – Input 3 sides and determine if the triangle is Equilateral, Isosceles, or
// Scalene.
side1=Number(prompt("enter side1: "))
side2=Number(prompt("enter side2: "))
side3=Number(prompt("enter side3: "))
if (side1== side2 && side2==side3){
    console.log(" The triange is Equilateral")
}
else if (side1== side2 || side2==side3 || side1==side3){
    console.log("The triange is Isosceles")
}
else{
    console.log("The triange is Scalene")
}

// 4 ATM PIN Check – Ask user for a PIN (e.g., 1234). If correct → 'Access Granted', else →
// 'Incorrect PIN'.
pin=prompt("enter your pin: ")
if (pin==1234){
    console.log("Access Granted")
}
else{
    console.log("incorrect pin")
}

// 5 Number Guessing – Take a random number and a user’s guess. If equal → 'Correct!', else →
// 'Try Again!'.
NumberGuess=Number(prompt("enter your guessed number: "))
if (NumberGuess==12) {
    console.log("Correct")
}
else{
    console.log("Try Again!")
}

// 6 Eligibility for Scholarship – Input percentage and income: If percentage ≥ 85 and income <
// 2,00,000 → 'Eligible', else → 'Not Eligible'.
percentage=Number(prompt("enter your percentage: "))
income=Number(prompt("enter your income: "))
if (percentage>=85 && income<200000){
    console.log("Eligible for scholarship")
}
else{
    console.log("Not Eligible for scholarship")
}