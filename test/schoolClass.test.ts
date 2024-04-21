import { mock, mockReset } from 'jest-mock-extended';
import { Student } from '../src/student'
import { SchoolClass } from '../src/schoolClass'

const mockedStudent = mock<Student>();

describe('schoolClass tests',() =>{
    let sut: SchoolClass;

    beforeEach(()=>{
        mockReset(mockedStudent);
        sut=new SchoolClass();
    })

    it('should get student', ()=>{
        //Arrange
        const expectedResult=[{'name':'John'}];
        const mockedStudent=new Student('John');
        sut.addStudent(mockedStudent);

        //Act
        const actualResult =  sut.getStudents();

        //Assert
        expect(actualResult).toEqual(expectedResult);
    })

})