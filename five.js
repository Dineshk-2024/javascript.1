//equality operator...
let a=10
let b=20
let c='10'

console.log(a==b)
console.log(a==c)
//it will dont bother about datatype....

console.log(a===b)
console.log(a===c)
//it will check strictly...
//if datatype and value is same it will show true...
//if datatype and value anyone different it will show false...

//arithmetic operators...
let A=10
let B=3

console.log(A+B)
console.log(A-B)
console.log(A*B)
console.log(A/B)
console.log(A%B)
console.log(A**B)
let num= 5;
console.log(++num)
//increment..
let k=5;
console.log(--k)
//decrement..

//relational operators.. (true/flase)
//example-1
let l = ["HTML", "CSS", "JavaScript"]; 
  
// true (index 1 exists in the array) 
console.log(1 in l); 
  
// false (index 3 doesn't exist in the array) 
console.log(3 in l);

//example-2

let languages = ["HTML", "CSS", "JavaScript"]; 
  
console.log(languages instanceof Array); 
console.log(languages instanceof Object); 
console.log(languages instanceof String); 
console.log(languages instanceof Number);

//logical operator...(not (!)) 
let x = 6
let y = "3"
console.log(!(x==y))
console.log(!(x===y))
console.log(!(x>y))
console.log(!(x<y))

//comparison operator...
x=5

/*Operator	Description	Comparing	Returns	
==	         equal to	x == 8	    false	
                        x == 5	    true	
                        x == "5"	true	
===        	equal value 
            and 
            equal type	x === 5	    true	
                        x === "5"	false	
!=	        not equal	x != 8	    true	
!==     	not equal
            value or 
            not equal
             type	   x !== 5	    false	
                       x !== "5"	true	
                       x !== 8	    true	
>	        greater 
                than   x > 8	    false	
<	        less than  x < 8	    true	
>=	        greater 
            than or 
            equal to   x >= 8	    false	
<=	        less than 
            or equal 
            to	       x <= 8	    true  */

//assignment operator...
let text = "hello"; text+=" world"
console.log(text)  //hello world   
let f=4;f-=1;
console.log(f)  //3
let g=4;g*=4;
console.log(g)  //16     
let h=4;h**=4;
console.log(h)  //256 (4*4*4*4)
let i=4;i/=6;
console.log(i)  //0.666666666666
let j=10;j%=12;
console.log(j)   //10
let n=12;n%=10;
console.log(n)   //2

//ternary operator...
let Pmarks  = 40
let result = (Pmarks < 39) ? "pass" : "fail"
console.log(result); //fail..

let age = 60
let ans = (age > 59) ? "Senior Citizen" : "Not a Senior Citizen";
console.log(ans);

let marks = 75;
let type =(marks>35) ? "pass" : "fail"
console.log(type);//pass

let m = 95;
let r = (m < 40) ? "Unsatisfactory" :
        (m < 60) ? "Average" :
        (m < 80) ? "Good" : "Excellent";

    console.log(r);

//unary operator...

    let str1 = "12"; 
  
    // Using unary plus to convert string to number 
    let z= +str1; 
    console.log(z); //12
      
    // Here we are using typeof operator 
    console.log(typeof (z)) //number

    // "Geeks" cannot be converted to a number 
    let str2 ="geeks";
let p = +"str2"; 
console.log(p); //nan
console.log(typeof (p)) //number

//unary increment (++) operator
let num1 = 12
let npf = num1++;
console.log(npf)
console.log(num1); // 12 13

let num2 = 10
let np = ++num2;
console.log(np)
console.log(num2);//11 11

//logical NOT (!) operator..
let var1 = false; 
let result1 = !var1; 
console.log(result1); //true

//bitwise  NOT(!) operator...
let num3=10;
let res=~num3;
console.log(res);//-11

//typeof operator..
let num4= 18; 
let str = "GeeksforGeeks"; 
let isTrue = true; 
let obj = { name: "Aman", age: 21 }; 
let undefinedVar; 
  
console.log(typeof num); 
console.log(typeof str); 
console.log(typeof isTrue); 
console.log(typeof obj); 
console.log(typeof undefinedVar);

//delete operator....
let person = { 
    name: "Ankit", 
    age: 21, 
    city: "Noida"
}; 
  
console.log(person); 
  
// Deleting the 'age' property  
// from the 'person' object 
delete person.age; 
  
console.log(person);

