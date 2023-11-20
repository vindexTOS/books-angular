import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookApiService } from './book/book-api/book-api.service';
import { BookApiController } from './book/book-api/book-api.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, BookApiController],
  providers: [AppService, BookApiService],
})
export class AppModule {}
