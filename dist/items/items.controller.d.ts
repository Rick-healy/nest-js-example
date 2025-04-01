import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './items.interface';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(data: CreateItemDto): Object;
    findAll(): Array<Item>;
}
