import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	// Get port from environment variable or use 8080 as fallback
	const port = process.env.PORT ?? 3000;
	const app = await NestFactory.create(AppModule);
	
	// Enable validation globally
	app.useGlobalPipes(new ValidationPipe());
	
	await app.listen(port);
	
	console.log(`XXXXXXXXXXX Application is running on port ${port}`);
}

bootstrap();