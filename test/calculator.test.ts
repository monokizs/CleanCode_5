import { Calculator } from "../src/calculator";

describe("Calculator tests", () => {
    it.each([
        ["standard", 5],
        ["silver", 10],
        ["gold", 20],
        ["", 0]
    ])('should a string and returns the number', (level: string, expectedResult: number) => {

        // Arrange
        let calculator = new Calculator();

        // Act
        const result = calculator.calculateDiscountPercentage(level);

        // Assert
        expect(result).toBe(expectedResult);
    })
})