const employee = { 
    name: 'Sam', 
    streetAddress: '11 Broadway'
 };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

const newEmployee = {
    name: 'Sam',
    streetAddress: '12 Broadway'
};

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value) {
    newEmployee[key] = value;
    return newEmployee;
}

const xxx = {
    name: 'Sam',
};

function deleteFromEmployeeByKey(xxx, key) {
    const newXxx = { ...xxx };
    delete newXxx.name;
    return newXxx;
}

const xxxx = {
    name: 'Sam',
};
function destructivelyDeleteFromEmployeeByKey(xxxx, key) {
    delete xxxx.name;
    return xxxx;
}