import { mock, mockReset } from 'jest-mock-extended';
import { EmployeeService } from '../src/employeeService';
import { Employee } from '../src/employee';

const mockedEmployee = mock<Employee>();

describe('EmployeeService tests', () => {
    let sut: EmployeeService; 
    
    beforeEach(()=>{
        mockReset(mockedEmployee);
        sut = new EmployeeService();
    })

    it('should get employee', () => {
        // Arrange
        const expectedEmployee = [{ name: "John", salary: 500 }];
        const mockedEmployee = new Employee("John",500);
        
        sut.addEmployee(mockedEmployee);

        // Act
        const actualResult =  sut.getEmployees();

        // Assert
        expect(actualResult).toEqual(expectedEmployee);
        
    })

})