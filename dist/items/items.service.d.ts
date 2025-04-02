import { Item } from './items.interface';
import { LoggerService } from '../logger/logger.service';
export declare class ItemsService {
    private readonly logger;
    private items;
    constructor(logger: LoggerService);
    create(item: Item): Object;
    createMany(items: Item[]): Object;
    findAll(): Array<Item>;
}
