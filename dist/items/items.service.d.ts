import { Item } from './items.interface';
export declare class ItemsService {
    private items;
    create(item: Item): Object;
    findAll(): Array<Item>;
}
