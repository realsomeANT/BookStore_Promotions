"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
let CartService = class CartService {
    calculateTotalPrice(books) {
        const discounts = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
        let totalPrice = 0;
        const totalBooks = books.length;
        while (books.length > 0) {
            const uniqueBooks = [...new Set(books)];
            const discount = discounts[uniqueBooks.length - 1];
            const priceForSet = uniqueBooks.length * 100 * (1 - discount);
            totalPrice += priceForSet;
            uniqueBooks.forEach((book) => {
                const index = books.indexOf(book);
                if (index > -1) {
                    books.splice(index, 1);
                }
            });
        }
        let totaldiscount = 0;
        totaldiscount = totalBooks * 100 - totalPrice;
        return { totalPrice, totalBooks, totaldiscount };
    }
    addProductsToCart(books) {
        return this.calculateTotalPrice(books);
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)()
], CartService);
//# sourceMappingURL=cart.service.js.map