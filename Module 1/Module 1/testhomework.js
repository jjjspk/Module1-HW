//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:       Name:
// class EmployeeManager {


//     constructor(){
//         this.employees = []
//     }    


//     addEmployee(name, position){


//     }


//     removeEmployee(id){

//         const employeeRemove = this.employees.findIndex 

//     }


// //     //Searches for employees by name, case-insensitivity. Return array of all 
// // matching employees.
//     findEmployeeByName(name){
//         const employeeFindName = this.employees.find (emp => emp.name.toLowerCase() === name.toLowerCase()) //ที่มีอยู่เท่ากับที่รับมา
//         return employeeFindName
//     }


//     sortEmployeeByName(){

//     }

//     updateEmployee (employee){

//         const employeeUpdate = this.employees.findIndex(emp => emp.id === employee.id);



//     }

//     promoteEmployee(id, newPosition){ //1.1

//     }




// }






class EmployeeManager {
    constructor() {
      this.employees = [];
      EmployeeManager.id = 1;
    }
  
    //Adds a new employee to the employees array. Generate a unique id for 
// each employee.


    addEmployee(name, position) {
      const existingEmployee = this.employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
      if (existingEmployee) {
        return null; // Employee already exists
      }
  
      const id = EmployeeManager.id++; 
      const newEmployee = { id, name, position };
      this.employees.push(newEmployee);
      return newEmployee;

    }
  
    removeEmployee(id) {
      const index = this.employees.findIndex(emp => emp.id === id);
      if (index === -1) {
        return false; // Employee not found
      }
      this.employees.splice(index, 1);
      return true; // Employee removed successfully
    }
  
    findEmployeeByName(name) {
      const matchingEmployees = this.employees.filter(emp => emp.name.toLowerCase() === name.toLowerCase());
      return matchingEmployees;
    }
  
    sortEmployeeByName() {
      this.employees.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    updateEmployee(employee) {
      const index = this.employees.findIndex(emp => emp.id === employee.id);
      if (index === -1) {
        return false; // Employee not found
      }
      this.employees[index] = employee;
      return true; // Employee updated successfully
    }
  
    promoteEmployee(id, newPosition) {
      const employee = this.employees.find(emp => emp.id === id);
      if (!employee) {
        return false; // Employee not found
      }
      employee.position = newPosition;
    //   console.log(`Promotes ${employee.name} to ${newPosition}`);
      return true; // Employee promoted successfully
    }
  }
 
// Example usage:
const manager = new EmployeeManager();
console.log(manager.addEmployee("John Doe", "Developer")); // Adds and logs new employee
console.log(manager.addEmployee("Jane Doe", "Designer")); // Adds and logs new employee
console.log(manager.findEmployeeByName("John Doe")); // Finds and logs John Doe
manager.sortEmployeeByName(); // Sorts employees by name
console.log(manager.employees); // Logs sorted employees
manager.promoteEmployee(1, "Senior Developer"); // Promotes John Doe to Senior Developer
console.log(manager.employees); // Logs employees to see the updated position of John Doe