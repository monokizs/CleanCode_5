import { mock, mockReset } from 'jest-mock-extended';
import { CartItem } from '../src/cartItem';
import { ShoppingCart } from '../src/shoppingCart';


const mockedCartItem = mock<CartItem>();

describe('school tests',() =>{
    let sut: ShoppingCart;

    beforeEach(()=>{
        mockReset(mockedCartItem);
        sut=new ShoppingCart();
    })

    it('should return zero for an empty Cart', () => {
        // Arrange (no setup needed, empty school by default)
      
        // Act
        const actualResult = sut.calculateTotal();
      
        // Assert
        expect(actualResult).toBe(0);
      });

    it('should return one 500Ft item', ()=>{
        //Arrange
        const expectedResult=300;
        sut.addItem('bigyo', 100);
        sut.addItem('bigyo', 200);
        

        //Act
        const actualResult =  sut.calculateTotal();

        //Assert
        expect(actualResult).toEqual(expectedResult);
    })
})