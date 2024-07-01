function getHighestPaidEmployee(employees, departmentId) {
    const departmentEmployees =  employees.filter((employee) => employee.departmentId === departmentId);
    if (departmentEmployees.length === 0) return undefined;

    let highestSalaryEmployee = departmentEmployees[0];

    for (let i = 1; i < departmentEmployees.length; ++i) {
        if (departmentEmployees[i].salary > highestSalaryEmployee.salary) {
            highestSalaryEmployee = departmentEmployees[i];
        }
    }

    return highestSalaryEmployee.name;
}