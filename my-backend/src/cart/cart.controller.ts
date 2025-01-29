import { Controller, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddProductsDto } from './dto/add-products.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  addProducts(@Body() addProductsDto: AddProductsDto) {
    return this.cartService.addProductsToCart(addProductsDto.books);
  }
}
