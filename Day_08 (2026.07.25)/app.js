console.log("Hi");

const customerList = [];

function btnAddCustomerOnAction() {
    let customer = {
        id: document.getElementById("txtCustomerId").value,
        name: document.getElementById("txtCustomerName").value,
        age: document.getElementById("txtCustomerAge").value,
        address: document.getElementById("txtCustomerAddress").value
    }

    console.log(customer);
    customerList.push(customer);
    console.log(customerList);
    alert("Customer added successfully!");
}

function btnSearchBYIdOnAction() {
    let id = document.getElementById("txtCustomerId").value;
    let found = customerList.find(c => c.id === id);
    
    if (found) {
        alert(`Customer found: \nName: ${found.name}\nAge: ${found.age}\nAddress: ${found.address}`);
    } else {
        alert("Customer not found!");
    }
}

function btnDeleteBYIdOnAction() {
    let id = document.getElementById("txtCustomerId").value;
    let index = customerList.findIndex(c => c.id === id);
    
    if (index !== -1) {
        customerList.splice(index, 1);
        alert("Customer deleted successfully!");
        console.log(customerList);
    } else {
        alert("Customer not found!");
    }
}

function btnUpdateBYIdOnAction() {
    let id = document.getElementById("txtCustomerId").value;
    let index = customerList.findIndex(c => c.id === id);
    
    if (index !== -1) {
        customerList[index].name = document.getElementById("txtCustomerName").value;
        customerList[index].age = document.getElementById("txtCustomerAge").value;
        customerList[index].address = document.getElementById("txtCustomerAddress").value;
        alert("Customer updated successfully!");
        console.log(customerList);
    } else {
        alert("Customer not found!");
    }
}

function btnClearStorageOnAction() {
    localStorage.clear();
    customerList.length = 0; // Clear the array
    alert("Storage cleared!");
    console.log(customerList);
}

function btnLoadTableOnAction() {
    // Save to localStorage
    localStorage.setItem("customerList", JSON.stringify(customerList));
    alert("Data saved to localStorage!");
    console.log("Saved to localStorage:", customerList);
}