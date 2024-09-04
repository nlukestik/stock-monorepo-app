import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    type: String,
    description: 'Required property',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
