//for loop
for  (var i=1;i <= 5;i=i+1){
    console.log(i);
}

//while loop
let j=1;
while(j<=5){
console.log(j);
j=j+1;
}

//do while loop
let k=1;
do{
    console.log(k);
    k=k+1;
}
while (k<=5);

//array is a iterable object 
//for(){},while(){},do while{}(),for of(){}

//javascript array....
//for loop 
let eids=[101,102,103,104,105,106,107]
for (let i=0; i<=6;i=i+1){
    console.log(eids[i])
}
//while loop
let l=0
while(l<=6){
    console.log(eids[l]);
    l++
}
//do while loop
let m=0
do{
    console.log(eids[m]);
    m=m+1
}
while(m<=6);

//length finding
let enames =["rahul","soniya","modi","amot","dinesh"]
console.log(enames.length)
for (let w=0 ;w<=enames.length-1;w++){
    console.log(enames[w])
}
//for of
for(ename    of enames    ){
    console.log(ename)
}

for(eid   of eids   ){
    console.log(eid)
}

//example...
let users =[{
    id:102,
    name:"rahul",
    age:22,
    gender:"male"
}]

for (user of users){
    console.log(user)
}

for (user of users){
    console.log(user.name)
}

for (user of users){
    console.log("user age:",user.age,"user name:",user.name)
}