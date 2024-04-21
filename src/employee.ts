export class Employee { 
    private name: string; 
    private salary: number; 
    
    constructor(name: string, salary: number) { 
        this.name = name; 
        this.salary = salary; 
    } 
    
    calculateSalary(): number { 
        return this.salary;
    }
}