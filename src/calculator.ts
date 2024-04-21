export class Calculator {

    private discountClasses: {[level: string]: new () => DiscountPercentage} = {
        'standard': StandardDiscountPercentage,
        'silver': SilverDiscountPercentage,
        'gold': GoldDiscountPercentage
    };

    public createDiscountPercentage(level: string): number | 0 {
        const DiscountClass = this.discountClasses[level];
        return DiscountClass ? new DiscountClass().percentage(): 0;
    }
}

abstract class DiscountPercentage {
    abstract percentage(): number;
}

class StandardDiscountPercentage extends DiscountPercentage{
    percentage(): number{
        return 5;
    };
}

class SilverDiscountPercentage extends DiscountPercentage{
    percentage(): number{
        return 10;
    };
}

class GoldDiscountPercentage extends DiscountPercentage{
    percentage(): number{
        return 20;
    };
}




