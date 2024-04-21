import { mock, mockReset } from 'jest-mock-extended';
import { SchoolClass } from '../src/schoolClass';
import { School } from '../src/school';
import { Student } from '../src/student';

const mockedSchoolClass = mock<SchoolClass>();
const mockedStudent = mock<Student>();

describe('school tests',() =>{
    let sutSchool: School;
    let sutSchoolClass: SchoolClass;


    beforeEach(()=>{
        mockReset(mockedSchoolClass);
        mockReset(mockedStudent);
        sutSchool=new School();
        sutSchoolClass=new SchoolClass();
    })

    it('should return zero for an empty school', () => {
        // Arrange (no setup needed, empty school by default)
      
        // Act
        const actualResult = sutSchool.getStudentCount();
      
        // Assert
        expect(actualResult).toBe(0);
      });

    it('should get Student count', ()=>{
        //Arrange
        const expectedResult=2;
        const mockedSchoolClass1 = new SchoolClass();
        let mockedStudent1=new Student('John');
        mockedSchoolClass1.addStudent(mockedStudent1);
        
        const mockedSchoolClass2 = new SchoolClass();
        let mockedStudent2=new Student('Deer');
        mockedSchoolClass2.addStudent(mockedStudent2);
        
        sutSchool.addClass(mockedSchoolClass1);
        sutSchool.addClass(mockedSchoolClass2);

        //Act
        const actualResult =  sutSchool.getStudentCount();

        //Assert
        expect(actualResult).toEqual(expectedResult);
    })
})