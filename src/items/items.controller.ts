import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './items.interface';
import { LoggerService } from '../logger/logger.service';

@Controller('items')
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService,
        private readonly logger: LoggerService
    ) {}

    @Get()
    findAll(): Item[] {
        this.logger.log('Retrieving all items', 'ItemsController');
        return this.itemsService.findAll();
    }

    @Post()
    create(@Body() payload: any) {
        this.logger.log(`Received create items request with ${Array.isArray(payload) ? payload.length : 0} items`, 'ItemsController');
        
        // Check if the payload is an array
        if (!Array.isArray(payload)) {
            this.logger.error('Invalid payload format: not an array', 'ItemsController');
            throw new BadRequestException('Payload must be an array of items');
        }

        // Validate each item in the array
        const isValidItemArray = payload.every(item => 
            typeof item === 'object' && 
            'name' in item && 
            'description' in item && 
            'price' in item
        );

        if (!isValidItemArray) {
            this.logger.error('Invalid payload: items missing required properties', 'ItemsController');
            throw new BadRequestException('Each item must contain name, description, and price');
        }

        this.logger.log(`Creating ${payload.length} items`, 'ItemsController');
        return this.itemsService.createMany(payload);
    }
}