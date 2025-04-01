import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { HealthController } from './health/health.controller';
import { LoggerModule } from './logger/logger.module';

@Module({
	imports: [LoggerModule],
	controllers: [ ItemsController, HealthController ],
	providers: [ ItemsService ],
})

export class AppModule {}