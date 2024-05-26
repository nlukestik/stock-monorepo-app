import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class AddItemDto {
  @IsString()
  @MaxLength(50)
  title: string;

  @IsNotEmpty()
  @IsNumber()
  cost: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNumber()
  @IsOptional()
  stock: number;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
