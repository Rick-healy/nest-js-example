import { ItemsService } from './items.service';
import { Item } from './items.interface';
import { LoggerService } from '../logger/logger.service';
export declare class ItemsController {
    private readonly itemsService;
    private readonly logger;
    constructor(itemsService: ItemsService, logger: LoggerService);
    findAll(): Item[];
    create(payload: any): Object;
}
