console.log("Hi");

//localStorage.clear()

//localStorage.setItem("name","nimal");

//localStorage.setItem("age", 25);

//localStorage.clear();
//localStorage.clear();

//////////////CREATE/////////////////////
// localStorage.setItem("name1","Kamal");
// localStorage.setItem("name2","Nimal");
// localStorage.setItem("name3","Sunil");
// localStorage.setItem("name4","pawan");

// //////////////REMOVE/////////////////////
// localStorage.removeItem("name1");

// //////////////READ/////////////////////
// let custName = localStorage.getItem("name2");
// console.log(custName);

///////////////////////////////////////////////////////////////////////////////////


let customer = {
    name: "Nimal",
    age: 25,
    isActive: true,
}

let stringCustomer = JSON.stringify(customer);
localStorage.setItem("customer", stringCustomer);

let retCustomer = localStorage.getItem("customer");
let jsonCustomer = JSON.parse(retCustomer);
console.log(jsonCustomer);