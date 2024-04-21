import { Employee } from "./employee";
import { EmployeeService } from "./employeeService"; 

export class EmployeeManagement {
  private employeeService: EmployeeService;

  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }

  public calculatePayroll(): number {
    const employees = this.employeeService.getEmployees();
    let totalPayroll = 0;

    for (const employee of employees) {
      totalPayroll += employee.calculateSalary();
    }

    return totalPayroll;
  }

  public generateReports(): string {
    return "Employee reports: ...";
  }

  public promoteEmployee(employee: Employee): void {
    console.log('Employee promotion');
  }
}