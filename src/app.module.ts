import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SsrService } from './ssr/ssr.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SsrService],
})
export class AppModule { }
