import { Employee } from "./employee";

export class EmployeeService{
    private employees: Employee[] = []; 
    
    constructor() { }

    public addEmployee(employee: Employee): void { 
        this.employees.push(employee);
    }
    public getEmployees(): Employee[] {
        return this.employees.slice();
    }
}
