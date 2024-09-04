import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  create(data: CreateCategoryDto) {
    const category = this.categoriesRepository.create(data);
    return this.categoriesRepository.save(category);
  }

  findOne(id: number) {
    return this.categoriesRepository.findOneBy({ id });
  }

  findAll(name: string) {
    return this.categoriesRepository.findBy({ name });
  }
}
