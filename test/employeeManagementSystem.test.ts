import { mock, mockReset } from 'jest-mock-extended';
import { Employee } from '../src/employee';
import { EmployeeManagementSystem } from '../src/employeeManagementSystem';

const mockedEmployee = mock<Employee>();

describe('EmployeeManagementService tests', () => {
    let sut: EmployeeManagementSystem; 
    
    beforeEach(()=>{
        mockReset(mockedEmployee);
        sut = new EmployeeManagementSystem();
    })

    it('should if salary is 500 then calculatePayroll should also be 500', () => {
        // Arrange
        const expectedSalary = 500;
        mockedEmployee.calculateSalary.mockReturnValue(expectedSalary);
        
        sut.addEmployee(mockedEmployee);

        // Act
        
        const actualResult =  sut.calculatePayroll();

        // Assert
        expect(actualResult).toBe(expectedSalary);
        expect(mockedEmployee.calculateSalary).toHaveBeenCalledTimes(1);
    })

    it('should generate report', () => {
        // Arrange
        const expectedReport = 'Employee reports: ...';
        
        // Act
        
        const actualResult =  sut.generateReports();

        // Assert
        expect(actualResult).toBe(expectedReport);
    })

    it('should employee promotion logic', () => {
        // Arrange
        const consoleMessage = 'Employee promotion';
        const employeeToPromote = new Employee('John', 500);
        sut.addEmployee(mockedEmployee);
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        
        // Act
        sut.promoteEmployee(employeeToPromote);

        // Assert
        expect(consoleLogSpy).toHaveBeenCalledWith(consoleMessage);

    })

})