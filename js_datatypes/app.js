//PRIMITIVE DATATYPES
//number datatype
let num1=10;
let num2=10.5;
console.log(num1);
console.log(num2)
console.log(typeof(num1))
console.log(typeof(num2))

//strings datatype 
let name="bailey";
console.log(typeof(name))

// to get the quotes as it is
let petname=" 'bailey' ";
console.log(petname)

//double quotes
let petname1=' "bailey" ';
console.log(petname1)

//boolean datatype
let data=true;
console.log(data)
console.log(typeof(data))

//undefined
let msg;
console.log(msg)

var data1;
console.log(data1)
//null
let data2=null;
console.log(data2) //o/p: null
console.log(typeof(data2)) //o/p: object (null is a object)

//Bigint
//diff blw a long number with bigint and without it
let num=1356812379346293549714;
console.log(num) //o/p: 13568123793462935e+21 

let numb=BigInt(1356812379346293549714);
console.log(numb) //o/p: 1356812379346293549714n

//symbol
//: this creates uniqueness for same datatype
let num3=Symbol(123)
let num4=123
console.log(num3 == num4)

//NON-PRIMITIVE DATATYPES
//Object
let dataJyo={
    name:"jyo",
    loc:"hyd",
    phno:3752,
    gender:"female"
}
console.log(dataJyo)
//accessing
console.log(dataJyo.loc)
/*or*/
console.log(dataJyo['loc'])

//adding the object
dataJyo["maritalstatus"]=false;
console.log(dataJyo)
//deleting the object
delete dataJyo['gender']
console.log(dataJyo)
//updating or modifying the object
dataJyo["maritalstatus"]=true;
console.log(dataJyo)

//Arrays
let array=['html',1,2,3,'css','python',4,5,6,[1,2,3,4,5],{name:'jyo',loc:'hyd'}]
console.log(array)
//accessing
console.log(array[4])
//updating or replacing
array[4]='js'
console.log(array)
//adding 
array[11]=[7,8,9]
console.log(array)
//deleting
delete array[6]
console.log(array) //o/p: 6 place empty