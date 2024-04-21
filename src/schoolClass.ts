import { Student } from "./student";

export class SchoolClass { 
    private students: Student[] = []; 
    
    constructor() {} 
    
    addStudent(student: Student): void { 
        this.students.push(student); 
    } 
    
    getStudents(): Student[] { 
        return this.students; 
    } 
}