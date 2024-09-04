import { Expose, Transform } from 'class-transformer';
import { Category } from 'src/categories/category.entity';

export class ItemDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  cost: number;

  @Expose()
  price: number;

  @Expose()
  stock: number;

  @Expose()
  created_at: Date;

  @Expose()
  updated_at: Date;

  // @Transform(({ obj, ...props }) => {
  //   console.log({ obj, props });
  // })
  // @Expose()
  // userId: number;

  @Transform(({ obj }) => obj.category)
  @Expose()
  category: Category;
}
