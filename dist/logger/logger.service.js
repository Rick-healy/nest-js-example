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
        this.printMessage(message, 'error', context, trace);
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
    printMessage(message, level, context, trace) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            level: this.mapLogLevel(level),
            message,
            context
        };
        if (trace) {
            logEntry.trace = trace;
        }
        const jsonLog = JSON.stringify(logEntry);
        switch (level) {
            case 'error':
                console.error(jsonLog);
                break;
            case 'warn':
                console.warn(jsonLog);
                break;
            case 'log':
                console.log(jsonLog);
                break;
            case 'debug':
                console.debug(jsonLog);
                break;
            case 'verbose':
                console.log(jsonLog);
                break;
            default:
                console.log(jsonLog);
        }
    }
    mapLogLevel(level) {
        switch (level) {
            case 'log':
                return 'INFO';
            case 'error':
                return 'ERROR';
            case 'warn':
                return 'WARN';
            case 'debug':
                return 'DEBUG';
            case 'verbose':
                return 'VERBOSE';
            default:
                return 'UNKNOWN';
        }
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggerService);
//# sourceMappingURL=logger.service.js.map