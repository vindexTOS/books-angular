import {
  Body,
  Controller,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BookApiService } from './book-api.service';

@Controller('book-api')
export class BookApiController {
  constructor(private bookApiService: BookApiService) {}
  @Post('get-all')
  @HttpCode(201)
  async getAllBooks(@Body() requestBody: any) {
    return this.bookApiService.getAllBooks(requestBody);
  }

  @Post('get-one/:id')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async getOneBook(@Param('id') id: string) {
    const book = await this.bookApiService.getOneBook(id);

    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    return book;
  }

  @Post('create')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createBook(@Body() requestBody: any) {
    return this.bookApiService.createBook(requestBody);
  }

  @Post('delete/:id')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async deleteBook(@Param('id') id: string) {
    await this.bookApiService.deleteBook(id);
    return { message: 'Book deleted successfully' };
  }
}
