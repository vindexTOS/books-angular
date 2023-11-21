import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookApiService {
  constructor(private prismaService: PrismaService) {}

  async getAllBooks(requestBody: any) {
    try {
      let data = [];

      if (!requestBody.searchTerm) {
        data = await this.prismaService.books.findMany();
      }

      if (requestBody.searchTerm) {
        console.log(requestBody);
        data = await this.prismaService.books.findMany({
          where: {
            OR: [
              {
                author: {
                  contains: requestBody.searchTerm,
                },
              },
              {
                title: {
                  contains: requestBody.searchTerm,
                },
              },
              {
                releaseYear: {
                  contains: requestBody.searchTerm,
                },
              },
            ],
          },
        });
      }

      if (!data) {
        throw new HttpException(
          'Refrence data does not exist, code is wrong',
          HttpStatus.NOT_FOUND,
        );
      }
      return { data, message: 'data recived' };
    } catch (error) {
      throw new BadRequestException('Internal Server Error');
    }
  }

  async getOneBook(id: string) {
    try {
      return this.prismaService.books.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Internal Server Error');
    }
  }

  async createBook(data: any) {
    try {
      const existingBook = await this.prismaService.books.findFirst({
        where: { title: data.title } as any,
      });

      if (existingBook) {
        throw new ConflictException(
          `Book with title '${data.title}' already exists`,
        );
      }

      return this.prismaService.books.create({
        data,
      });
    } catch (error) {
      throw new BadRequestException('Internal Server Error');
    }
  }

  async deleteBook(id: string): Promise<void> {
    try {
      const book = await this.prismaService.books.findUnique({
        where: { id },
      });

      if (!book) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }

      await this.prismaService.books.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Internal Server Error');
    }
  }
}
