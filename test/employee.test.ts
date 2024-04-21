import { Employee } from "../src/employee";

describe('Employee tests', () => {
    it('should calculate salary', () => {
        // Arrange
        const employee = new Employee('John', 500);
        const expectedSalary = 500;

        // Act
        const result =  employee.calculateSalary();
        

        // Assert
        expect(result).toBe(expectedSalary);
    })
})