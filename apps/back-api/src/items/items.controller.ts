import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ItemsService } from './items.service';
import { AddItemDto } from './dtos/add-item.dto';
import { UpdateItemDto } from './dtos/update-item.dto';
import { ItemDto } from './dtos/item.dto';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Post('/new')
  @Serialize(ItemDto)
  async addItem(@Body() body: AddItemDto) {
    return this.itemsService.add(body);
  }

  @Get('/:id')
  getItem(@Param('id') id: string) {
    return this.itemsService.findOne(Number(id));
  }

  @Get()
  getItemsByCategoryId(@Query('categoryId') categoryId: string) {
    return this.itemsService.findAllByCategoryId(Number(categoryId));
  }

  @Patch('/:id')
  editItem(@Param('id') id: string, @Body() body: UpdateItemDto) {
    return this.itemsService.update(Number(id), body);
  }
}
