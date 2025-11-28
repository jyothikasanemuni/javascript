// 1.print 1 to 5 numbers using for loop,while and dowhile 
for(let a=1;a<=5;a++){
    console.log(a)
}
let b=1;
while (b<=5){
    console.log(b);
    b++;
}
let c=1;
do{
    console.log(c);
    c++;
}while (c<=5)

// 2.perform break and continue with three loops 
for(let a=1;a<=5;a++){
    if(a==4){
        break;
    }
    console.log(a)
}
let m=1;
while (m<=5){
    if(m==4){
        break;
    }
    console.log(m);
    m++;
}
let n=1;
do{
    if(n==5){
        break;
    }
    console.log(n);
    n++;
}while (n<=6)

CONTINUE:
for(let a=1;a<=5;a++){
    if(a==4){
        continue;
    }
    console.log(a)
}
let i=0;
while (i<=6){
    i++;
    if(i==4){
        continue;
    }
    console.log(i);    
}
let j=0;
do{
    j++;
    if(j==5){
        continue;
    }
    console.log(j);
}while (j<=5)

// 3.take array of objects atleast 5 obj perform break& continue on array of objects data using for and while 

// 4.take input from user variable name is dicevalue if your value is 1 then print "u r dice value is 1 " same like up to six numbers using switch
dice=Number(prompt("enter the dice number: "))
switch(dice){
    case 1:
        console.log("your dice value is 1");
        break;
    case 2:
        console.log("your dice value is 2");
        break;
    case 3:
        console.log("your dice value is 3");
        break;
    case 4:
        console.log("your dice value is 4");
        break;
    case 5:
        console.log("your dice value is 5");
        break;
    case 6:
        console.log("your dice value is 6");
        break;
    default:
        console.log("your dice value is none");
        break;  
}

// 5.even or odd using if else 
num1=Number(prompt("enter the dice number: "))
if (num1%2==0){
    console.log(num1, "is Even")
}
else{
    console.log(num1, "is Odd")
}

// 6.take an obj with atleast 6 key value pairs access only values using for in loop 
let obj={
    name:"Bunny",
    age:22,
    hobbies:"cricket",
    DOB:"24/04/2005",
    clg:"ellenki",
    Bloodgrp:"O+"
}
for(let i in obj){
    console.log(obj[i])
}

// 7.perform for of loop on arrays and strings 
let arr=[1,2,3,4,5]
for(let a of arr){
    console.log(a)
}

let str1="hello guys welcome back to js"
for(let b of str1){
    console.log(b)
}