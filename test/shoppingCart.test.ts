import { mock, mockReset } from 'jest-mock-extended';
import { CartItem } from '../src/cartItem';
import { ShoppingCart } from '../src/shoppingCart';
import { Product } from '../src/product';


const mockedCartItem = mock<CartItem>();


describe('school tests',() =>{
    let sut: ShoppingCart;

    beforeEach(()=>{
        mockReset(mockedCartItem);
        sut=new ShoppingCart();
    })

    it('should return zero for an empty Cart', () => {
        // Arrange 
      
        // Act
        const actualResult = sut.calculateTotal();
      
        // Assert
        expect(actualResult).toEqual(0);
      });

      it("should return total for single item", () => {
        // Arrange
        
        const product = new Product("bigyo", 300);
        sut.addItem(product);
    
        // Act
        const total = sut.calculateTotal();
    
        // Assert
        expect(total).toEqual(300); // Expect total to be the item's price
      });



    it('should calculate total for multiple items', ()=>{
        //Arrange
        const mockedProducts = [
            new Product("bigyo", 300),
            new Product("kigyo", 500),
            new Product("begyo", 200),
          ];

        const expectedResult=1000;
        
        for (const product of mockedProducts) {
            sut.addItem(product); 
        }

        //Act
        const actualResult =  sut.calculateTotal();

        //Assert
        expect(actualResult).toEqual(expectedResult);
    })
})