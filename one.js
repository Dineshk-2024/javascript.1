//primitive data type will contain only one value..
//non primitive data type will contian group of values..

//js array
//Group of elements/values as one entity
//storing based an indexing

//create
let sizes =['s','m','l','xl']
//this is for how to read array
console.log(sizes);
console.log(typeof sizes)
//this is for how to read array elements using indexing...
//values are store in heap...like value1[0],value[1],value[2],value[3].....
console.log(sizes[0])
console.log(sizes[1])
console.log(sizes[2])
console.log(sizes[3])
console.log(sizes[4])
//duplicate elements are allowed..
let a=[10,200,3000,40000,10,200];
console.log(a)
console.log(typeof a)
//allowed heterogeneous(data elements)..
let b=[10,"hello",true,undefined,null,[],{}]
console.log(b)
console.log(typeof b)
//update
b[0]="rajini";
console.log(b)
b[100]="kamal";
console.log(b)



