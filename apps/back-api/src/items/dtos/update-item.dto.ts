import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateItemDto {
  @IsString()
  @MaxLength(50)
  @IsOptional()
  title: string;

  @IsNumber()
  @IsOptional()
  cost: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  stock: number;

  @IsNumber()
  @IsOptional()
  categoryId: number;
}
