import { LoggerService } from '../logger/logger.service';
export declare class HealthController {
    private readonly logger;
    constructor(logger: LoggerService);
    check(): {
        status: string;
        timestamp: string;
        service: string;
        environment: string;
    };
}
