import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post('/new')
  createCategory(@Body() body: CreateCategoryDto) {
    return this.categoriesService.create(body);
  }

  @Get('/:id')
  getCategory(@Param('id') id: string) {
    return this.categoriesService.findOne(Number(id));
  }

  @Get()
  getCategories(@Query('name') name: string) {
    return this.categoriesService.findAll(name);
  }
}
