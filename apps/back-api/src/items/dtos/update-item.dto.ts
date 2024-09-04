import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateItemDto {
  @ApiPropertyOptional({
    type: String,
    description: 'Optional property',
  })
  @IsString()
  @MaxLength(50)
  @IsOptional()
  title: string;

  @ApiPropertyOptional({
    type: Number,
    description: 'Optional property',
  })
  @IsNumber()
  @IsOptional()
  cost: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'Optional property',
  })
  @IsNumber()
  @IsOptional()
  price: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'Optional property',
  })
  @IsNumber()
  @IsOptional()
  stock: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'Optional property',
  })
  @IsNumber()
  @IsOptional()
  categoryId: number;
}
