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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
const items_service_1 = require("./items.service");
const logger_service_1 = require("../logger/logger.service");
let ItemsController = class ItemsController {
    constructor(itemsService, logger) {
        this.itemsService = itemsService;
        this.logger = logger;
    }
    findAll() {
        this.logger.log('Retrieving all items', 'ItemsController');
        return this.itemsService.findAll();
    }
    create(payload) {
        this.logger.log(`Received create items request with ${Array.isArray(payload) ? payload.length : 0} items`, 'ItemsController');
        if (!Array.isArray(payload)) {
            this.logger.error('Invalid payload format: not an array', 'ItemsController');
            throw new common_1.BadRequestException('Payload must be an array of items');
        }
        const isValidItemArray = payload.every(item => typeof item === 'object' &&
            'name' in item &&
            'description' in item &&
            'price' in item);
        if (!isValidItemArray) {
            this.logger.error('Invalid payload: items missing required properties', 'ItemsController');
            throw new common_1.BadRequestException('Each item must contain name, description, and price');
        }
        this.logger.log(`Creating ${payload.length} items`, 'ItemsController');
        return this.itemsService.createMany(payload);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "create", null);
ItemsController = __decorate([
    (0, common_1.Controller)('items'),
    __metadata("design:paramtypes", [items_service_1.ItemsService,
        logger_service_1.LoggerService])
], ItemsController);
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map