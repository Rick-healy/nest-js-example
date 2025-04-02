import { Controller, Get } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

@Controller('health')
export class HealthController {
    constructor(private readonly logger: LoggerService) {}

    @Get()
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
}