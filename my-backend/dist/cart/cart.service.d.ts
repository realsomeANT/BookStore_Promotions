export declare class CartService {
    private calculateTotalPrice;
    addProductsToCart(books: string[]): {
        totalPrice: number;
        totalBooks: number;
        totaldiscount: number;
    };
}
