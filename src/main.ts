import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	// Get port from environment variable or use 8080 as fallback
	const port = process.env.PORT ?? 3000;
	const app = await NestFactory.create(AppModule);

	// adding OpenTel config 
	// Import the `useAzureMonitor()` function from the `@azure/monitor-opentelemetry` package.
	const { useAzureMonitor } = require("@azure/monitor-opentelemetry");

	// Call the `useAzureMonitor()` function to configure OpenTelemetry to use Azure Monitor.
	console.log('Initializing Azure Monitor OpenTelemetry...');
	
	// Check if connection string is set
	if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
		console.log('APPLICATIONINSIGHTS_CONNECTION_STRING is set');
		console.log(`Connection string is : ${process.env.APPLICATIONINSIGHTS_CONNECTION_STRING}...`);
		
		try {
			useAzureMonitor();
			console.log('Azure Monitor OpenTelemetry initialized successfully');
		} catch (error) {
			console.error('Failed to initialize Azure Monitor OpenTelemetry:', error.message);
		}
	} else {
		console.warn('WARNING: APPLICATIONINSIGHTS_CONNECTION_STRING is not set. Skipping telemetry initialization.');
	}
	
	// Enable validation globally
	app.useGlobalPipes(new ValidationPipe());
	
	await app.listen(port);
	
	console.log(`Application is running on port ${port}`);
}

bootstrap();