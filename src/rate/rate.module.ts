import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [RateController],
  providers: [RateService],
  imports: [PrismaModule],
})
export class RateModule {}
