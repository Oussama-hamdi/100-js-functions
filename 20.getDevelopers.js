function getDevelopers(employees) {
    return employees.filter(({job}) => job === "developer");
}