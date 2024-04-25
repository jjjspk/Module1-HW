//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:    65130500081   Name: ศุภกร ปรีชานฤตย์
class EmployeeManager {


    constructor(){
        this.employees = []
    }


    // let id = 0;


    addEmployee(name, position){
        const employeeAdd = this.employees.find(emp => emp.name.toLowercase === name.toLowercase) //การเปรียบเทียบค่า ที่มีอยู่เท่ากับที่รับมามั้ย



        if(employeeAdd){
            return null
        }



        // Create the new employee object
        const newEmployee = {
            // id: id,
            name: name,
            position: position
        };

        // Add the new employee to the employees array


        this.employees.push(newEmployee);

        return newEmployee;
    }


    removeEmployee(id){

        const EmployeeRemove = this.employees.findIndex(emp =>emp.id === id)


        if (EmployeeRemove === -1) {
            return false; // Employee doesn't exist
        }

        this.employees.splice(EmployeeRemove, 1); //ลบออก
        return true;

    }
    
    findEmployeeByName(name){

        const employeeFindName = this.employees.filter (emp => emp.name.toLowercase() === name.toLowercase())
        return employeeFindName


    }

    sortEmployeeByName(){
        this.employees.sort((a,b) => a.name.localeCompare(b.name));

        

    }

    updateEmployee (employee){

        const employeeUpdate = this.employees.findIndex (emp => emp.id === employee.id)

        
        this.employees[employeeUpdate] = employee;
        return true;
    }

    promoteEmployee(id, newPosition){

        const promoteEmployee = this.employees.find(emp => emp.id === id)

        if(!promoteEmployee){
            return false
        }
        return true
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
