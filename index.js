const employee = {
    name: "Chris",
    streetAddress: "Ellen Dr",
  };

  function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    return {
      ...employee,
      [name]: streetAddress,
    };
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress; 
  
    return employee;
  }

  function deleteFromEmployeeByKey(employee, name, streetAddress) {
    return {
      ...employee,
      [name]: streetAddress,
    };
  }

  function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress) {
    employee[name] = streetAddress; 
return employee  
}