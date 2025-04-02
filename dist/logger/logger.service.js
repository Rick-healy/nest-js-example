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
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
let LoggerService = class LoggerService {
    constructor() {
        this.logLevels = ['error', 'warn', 'log', 'debug', 'verbose'];
    }
    log(message, context) {
        this.printMessage(message, 'log', context);
    }
    error(message, trace, context) {
        this.printMessage(message, 'error', context);
        if (trace) {
            console.error(trace);
        }
    }
    warn(message, context) {
        this.printMessage(message, 'warn', context);
    }
    debug(message, context) {
        this.printMessage(message, 'debug', context);
    }
    verbose(message, context) {
        this.printMessage(message, 'verbose', context);
    }
    printMessage(message, level, context) {
        const timestamp = new Date().toISOString();
        const contextMessage = context ? `[${context}]` : '';
        switch (level) {
            case 'error':
                console.error(`${timestamp} ${contextMessage} [ERROR] ${message}`);
                break;
            case 'warn':
                console.warn(`${timestamp} ${contextMessage} [WARN] ${message}`);
                break;
            case 'log':
                console.log(`${timestamp} ${contextMessage} [INFO] ${message}`);
                break;
            case 'debug':
                console.debug(`${timestamp} ${contextMessage} [DEBUG] ${message}`);
                break;
            case 'verbose':
                console.log(`${timestamp} ${contextMessage} [VERBOSE] ${message}`);
                break;
            default:
                console.log(`${timestamp} ${contextMessage} [UNKNOWN] ${message}`);
        }
    }
};
LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map