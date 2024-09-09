import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { Item } from './item.entity';
import { AddItemDto } from './dtos/add-item.dto';

const DEFAULT_NEW_ITEM: Partial<AddItemDto> = {
  cost: 0,
  stock: 0,
};

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemsRepository: Repository<Item>,
    private categoriesService: CategoriesService,
  ) {}

  async add({ categoryId, cost, ...data }: AddItemDto) {
    const category = await this.categoriesService.findOne(categoryId);
    Object.assign(data, { category });

    const finalData = { ...DEFAULT_NEW_ITEM, ...data };

    const item = this.itemsRepository.create(finalData);

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

  async delete(id: number) {
    const item = await this.findOne(id);

    return this.itemsRepository.remove(item);
  }
}
