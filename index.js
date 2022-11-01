const employee = {name: "", streetAddress: ""}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value})

}



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     const newEmployee = {...employee}
//     return Object.assign({}, delete newEmployee[key])
// }


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    
    delete newEmployee[key];

    return newEmployee;
}

