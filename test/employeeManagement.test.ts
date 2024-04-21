import { mock, mockReset } from 'jest-mock-extended';
import { Employee } from '../src/employee';
import { EmployeeService } from '../src/employeeService';
import { EmployeeManagement } from '../src/employeeManagement';

const mockedEmployee = mock<Employee>();
const mockedEmployeeService = mock<EmployeeService>();

describe('EmployeeManagement tests', () => {
    let sut: EmployeeManagement; 
    
    beforeEach(()=>{
        mockReset(mockedEmployee);
        mockReset(mockedEmployeeService);
        sut = new EmployeeManagement(mockedEmployeeService);
    })

    it("should calculate payroll for empty employee list", () => {
        // Arrange
        mockedEmployeeService.getEmployees.mockReturnValue([]); 
    
        // Act
        const actualResult = sut.calculatePayroll();
    
        // Assert
        expect(actualResult).toBe(0); 
      });

    it('should calculate payroll for single employee', () => {
        // Arrange
        const mockedEmployee=new Employee('John', 500);
        mockedEmployeeService.getEmployees.mockReturnValue([mockedEmployee]);

        // Act
        const actualResult =  sut.calculatePayroll();

        // Assert
        expect(actualResult).toBe(500);
        expect(mockedEmployee.calculateSalary).toBeCalled;
    })

    it('should calculate payroll for multiple employee', () => {
        // Arrange
        const mockedEmployees = [
            new Employee("Alice", 300),
            new Employee("Bob", 500),
            new Employee("Charlie", 200),
          ];
        
        mockedEmployeeService.getEmployees.mockReturnValue(mockedEmployees);

        // Act
        const actualResult =  sut.calculatePayroll();

        // Assert
        expect(actualResult).toBe(1000);

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
        mockedEmployeeService.addEmployee(employeeToPromote);
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        
        // Act
        sut.promoteEmployee(employeeToPromote);

        // Assert
        expect(consoleLogSpy).toHaveBeenCalledWith(consoleMessage);

    })

})