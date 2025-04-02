import { ValidateNested, ArrayMinSize, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateItemDto } from './create-item.dto';

export class CreateItemsDto {
  @IsArray()
  @ArrayMinSize(1, { message: 'At least one item must be provided' })
  @ValidateNested({ each: true })
  @Type(() => CreateItemDto)
  readonly items: CreateItemDto[];
}