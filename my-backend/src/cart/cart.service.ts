import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  private calculateTotalPrice(books: string[]): {
    totalPrice: number;
    totalBooks: number;
    totaldiscount: number;
  } {
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

  addProductsToCart(books: string[]): {
    totalPrice: number;
    totalBooks: number;
    totaldiscount: number;
  } {
    return this.calculateTotalPrice(books);
  }
}
