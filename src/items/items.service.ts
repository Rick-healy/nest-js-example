import { Injectable } from '@nestjs/common'
import { Item } from './items.interface'
import { LoggerService } from '../logger/logger.service'

@Injectable()
export class ItemsService {
	private items: Array<Item> = [
		{
			name: 'Item 1',
			description: 'This is the first sample item',
			price: 19.99
		},
		{
			name: 'Item 2',
			description: 'This is the second sample item',
			price: 29.99
		},
		{
			name: 'Item 3',
			description: 'This is the third sample item',
			price: 39.99
		}
	]

	constructor(private readonly logger: LoggerService) {
		this.logger.log('ItemsService initialized with 3 sample items', 'ItemsService');
	}

	create(item: Item): Object {
		this.logger.log(`Creating single item: ${item.name}`, 'ItemsService');
		this.items.push(item);
		const id = this.items.length.toString();
		this.logger.log(`Item created with ID: ${id}`, 'ItemsService');
		return { id };
	}

	createMany(items: Item[]): Object {
		this.logger.log(`Creating ${items.length} items`, 'ItemsService');
		const startIndex = this.items.length;
		this.items.push(...items);
		
		const ids = items.map((item, index) => {
			const id = (startIndex + index + 1).toString();
			this.logger.debug(`Created item "${item.name}" with ID: ${id}`, 'ItemsService');
			return id;
		});

		this.logger.log(`Successfully created ${items.length} items`, 'ItemsService');
		return {
			count: items.length,
			ids
		}
	}

	findAll(): Array<Item> {
		this.logger.log(`Returning all items (count: ${this.items.length})`, 'ItemsService');
		return this.items;
	}
}
