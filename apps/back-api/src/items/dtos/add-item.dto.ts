import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class AddItemDto {
  @ApiProperty({
    type: String,
    description: 'Required property',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  title: string;

  @ApiPropertyOptional({
    type: Number,
    description: 'Optional property. Default = 0',
  })
  @IsOptional()
  @IsNumber()
  cost: number;

  @ApiProperty({
    type: Number,
    description: 'Required property',
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'Optional property. Default = 0',
  })
  @IsNumber()
  @IsOptional()
  stock: number;

  @ApiProperty({
    type: Number,
    description: 'Required property',
  })
  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
