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
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const logger_service_1 = require("../logger/logger.service");
let HealthController = class HealthController {
    constructor(logger) {
        this.logger = logger;
    }
    check() {
        this.logger.log('Health check requested', 'HealthController');
        const status = {
            status: 'ok',
            timestamp: new Date().toISOString(),
            service: 'items-api',
            environment: process.env.NODE_ENV || 'development'
        };
        this.logger.debug(`Health check response: ${JSON.stringify(status)}`, 'HealthController');
        return status;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "check", null);
HealthController = __decorate([
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], HealthController);
exports.HealthController = HealthController;
//# sourceMappingURL=health.controller.js.map