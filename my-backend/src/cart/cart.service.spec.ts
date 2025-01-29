import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [CartService],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addProductsToCart', () => {
    it('should calculate total price, total books, and total discount correctly for 1 book', () => {
      const result = service.addProductsToCart(['book1']);
      expect(result).toEqual({
        totalPrice: 100,
        totalBooks: 1,
        totaldiscount: 0,
      });
    });

    it('should calculate total price, total books, and total discount correctly for 2 different books', () => {
      const result = service.addProductsToCart(['book1', 'book2']);
      expect(result).toEqual({
        totalPrice: 180,
        totalBooks: 2,
        totaldiscount: 20,
      });
    });

    it('should calculate total price, total books, and total discount correctly for 3 different books', () => {
      const result = service.addProductsToCart(['book1', 'book2', 'book3']);
      expect(result).toEqual({
        totalPrice: 240,
        totalBooks: 3,
        totaldiscount: 60,
      });
    });

    it('should calculate total price, total books, and total discount correctly for 4 different books', () => {
      const result = service.addProductsToCart([
        'book1',
        'book2',
        'book3',
        'book4',
      ]);
      expect(result).toEqual({
        totalPrice: 280,
        totalBooks: 4,
        totaldiscount: 120,
      });
    });

    it('should calculate total price, total books, and total discount correctly for 5 different books', () => {
      const result = service.addProductsToCart([
        'book1',
        'book2',
        'book3',
        'book4',
        'book5',
      ]);
      expect(result).toEqual({
        totalPrice: 300,
        totalBooks: 5,
        totaldiscount: 200,
      });
    });

    it('should calculate total price, total books, and total discount correctly for 6 different books', () => {
      const result = service.addProductsToCart([
        'book1',
        'book2',
        'book3',
        'book4',
        'book5',
        'book6',
      ]);
      expect(result).toEqual({
        totalPrice: 300,
        totalBooks: 6,
        totaldiscount: 300,
      });
    });

    it('should calculate total price, total books, and total discount correctly for 7 different books', () => {
      const result = service.addProductsToCart([
        'book1',
        'book2',
        'book3',
        'book4',
        'book5',
        'book6',
        'book7',
      ]);
      expect(result).toEqual({
        totalPrice: 280,
        totalBooks: 7,
        totaldiscount: 420,
      });
    });

    it('should calculate total price, total books, and total discount correctly for duplicate books', () => {
      const result = service.addProductsToCart([
        'book1',
        'book1',
        'book2',
        'book2',
        'book3',
        'book3',
      ]);
      expect(result).toEqual({
        totalPrice: 480,
        totalBooks: 6,
        totaldiscount: 120,
      });
    });

    it('should calculate total price, total books, and total discount correctly for mixed books', () => {
      const result = service.addProductsToCart([
        'book1',
        'book2',
        'book3',
        'book1',
        'book2',
        'book3',
        'book4',
      ]);
      expect(result).toEqual({
        totalPrice: 520,
        totalBooks: 7,
        totaldiscount: 180,
      });
    });

    it('should calculate total price, total books, and total discount correctly for only 10 books', () => {
      const result = service.addProductsToCart([
        'book1',
        'book1',
        'book1',
        'book1',
        'book1',
        'book1',
        'book1',
        'book1',
        'book1',
        'book1',
      ]);
      expect(result).toEqual({
        totalPrice: 1000,
        totalBooks: 10,
        totaldiscount: 0,
      });
    });

    it('should calculate total price, total books, and total discount correctly for mixed books', () => {
      const result = service.addProductsToCart(['book1', 'book1', 'book2']);
      expect(result).toEqual({
        totalPrice: 280,
        totalBooks: 3,
        totaldiscount: 20,
      });
    });

    it('should calculate total price, total books, and total discount correctly for only 10 books', () => {
      const result = service.addProductsToCart([
        'book1',
        'book1',
        'book1',
        'book2',
        'book2',
        'book2',
      ]);
      expect(result).toEqual({
        totalPrice: 540,
        totalBooks: 6,
        totaldiscount: 60,
      });
    });
  });
});
