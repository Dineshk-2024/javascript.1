//js object
//group of project as entity(property name:property value)
//group of data & functionality as entity

//create 
let g={}
let emp={
    id: 10,
    name: "rahul",
    sal: 45000,
    loc: [],
    discount: {}
}
//read object
console.log(g)
console.log(emp)
//read object property
//object:property
console.log(emp.id);
console.log(emp.name);
console.log(emp.sal);
console.log(emp.loc);
console.log(emp.discount);
//update 
emp.name="dinesh"
emp.loc="bangalore"
console.log(emp)
//delete
delete emp.discount
console.log(emp)
//read
console.log(emp.loc)

document.write(
let ={
    id: 10,
    name: "rahul",
    sal: 45000,
    loc: [],
    discount: {}
})