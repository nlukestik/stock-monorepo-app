import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { Item } from './item.entity';
import { AddItemDto } from './dtos/add-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemsRepository: Repository<Item>,
    private categoriesService: CategoriesService,
  ) {}

  async add({ categoryId, ...data }: AddItemDto) {
    const category = await this.categoriesService.findOne(categoryId);
    Object.assign(data, { category });

    const item = this.itemsRepository.create(data);

    return this.itemsRepository.save(item);
  }

  findOne(id: number) {
    const item = this.itemsRepository.findOneBy({ id });

    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return item;
  }

  findAllByCategoryId(categoryId: number) {
    return this.itemsRepository.find({
      where: { category: { id: categoryId } },
    });
  }

  async update(id: number, attrs: Partial<Item>) {
    const item = await this.findOne(id);

    Object.assign(item, attrs);
    return this.itemsRepository.save(item);
  }
}
