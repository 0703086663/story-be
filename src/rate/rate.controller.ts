import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RateService } from './rate.service';
import { RateDto, UpdateRateDto } from './dto/rate.dto';

@ApiTags('rate')
@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Rate created successfully' })
  @ApiBadRequestResponse({ description: 'Invalid input' })
  create(@Body() createRateDto: RateDto) {
    return this.rateService.create(createRateDto);
  }

  @Get(':productId')
  @ApiOkResponse({ description: 'Rates retrieved successfully' })
  findAllByProductId(@Param('productId') productId: string) {
    return this.rateService.findAllByProductId(+productId);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Rate updated successfully' })
  update(@Param('id') id: string, @Body() updateRateDto: UpdateRateDto) {
    return this.rateService.update(+id, updateRateDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Rate deleted successfully' })
  remove(@Param('id') id: string) {
    return this.rateService.remove(+id);
  }
}
