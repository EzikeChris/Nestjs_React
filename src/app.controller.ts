import { Controller, Get } from '@nestjs/common'
import { SsrService } from './ssr/ssr.service'

@Controller()
export class AppController {
  constructor(private readonly ssrService: SsrService) { }

  @Get()
  getHello(): string {
    return this.ssrService.renderReactApp();
  }
}