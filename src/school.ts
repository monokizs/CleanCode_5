import { SchoolClass } from "./schoolClass";

export class School { 
    private classes: SchoolClass[] = []; 
    constructor() {} 
    
    addClass(schoolClass: SchoolClass): void { 
        this.classes.push(schoolClass); 
    } 
    
    getStudentCount(): number { 
        let totalStudents = 0; 
        for (const schoolClass of this.classes) { 
            totalStudents += schoolClass.getStudents().length; 
        } 
        
        return totalStudents; 
    } 
}