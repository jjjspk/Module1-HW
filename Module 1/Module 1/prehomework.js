class EmployeeManager {
    constructor() {
        this.employees = [];
    }

    addEmployee(name, position) {
        // Check if an employee with the same name already exists
        const existingEmployee = this.employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
        
        if (existingEmployee) {
            return null; // Employee already exists
        }

        // Generate a unique ID for the new employee
        const id = this.generateUniqueId();

        // Create the new employee object
        const newEmployee = {
            id: id,
            name: name,
            position: position
        };

        // Add the new employee to the employees array
        this.employees.push(newEmployee);

        return newEmployee;
    }

    removeEmployee(id) {
        const index = this.employees.findIndex(emp => emp.id === id);
        
        if (index === -1) {
            return false; // Employee doesn't exist
        }

        // Remove the employee from the array
        this.employees.splice(index, 1);
        return true;
    }

    findEmployeeByName(name) {
        // Search for employees by name, case-insensitive
        const matchingEmployees = this.employees.filter(emp => emp.name.toLowerCase() === name.toLowerCase());
        return matchingEmployees;
    }

    sortEmployeeByName() {
        // Sort employees array by employee name
        this.employees.sort((a, b) => a.name.localeCompare(b.name));
    }

    updateEmployee(employee) {
        const index = this.employees.findIndex(emp => emp.id === employee.id);
        
        if (index === -1) {
            return false; // Employee doesn't exist
        }

        
        // Update the employee
        this.employees[index] = employee;
        return true;
    }

    // Helper function to generate unique ID
    generateUniqueId() {
        return Math.floor(Math.random() * 1000000); // Not guaranteed unique in real-world scenario
    }
}

// Example usage
const manager = new EmployeeManager();
manager.addEmployee("John Doe", "Manager");
manager.addEmployee("Alice Smith", "Developer");
manager.addEmployee("Bob Johnson", "Designer");
manager.sortEmployeeByName();
console.log(manager.employees);
console.log(manager.findEmployeeByName("Alice Smith"));
manager.removeEmployee(manager.employees[1].id);
console.log(manager.employees);
