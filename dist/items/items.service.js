"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const logger_service_1 = require("../logger/logger.service");
let ItemsService = class ItemsService {
    constructor(logger) {
        this.logger = logger;
        this.items = [
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
        ];
        this.logger.log('ItemsService initialized with 3 sample items', 'ItemsService');
    }
    create(item) {
        this.logger.log(`Creating single item: ${item.name}`, 'ItemsService');
        this.items.push(item);
        const id = this.items.length.toString();
        this.logger.log(`Item created with ID: ${id}`, 'ItemsService');
        return { id };
    }
    createMany(items) {
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
        };
    }
    findAll() {
        this.logger.log(`Returning all items (count: ${this.items.length})`, 'ItemsService');
        return this.items;
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map