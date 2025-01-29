import { CartService } from './cart.service';
import { AddProductsDto } from './dto/add-products.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addProducts(addProductsDto: AddProductsDto): {
        totalPrice: number;
        totalBooks: number;
        totaldiscount: number;
    };
}
