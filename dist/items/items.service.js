"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let ItemsService = class ItemsService {
    constructor() {
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
    }
    create(item) {
        this.items.push(item);
        return { id: this.items.length.toString() };
    }
    findAll() {
        return this.items;
    }
};
ItemsService = __decorate([
    common_1.Injectable()
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map